/* eslint-disable no-use-before-define */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Badge } from '../../common/Badge';
import styled from 'styled-components';

export const StickyWeatherHeader = React.memo(() => {
  const [sticky, setSticky] = useState(true);
  const headerRef = useRef<any>(null);

  const handler = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setSticky(false);
      } else {
        setSticky(true);
      }
    });
  }, []);

  useEffect(() => {
    const headerSectionObserver = new IntersectionObserver(handler, {
      rootMargin: '-36px 0px 0px 0px',
      threshold: 1.0,
    });

    headerSectionObserver.observe(headerRef.current);
  }, [handler]);

  return (
    <StyledHeader id="header" ref={headerRef} sticky={sticky}>
      <Badge color="active">스포티</Badge>
    </StyledHeader>
  );
});

const StyledHeader = styled.header<{ sticky: boolean }>`
  width: 100%;
  min-height: 70px;

  box-shadow: 0 0 10px 0 rgba(47, 85, 148, 0.3);
  border-radius: 10px 10px 0 0;
  position: sticky;

  

  /* box-shadow: ${(props) => (!props.sticky ? '0 0 10px 0 rgba(47, 85, 148, 0.3);' : 'none')}; */
  /* border-radius: ${(props) => (!props.sticky ? '10px 10px 0 0;' : 'none')}; */
  padding: 23px 20px;
  position: sticky;
  z-index: 2;

  top: 0px;
`;
