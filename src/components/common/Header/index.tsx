import React from 'react';
import styled from 'styled-components';
import { Badge } from '../Badge';
import { white, gray5 } from '../../../utils/color';
import { WeatherHeaderInformation } from './WeatherHeaderInformation';
import FILTER from '../../../assets/icon_filter.png';
import ReactSwipeEvents from 'react-swipe-events';
import { Icon } from '../Icon';
import { Description, Rectangle } from '../../../views/Main/MainCommonUI';

interface HeaderProps {
  active: boolean;
  onSwipeUp: () => void;
  onSwipeDown: () => void;
}

export const Header: React.FC<HeaderProps> = props => {
  const { active, onSwipeUp, onSwipeDown, children, ...restProps } = props;

  return (
    <Wrapper active={active}>
      <ReactSwipeEvents onSwipedUp={onSwipeUp} onSwipedDown={onSwipeDown}>
        <StyledHeader active={active} {...restProps}>
          <WeatherHeaderInformation active={active} />
          <TopHeaderSection>
            <WeatherSection>
              <Icon icon="sun" />
              <TempTitle>24°</TempTitle>
              <TempDescription>28°</TempDescription>
              <StyledRectangle />
              <TempDescription>20°</TempDescription>
            </WeatherSection>

            <Icon icon="filter" />
          </TopHeaderSection>

          <CategoryWrapper>
            <StyledBadge color="active">스포티</StyledBadge>
            <StyledBadge color="active">클래식</StyledBadge>
          </CategoryWrapper>
        </StyledHeader>
      </ReactSwipeEvents>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ active: boolean }>`
  width: 100%;
  min-height: 70px;
  background-color: ${white};

  position: absolute;
  top: ${props => (props.active ? 0 : '399px')};
  transition: top 0.15s linear;
  margin-bottom: ${props => props.active && '50px;'};
`;

const StyledHeader = styled.header<{ active: boolean }>`
  width: 100%;
  min-height: 70px;
  background-color: ${white};

  box-shadow: ${props => !props.active && '0 0 10px 0 rgba(47, 85, 148, 0.3);'};
  border-radius: ${props => !props.active && '10px 10px 0 0;'};
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
