import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { gray10, blue } from '../../utils/color';
import NameField from '../../components/Modify/NameField';
import { useSignupState, useSampleDispatch } from '../../stores/Signup';

const NameSection: React.FC = props => {
  // const { value, onChange, ...otherProps } = props;
  const state = useSignupState();
  const [value, setValue] = useState(state.nickname);

  const dispatch = useSampleDispatch();

  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  return (
    <Wrapper>
      <Title>닉네임</Title>
      <NameField value={state.nickname} onChange={handleNameChange} />
      {state.nickname}
      <CheckDuplicate>가능한 닉네임 입니다.</CheckDuplicate>
    </Wrapper>
  );
};
//TODO : 닉네임 중복 체크

const Wrapper = styled.div`
  height: 21px;
  display: flex;
  flex-direction: row;
  margin: 21px 20px 20px 20px;
  align-items: center;
  justify-content: space-between;
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
  color: ${blue};
`;
export default NameSection;
