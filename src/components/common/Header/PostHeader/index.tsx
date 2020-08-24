import React from 'react';
import styled from 'styled-components';
import { white } from '../../../../utils/color';
import { Link } from 'react-router-dom';
import Close from '../../../../assets/ic_navigation_close.png';
import Back from '../../../../assets/ic_navigation_back.png';

const PostHeader: React.FC = () => (
  <Wrapper>
    <BackIcon to="/">
      <Icon src={Back} />
    </BackIcon>
    피드 작성하기
    <CloseIcon to="/">
      <Icon src={Close} />
    </CloseIcon>
  </Wrapper>
);
const Icon = styled.img``;
const BackIcon = styled(Link)`
  display: flex;
  margin-left: 20px;
`;
const CloseIcon = styled(Link)`
  display: flex;
  margin-right: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${white};
`;

export default PostHeader;
