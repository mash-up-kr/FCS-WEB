import React, { useState } from 'react';
import styled from 'styled-components';
import KaKaoLogin from 'react-kakao-login';
import APIKEY from '../../.env/KakaoAPIKEY';
import { useHistory } from 'react-router-dom';
import { useSignupState, useSampleDispatch } from '../../stores/Signup';
import { API_SERVER_PATH } from '../../utils/apis';

import axios from 'axios';

interface LoginButtonProps {
  icon: string;
}

const LoginButton: React.FC<LoginButtonProps> = (props, loginHandler) => {
  const { icon, ...otherProps } = props;
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  const state = useSignupState();
  const dispatch = useSampleDispatch();

  const responseKaKao = (res: any) => {
    // console.log(res);
    // console.log(res.profile.id);
    // console.log(res.profile.kakao_account.profile.profile_image_url);
    setIsLogin(true);
    const setUid = () => dispatch({ type: 'SET_UID', uid: res.profile.id });
    const setAuthType = () => dispatch({ type: 'SET_AUTHTYPE', authType: 'KAKAO' });
    const setProfileImage = () =>
      dispatch({ type: 'SET_PROFILEIMAGE', profileImgaeUrl: res.profile.kakao_account.profile.profile_image_url });
    axios
      .post(`${API_SERVER_PATH}/users/sign-in`, {
        uid: res.profile.id,
        authType: 'KAKAO',
      })
      .then(function(response) {
        console.log(response);
        history.push('/');
      })
      .catch(function(error) {
        console.log(error);
        console.log('바보');
        history.push('/signup/username');
        setUid();
        setAuthType();
        setProfileImage();
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
