import React from 'react';
import styled from 'styled-components';

const IMAGE_URL = 'https://image.chosun.com/sitedata/image/202004/23/2020042302043_0.jpg';

export const Feed: React.FC = () => (
  <Wrapper>
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
    <Thumbnail src={IMAGE_URL} alt="thumbnail" />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Thumbnail = styled.img`
  width: calc(50% - 3px);
  margin-right: auto;
`;
