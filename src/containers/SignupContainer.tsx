import React, { useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import { gray6, gray8 } from '../utils/color';
import NameField from '../components/Signup';
import Checkbox from '../components/Signup/CheckBox/Checkbox';
import { Button } from '../components/common/Button';
import { useSignupState, useSampleDispatch } from '../stores/Signup';

const SignupContainer: React.FC = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const state = useSignupState();
  const dispatch = useSampleDispatch();

  const handleNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);
  const handleCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  }, []);

  const setNickname = () => dispatch({ type: 'SET_NICKNAME', nickname: value });

  const history = useHistory();

  const handleNextClick = (): void => {
    history.push(`/signup/style`);
    setNickname();
  };

  return (
    <Container>
      <NickNameContainer>
        <TitleText>기본 정보를 입력해주세요</TitleText>
        <NameBox>
          <NameField value={value} onChange={handleNameChange} />
          <CheckDuplication>닉네임을 입력해주세요</CheckDuplication>
        </NameBox>
        <PolicyAgreeBox>
          <StyledCheckbox checked={checked} onChange={handleCheckboxChange} />
          <AgreeInfo>모든 약관에 동의합니다.</AgreeInfo>
        </PolicyAgreeBox>
        <PolicyDetail>약관 상세보기</PolicyDetail>
      </NickNameContainer>
      {checked && value ? (
        <StyledButton color="active" onClick={handleNextClick}>
          다음
        </StyledButton>
      ) : (
        <StyledButton color="disabled">다음</StyledButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const NickNameContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;
const TitleText = styled.h2`
  font-size: 24px;
  color: ${gray8};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  font-family: 'SpoqaHanSans-Bold';
  margin-bottom: 77px;
  margin-top: 178px;
  text-align: center;
`;
const NameBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const CheckDuplication = styled.span`
  font-family: 'SpoqaHanSans';
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${gray6};
  margin-top: 5px;
`;
const PolicyAgreeBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledCheckbox = styled(Checkbox)`
  margin-top: 87px;
`;
const AgreeInfo = styled.span`
  font-family: 'SpoqaHanSans';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${gray6};
  margin-left: 10px;
  margin-top: 89px;
`;
const PolicyDetail = styled.span`
  font-family: 'SpoqaHanSans';
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${gray6};
  margin-top: 15px;
  border-bottom: 1px solid ${gray6};
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
`;
export default SignupContainer;
