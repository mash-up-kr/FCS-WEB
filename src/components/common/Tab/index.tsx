import React from 'react';
import styled from 'styled-components';
import tabHome from '../../../utils/assets/IC_Menu_Feed_normal.svg';
import tabPlus from '../../../utils/assets/IC_Menu_Plus_normal.svg';
import tabMypage from '../../../utils/assets/IC_Menu_My_normal.svg';
// import { tabPlus, tabMypage } from '../../../views/assets';

const Tab: React.FC = () => (
  <TabContainer>
    <Icon src={tabHome} alt="tabHome" />
    <Icon src={tabPlus} alt="tabPlus" />
    <Icon src={tabMypage} alt="tabMypage" />
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
`;

// TODO: Link나 A태그로 바꿔야할듯 하지만 지금은 바쁨 ㅠㅠ
const Icon = styled.img``;

export default Tab;
