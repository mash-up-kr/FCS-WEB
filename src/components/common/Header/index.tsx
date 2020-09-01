import React from 'react';
import styled from 'styled-components';
import { Badge } from '../Badge';
import { white } from '../../../utils/color';
import { WeatherHeaderInformation } from './WeatherHeaderInformation';
import FILTER from '../../../assets/icon_filter.png';
import ReactSwipeEvents from 'react-swipe-events';

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
          <FilterWrapper>
            <CategoryWrapper>
              <StyledBadge color="active">스포티</StyledBadge>
              <StyledBadge color="active">클래식</StyledBadge>
            </CategoryWrapper>
            <Icon src={FILTER} alt="icon-filter" />
          </FilterWrapper>
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
  padding: 23px 20px;
  background-color: ${white};

  box-shadow: ${props => !props.active && '0 0 10px 0 rgba(47, 85, 148, 0.3);'};
  border-radius: ${props => !props.active && '10px 10px 0 0;'};
`;

const StyledBadge = styled(Badge)`
  margin: 8px 10px 8px 0px;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex: 9;
`;

const Icon = styled.img`
  margin-left: auto;
`;
