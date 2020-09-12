import React from 'react';
import styled from 'styled-components';
import { white, keyColor } from '../../../../utils/color';
import { Link } from 'react-router-dom';
import Close from '../../../../assets/ic_navigation_close.png';
import Back from '../../../../assets/ic_navigation_back.png';

const PostHeader: React.FC = () => (
  <Wrapper>
    <BackIcon to="/">
      <Icon src={Close} />
    </BackIcon>
    피드 작성
    <CloseIcon to="/post/setting">다음</CloseIcon>
  </Wrapper>
);
const Icon = styled.img``;
const BackIcon = styled(Link)`
  display: flex;
  margin-left: 20px;
  margin-right: 14px;
`;
const CloseIcon = styled(Link)`
  display: flex;
  text-decoration: none;
  margin-right: 26px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 32px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: normal;
  color: ${keyColor};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${white};
`;

export default PostHeader;
