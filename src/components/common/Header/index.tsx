import React, { useEffect, useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import { gray5, white } from '../../../utils/color';
import { Description, Rectangle } from '../../../views/Main/MainCommonUI';
import { Badge } from '../Badge';
import { Icon } from '../Icon';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = props => {
  const { children, ...restProps } = props;
  const headerRef = useRef<any>(null);
  const [sticky, setSticky] = useState(false);

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

  return (
    <Wrapper>
      <StyledHeader sticky={sticky} ref={headerRef} {...restProps}>
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
      {children}
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
