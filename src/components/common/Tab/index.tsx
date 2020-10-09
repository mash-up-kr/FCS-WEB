import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tabHome from '../../../assets/IC_Menu_Feed_normal.svg';
import tabMypage from '../../../assets/IC_Menu_My_normal.svg';
import tabPlus from '../../../assets/IC_Menu_Plus_normal.svg';
import { white } from '../../../utils/color';
// import { tabPlus, tabMypage } from '../../../views/assets';

export const Tab: React.FC = () => (
  <TabContainer>
    <Link to="/">
      <Icon src={tabHome} alt="tabHome" />
    </Link>
    <Link to="/post">
      <Icon src={tabPlus} alt="tabPlus" />
    </Link>
    <Link to="/mypage">
      <Icon src={tabMypage} alt="tabMypage" />
    </Link>
  </TabContainer>
);

const TabContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background-color: ${white};
`;

// TODO: Link나 A태그로 바꿔야할듯 하지만 지금은 바쁨 ㅠㅠ
const Icon = styled.img``;
