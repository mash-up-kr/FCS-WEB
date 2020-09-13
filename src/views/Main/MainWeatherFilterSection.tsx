import React, { useCallback } from 'react';
import styled from 'styled-components';
import { WeatherIcon } from '../../components/common/Icon/WeatherIcon';
import { TempDiffCalculator } from '../../components/common/TempDiffCalculator';
import { UserFilter, Weather, WeatherEnum } from '../../model/User';
import { blue, gray3, gray5, gray7, red, white } from '../../utils/color';
import { Description, Title } from './MainCommonUI';

interface Props {
  filter: UserFilter;
  setFilter: (filter: UserFilter) => void;
  option: {
    title: string;
    message: string;
    type: string;
  };
}

export const MainWeatherFilterSection = React.memo<Props>(({ filter, setFilter, option }) => {
  const handleSelectWeather = useCallback(
    //memo(@kirby): 임시방편으로 any
    (weather: any) => {
      setFilter({ ...filter, weather });
    },
    [filter, setFilter]
  );

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
        <pre>{option.title}</pre>
      </Title>
      <WeatherDescription>{option.message}</WeatherDescription>
      <WeatherText>날씨</WeatherText>
      {/* memo(@kirby): 코드 ㄹㅇ 안습 */}
      <WeatherSelectSection>
        <WeatherOption
          onClick={() => handleSelectWeather(WeatherEnum.CLEAR)}
          active={WeatherEnum.CLEAR === filter.weather}
        >
          <StyledWeatherIcon weather={WeatherEnum.CLEAR} />
          <WeatherStatusText>{Weather[WeatherEnum.CLEAR]}</WeatherStatusText>
        </WeatherOption>
        <WeatherOption
          onClick={() => handleSelectWeather(WeatherEnum.CLOUDS)}
          active={WeatherEnum.CLOUDS === filter.weather}
        >
          <StyledWeatherIcon weather={WeatherEnum.CLOUDS} />
          <WeatherStatusText>{Weather[WeatherEnum.CLOUDS]}</WeatherStatusText>
        </WeatherOption>
        <WeatherOption
          onClick={() => handleSelectWeather(WeatherEnum.RAIN)}
          active={WeatherEnum.RAIN === filter.weather}
        >
          <StyledWeatherIcon weather={WeatherEnum.RAIN} />
          <WeatherStatusText>{Weather[WeatherEnum.RAIN]}</WeatherStatusText>
        </WeatherOption>
        <WeatherOption
          onClick={() => handleSelectWeather(WeatherEnum.SNOW)}
          active={WeatherEnum.SNOW === filter.weather}
        >
          <StyledWeatherIcon weather={WeatherEnum.SNOW} />
          <WeatherStatusText>{Weather[WeatherEnum.SNOW]}</WeatherStatusText>
        </WeatherOption>
        <WeatherOption
          onClick={() => handleSelectWeather(WeatherEnum.THUNDERSTORM)}
          active={WeatherEnum.THUNDERSTORM === filter.weather}
        >
          <StyledWeatherIcon weather={WeatherEnum.THUNDERSTORM} />
          <WeatherStatusText>{Weather[WeatherEnum.THUNDERSTORM]}</WeatherStatusText>
        </WeatherOption>
      </WeatherSelectSection>
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
      {option.type === 'filter' && (
        <TempDiffSection>
          <TempDifferenceText>피드 허용 온도 오차범위</TempDifferenceText>
          <TempDiffCalculator tempDifference={filter.tempDifference} onTempDiffChange={handleTempDiffChange} />
        </TempDiffSection>
      )}
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

const StyledWeatherIcon = styled(WeatherIcon)`
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
