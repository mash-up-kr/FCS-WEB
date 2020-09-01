import React from 'react';
import styled from 'styled-components';
import { gray0, gray7, gray8, gray9 } from '../../utils/color';
import SUN from '../../assets/banner_sun.png';
import { Icon } from '../../components/common/Icon';

const MainContentSection: React.FC = React.memo(() => (
  <MainContentContainer>
    <AreaName>서울 용산구</AreaName>
    <MainDescription>20년 6월 21일 화요일</MainDescription>
    <TempHeading>24°</TempHeading>
    <Thumbnail src={SUN} alt="thumbnail" />
    <Icon icon="sun" />
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

export default MainContentSection;
