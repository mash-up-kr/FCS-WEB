import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PrevIcon1 from '../../../assets/IC_Navigation_Back_normal.svg';

const Actionbar: React.FC = () => {
  const history = useHistory();

  const handlePrevClick = (): void => {
    history.goBack();
  };

  //   const handleNextClick = (): void => {
  //     history.push('/invitation');
  //   };

  return (
    <Wrapper>
      <PrevIcon src={PrevIcon1} onClick={handlePrevClick} alt="prevIcon" />
      <SaveBtn>저장</SaveBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  opacity: 1;
  margin-top: 20px;
  background-color: #ffffff;
`;

const PrevIcon = styled.img`
  margin-left: 20px;
  margin-top: 13px;
`;

const SaveBtn = styled.button`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  color: #68e1de;
`;
export default Actionbar;
