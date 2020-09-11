import React, { useMemo } from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

//TODO: ASPECT 값들 추가하기
export const RatioImage = React.memo<Props>(({ src, alt, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
`;

const Image = styled.img`
  top: 50%;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  object-fit: cover;
  position: absolute;
  transform: translateY(-50%);
`;
