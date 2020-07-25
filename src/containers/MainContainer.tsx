import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { gray0, gray5, gray7, gray8, gray9, red, blue } from '../utils/color';
import { Header } from '../components/common/Header';
import SUN from '../assets/banner_sun.png';
import { Feed } from '../components/Feed';
import { UploadButton } from '../views/Main/components/UploadButton';

const MainContainer: React.FC = () => {
  const [active, setActive] = useState(false);

  const handleToggle = useCallback(() => {
    setActive(!active);
  }, [active, setActive]);

  return (
    <Container active={active}>
      <Wrapper>
        <AreaName>서울 용산구</AreaName>
        <Date>20년 6월 21일 화요일</Date>
        <NowTemperature>24°</NowTemperature>
        <TempDetail>
          <MinTemp>18°</MinTemp>
          <MaxTemp>32°</MaxTemp>
        </TempDetail>
        <WeatherSpan>미세먼지 매우 나쁨</WeatherSpan>
        <WeatherSpan>강수량 75mm</WeatherSpan>
        <Description>업데이트 6/21 오전 7:00</Description>
        <StyledUploadButton>무더운 오늘, 당신의 옷은?</StyledUploadButton>
        <Thumbnail src={SUN} alt="banner-sun" />
      </Wrapper>

      <Header active={active} onClick={handleToggle}>
        <Feed />
      </Header>
    </Container>
  );
};

const Container = styled.div<{ active: boolean }>`
  height: 100vh;
  position: relative;
  overflow-y: ${(props) => (props.active ? 'scroll;' : 'hidden;')};
`;

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  padding: 36px 20px 25px 20px;
  position: relative;
  background-color: ${gray0};
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 36px;
  right: 0;
`;

const AreaName = styled.h2`
  font-size: 14px;
  color: ${gray8};
`;

const TempDetail = styled.div`
  display: flex;
  margin-top: 2px;
  margin-bottom: 50px;

  & > span {
    margin-right: 5px;
  }
`;

const MinTemp = styled.span`
  font-size: 14px;
  color: ${blue};
`;

const MaxTemp = styled.span`
  font-size: 14px;
  color: ${red};
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: normal;
  color: ${gray7};
  margin-top: 2px;
`;

const NowTemperature = styled.p`
  font-size: 60px;
  font-weight: bold;
  color: ${gray9};
  margin-top: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: 64px;
  letter-spacing: normal;
`;

const WeatherSpan = styled.span`
  display: block;
  font-size: 12px;
  color: ${gray8};
  margin-bottom: 5px;
`;

const Description = styled.span`
  font-size: 10px;
  color: ${gray5};
`;

const StyledUploadButton = styled(UploadButton)`
  margin-top: 20px;
`;

export default MainContainer;
