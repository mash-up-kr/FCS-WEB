import React from 'react';
import styled from 'styled-components';
import { gray0, gray5, gray7, gray8, gray9, red, blue } from '../../utils/color';
import SUN from '../../assets/banner_sun.png';
import { Icon } from '../../components/common/Icon';
import { Description, Rectangle } from './MainCommonUI';

const MainContentSection: React.FC = React.memo(() => (
  <MainContentContainer>
    <AreaName>서울 용산구</AreaName>
    <Description>20년 6월 21일 화요일</Description>
    <TempHeading>24°</TempHeading>
    <Thumbnail src={SUN} alt="thumbnail" />
    <TemperatureSection>
      <MainDescription className="temp-min">18°</MainDescription>
      <Rectangle />
      <MainDescription className="temp-max">32°</MainDescription>
      <MainDescription>체감온도 31°</MainDescription>
    </TemperatureSection>
    <IndicatorSection>
      <div>
        <Icon icon="dust" />
        <IndicatorDescription>미세먼지 매우 나쁨</IndicatorDescription>
      </div>
      <div>
        <Icon icon="precipitation" />
        <IndicatorDescription>강수량 75mm</IndicatorDescription>
      </div>
    </IndicatorSection>
    <UpdateDescription>업데이트 6/21 오전 7:00</UpdateDescription>
  </MainContentContainer>
));

const MainContentContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 36px 20px 25px 20px;
  position: relative;
  background-color: ${gray0};
`;

const AreaName = styled.h2`
  font-size: 14px;
  color: ${gray8};
`;

const MainDescription = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: ${gray7};
  margin-top: 2px;
`;

const TempHeading = styled.p`
  font-size: 60px;
  font-weight: bold;
  color: ${gray9};
  margin-top: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: 64px;
  letter-spacing: normal;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 36px;
  right: 0;
`;

const TemperatureSection = styled.div`
  display: flex;
  align-items: center;

  & > div {
    font-size: 14px;
    margin-right: 5px;
  }

  .temp-max {
    color: ${red};
  }

  .temp-min {
    color: ${blue};
  }
`;

const IndicatorSection = styled.div`
  margin-top: 51px;

  & > div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
`;

const IndicatorDescription = styled(Description)`
  margin-left: 5px;
  color: ${gray8};
`;

const UpdateDescription = styled(Description)`
  color: ${gray5};
  font-size: 10px;
`;

export default MainContentSection;
