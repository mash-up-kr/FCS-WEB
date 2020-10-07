import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { gray10, blue } from '../../utils/color';
import NameField from '../../components/Modify/NameField';

const NameSection: React.FC = () => {
  const [value, setValue] = useState('');

  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  return (
    <Wrapper>
      <Title>닉네임</Title>
      <NameField value="bom2" onChange={handleNameChange} />
      {value ? <CheckDuplicate>가능한 닉네임 입니다</CheckDuplicate> : <div />}
    </Wrapper>
  );
};
//TODO : 닉네임 중복 체크

const Wrapper = styled.div`
  height: 21px;
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  font-color: ${gray10};
`;
const CheckDuplicate = styled.div`
  font-family: SpoqaHanSans;
  font-size: 10px;
  font-weight: normal;
  font-color: ${blue};
`;
export default NameSection;
