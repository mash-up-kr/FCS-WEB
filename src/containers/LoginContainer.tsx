import React, { useState } from 'react';
import styled from 'styled-components';
import { gray8, gray10 } from '../utils/color';
import { LoginButton } from '../components/Login';
import kakaoLoginIcon from '../assets/ic-kakaologin.svg';
import { useSignupState } from '../stores/Signup';

const LoginContainer: React.FC = props => {
  const [isLogin, setIsLogin] = useState(false);
  const state = useSignupState();
  return (
    <Container>
      <TitleText>오늘 옷</TitleText>
      <SubText>오늘 날에 맞춘 옷을 입어보자</SubText>
      <LoginButton icon={kakaoLoginIcon}>
        {isLogin ? <span>로그아웃</span> : <span>카카오계정으로 시작하기</span>}
      </LoginButton>
      <h2>hello</h2>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'SpoqaHanSans';
`;
const TitleText = styled.h3`
  font-size: 24px;
  color: ${gray8};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  margin-bottom: 33px;
  margin-top: 178px;
  text-align: center;
`;

const SubText = styled.div`
  font-size: 14px;
  color: ${gray10};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

export default LoginContainer;
