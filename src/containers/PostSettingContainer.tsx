import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { gray1, gray9, keyColor } from '../utils/color';
import { Link } from 'react-router-dom';
import { Tabs } from '../components/common/Tabs/index';
import { MainFilterSection } from '../views/Main/MainFilterSection';
import { MainWeatherFilterSection } from '../views/Main/MainWeatherFilterSection';
import { UserFilter, WeatherEnum } from '../model/User';

const PostSettingContainer: React.FC = () => {
  const [filter, setFilter] = useState<UserFilter>({
    styleIds: [],
    weather: WeatherEnum.CLEAR,
    temperature: 22,
    tempDifference: 2,
  });

  const handleSetFilter = useCallback((filter: UserFilter) => {
    setFilter(filter);
  }, []);

  const mainWeatherFilterSectionOption = {
    title: `닉네임 님, 날씨와 온도가 \n이게 맞나요?`,
    message: '어떤 날씨와 온도에 옷을 입으셨나요?',
    type: 'upload',
  };

  const mainFilterSectionOption = {
    title: `닉네임 님의 스타일을\n알려주세요!`,
    message: '오늘은 어떤 스타일의 옷을 입으셨나요?',
    type: 'upload',
  };

  const tabData = [
    { title: '날짜', content: <div>날짜 뷰</div> },
    {
      title: '스타일',
      content: <MainFilterSection filter={filter} setFilter={handleSetFilter} option={mainFilterSectionOption} />,
    },
    { title: '지역', content: <div>지역 뷰</div> },
    {
      title: '날씨',
      content: (
        <MainWeatherFilterSection filter={filter} setFilter={handleSetFilter} option={mainWeatherFilterSectionOption} />
      ),
    },
  ];

  return (
    <Wrapper>
      <HeaderWrapper>
        <BackIcon to="/post">이전</BackIcon>
        피드 작성
        <CloseIcon to="/">업로드</CloseIcon>
      </HeaderWrapper>
      <Tabs data={tabData} />
    </Wrapper>
  );
};

const BackIcon = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-left: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 48px;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  color: ${gray9};
`;
const CloseIcon = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-right: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 48px;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  color: ${keyColor};
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid ${gray1};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default PostSettingContainer;
