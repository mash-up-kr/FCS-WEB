import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import { gray5, white, keyColor } from '../../../utils/color';
import { Description, Rectangle, TextButton } from '../../../views/Main/MainCommonUI';
import { Badge } from '../Badge';
import { Icon } from '../Icon';
import { PopupModal } from '../PopupModal';
import { Tabs } from '../Tabs';
import { MainFilterSection } from '../../../views/Main/MainFilterSection';
import { MainWeatherFilterSection } from '../../../views/Main/MainWeatherFilterSection';
import { UserFilter } from '../../../model/User';

interface HeaderProps {
  userFilterValue: UserFilter;
  getStyleName: (styleId: number) => string;
  setUserFilter: (userFilter: UserFilter) => void;
}

export const Header: React.FC<HeaderProps> = props => {
  const { userFilterValue, getStyleName, setUserFilter, children, ...restProps } = props;
  const headerRef = useRef<any>(null);
  const [sticky, setSticky] = useState(false);
  const [opened, setOpened] = useState(false);

  const [filter, setFilter] = useState<UserFilter>(userFilterValue);

  const handleSetFilter = useCallback((filter: UserFilter) => {
    setFilter(filter);
  }, []);

  const MainWeatherFilterSectionOption = {
    title: '닉네임 님! 어떤 날씨와 온도가 \n궁금하신가요?',
    message: '어떤 날씨와 온도가 궁금하신가요?',
    type: 'filter',
  };

  const MainFilterSectionOption = {
    title: '닉네임 님의 스타일을 \n알려주세요!',
    message: '오늘은 어떤 스타일의 옷을 입으실건가요?',
    type: 'filter',
  };

  const tabData = [
    {
      title: '스타일',
      content: <MainFilterSection filter={filter} setFilter={handleSetFilter} option={MainFilterSectionOption} />,
    },
    {
      title: '날씨',
      content: (
        <MainWeatherFilterSection filter={filter} setFilter={handleSetFilter} option={MainWeatherFilterSectionOption} />
      ),
    },
  ];

  const handler = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  useEffect(() => {
    const headerSectionObserver = new IntersectionObserver(handler, {
      rootMargin: '0px 0px -100%',
    });

    headerSectionObserver.observe(headerRef.current);
  }, [handler]);

  const openModal = useCallback(() => {
    setOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpened(false);
  }, []);

  const applyFilter = useCallback(() => {
    setUserFilter(filter);

    closeModal();
  }, [setUserFilter, filter, closeModal]);

  const minTemp = userFilterValue.temperature - userFilterValue.tempDifference;
  const maxTemp = userFilterValue.temperature + userFilterValue.tempDifference;

  const styleBadges = useMemo(() => {
    return userFilterValue?.styleIds.map(styleId => {
      const style = getStyleName(styleId);

      return (
        <StyledBadge key={styleId} color="active">
          {style}
        </StyledBadge>
      );
    });
  }, [userFilterValue, getStyleName]);

  return (
    <Wrapper>
      <StyledHeader sticky={sticky} ref={headerRef} {...restProps}>
        <TopHeaderSection>
          <WeatherSection>
            <Icon icon="sun" />
            <TempTitle>{userFilterValue.temperature}°</TempTitle>
            <TempDescription>{minTemp}°</TempDescription>
            <StyledRectangle />
            <TempDescription>{maxTemp}°</TempDescription>
          </WeatherSection>
          <Icon icon="filter" onClick={openModal} />
        </TopHeaderSection>
        <CategoryWrapper>{styleBadges}</CategoryWrapper>
      </StyledHeader>
      {children}

      <PopupModal
        opened={opened}
        title="필터"
        leftBtn={<Icon icon="close" onClick={closeModal} />}
        rightBtn={<ApplyTextButton onClick={applyFilter}>적용</ApplyTextButton>}
        divider
      >
        <Tabs data={tabData} />
      </PopupModal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 70px;
  background-color: ${white};
  position: absolute;
  top: 328px;
  transition: top 0.15s linear;
  margin-bottom: 50px;
`;

const StyledHeader = styled.header<{ sticky: boolean }>`
  position: sticky;
  top: 0px;
  width: 100%;
  min-height: 70px;
  background-color: ${white};
  box-shadow: ${props => (props.sticky ? 'none' : '0 0 10px 0 rgba(47, 85, 148, 0.3)')};
  border-radius: ${props => (props.sticky ? 0 : '10px 10px 0 0')};
  padding-top: 20px;
`;

const TopHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 23px 8px 20px;
`;

const WeatherSection = styled.div`
  display: flex;
  align-items: center;
`;

const StyledBadge = styled(Badge)`
  margin: 8px 10px 8px 0px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  padding: 6px 20px;
`;

const TempTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-left: 6px;
  margin-right: 8px;
`;

const TempDescription = styled(Description)`
  color: ${gray5};
`;

const StyledRectangle = styled(Rectangle)`
  height: 1px;
  color: ${gray5};
  margin: 0px 2px;
`;

const ApplyTextButton = styled(TextButton)`
  color: ${keyColor};
`;
