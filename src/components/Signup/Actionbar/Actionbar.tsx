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
export default Actionbar;
