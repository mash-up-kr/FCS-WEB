import React, { useState } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import APIKEY from '../../.env/KakaoAPIKEY';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

interface LoginButtonProps {
  icon: string;
}

const LoginButton: React.FC<LoginButtonProps> = (props, loginHandler) => {
  const { icon, ...otherProps } = props;
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  const responseKaKao = (res: any) => {
    console.log(res);
    console.log(res.profile.id);
    setIsLogin(true);
    axios
      .post('http://52.78.79.159:8080/api/users/sign-in', {
        uid: res.profile.id,
        authType: 'KAKAO',
      })
      .then(function(response) {
        console.log(response);
        history.push('/');
      })
      .catch(function(error) {
        console.log(error);
        history.push('/signup/username', res);
      });
  };

  const responseFail = console.error;

  const LogoutKaKao = () => {
    setIsLogin(false);
  };
  return (
    <StyledButton {...otherProps} jsKey={APIKEY} onSuccess={responseKaKao} onFailure={responseFail} getProfile={true}>
      <Icon src={icon} alt="icon" />
      {otherProps.children}
    </StyledButton>
  );
};

const StyledButton = styled(KaKaoLogin)`
  width: 335px;
  height: 42px;
  border-radius: 2px;
  background-color: #feea0f;
  border: 0;
  font-family: 'SpoqaHanSans';
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #391b1b;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 156px;
  outline: none;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 7px;
`;

export default LoginButton;
