import React, { useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/common/Icon';
import { TempDiffCalculator } from '../../components/common/TempDiffCalculator';
import { UserFilter, Weather, WeatherType } from '../../model/User';
import { UserContext } from '../../stores/User';
import { blue, gray3, gray5, gray7, red, white } from '../../utils/color';
import { Description, Title } from './MainCommonUI';

interface Props {
  filter: UserFilter;
  setFilter: (filter: UserFilter) => void;
}

export const MainWeatherFilterSection = React.memo<Props>(({ filter, setFilter }) => {
  const { userFilterValue } = useContext(UserContext);

  const handleSelectWeather = useCallback(
    //memo(@kirby): 임시방편으로 any
    (weather: any) => {
      setFilter({ ...filter, weather });
    },
    [filter, setFilter]
  );

  const weatherTypes = useMemo(() => {
    return Object.entries(Weather).map(([key, value]) => (
      <WeatherOption onClick={() => handleSelectWeather(key)} active={key === filter.weather}>
        <WeatherIcon icon="sun" />
        <WeatherStatusText>{value}</WeatherStatusText>
      </WeatherOption>
    ));
  }, [filter.weather, handleSelectWeather]);

  const handleTempChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter({ ...filter, temperature: Number(e.target.value) });
    },
    [filter, setFilter]
  );

  const handleTempDiffChange = useCallback(
    (tempDifference: number) => {
      setFilter({ ...filter, tempDifference });
    },
    [filter, setFilter]
  );

  return (
    <Container>
      <Title>
        닉네임 님! 어떤 날씨와 온도가
        <br />
        궁금하신가요?
      </Title>
      <WeatherDescription>어떤 날씨와 온도가 궁금하신가요?</WeatherDescription>
      <WeatherText>날씨</WeatherText>
      <WeatherSelectSection>{weatherTypes}</WeatherSelectSection>
      <WeatherText>온도</WeatherText>
      <TempSection>
        <WeatherDescription>현재 설정온도</WeatherDescription>
        <Temperature>{`${filter.temperature}°`}</Temperature>
      </TempSection>
      <TempInputRange value={filter.temperature} onChange={handleTempChange} type="range" min={-50} max={50} step={1} />
      <TempPreviewSection>
        <TempPreviewText>-50°</TempPreviewText>
        <TempPreviewText>0°</TempPreviewText>
        <TempPreviewText>+50°</TempPreviewText>
      </TempPreviewSection>
      <TempDiffSection>
        <TempDifferenceText>피드 허용 온도 오차범위</TempDifferenceText>
        <TempDiffCalculator tempDifference={filter.tempDifference} onTempDiffChange={handleTempDiffChange} />
      </TempDiffSection>
    </Container>
  );
});

const Container = styled.div`
  padding: 40px 20px;
  margin-bottom: 50px;
`;

const WeatherDescription = styled(Description)`
  margin-top: 5px;
  font-size: 14px;
`;

const WeatherText = styled(Description)`
  margin-top: 40px;
  font-size: 14px;
  font-weight: bold;
`;

const WeatherSelectSection = styled.div`
  display: flex;
  margin-top: 12px;
`;

const WeatherOption = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  margin-right: 15px;
  padding: 10px 8px 5px;

  ${props =>
    props.active &&
    `
    border-radius: 7px;
  background-color: #eaf5f5;
  `}
`;

const WeatherIcon = styled(Icon)`
  margin-bottom: 7px;
`;

const WeatherStatusText = styled.div`
  font-size: 14px;
  color: ${gray5};
`;

const TempSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const Temperature = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const TempInputRange = styled.input`
  -webkit-appearance: none;
  background: linear-gradient(90deg, ${blue} 0%, ${red} 100%);
  height: 3px;
  border-radius: 8px;
  width: 100%;
  margin-top: 22px;

  &::-webkit-slider-thumb {
    width: 18px;
    height: 18px;
    box-shadow: 0 0 4px 0 rgba(17, 17, 20, 0.5);
    -webkit-appearance: none;
    background-color: ${white};
    border-radius: 50%;
  }
`;

const TempPreviewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

const TempPreviewText = styled(Description)`
  color: ${gray3};
  font-size: 14px;
`;

const TempDiffSection = styled.div`
  display: flex;
  margin-top: 48px;
  align-items: center;
  justify-content: space-between;
`;

const TempDifferenceText = styled(Description)`
  color: ${gray7};
  font-size: 14px;
`;
