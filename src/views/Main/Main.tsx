import React from 'react';
import styled from 'styled-components';
import { UploadButton } from './components/UploadButton';

import plus from '../../utils/assets/IC_Plus_White.svg';

const Main: React.FC = () => (
  <UploadButton>
    <ButtonText>무더운 오늘, 당신의 옷은?</ButtonText>
  </UploadButton>
);

const ButtonText = styled.span`
  font-size: 14px;
  font-family: 'SpoqaHanSans-Regular';
  display: flex;
  align-items: flex-start;
  margin-left: 15px;
`;
export default Main;
