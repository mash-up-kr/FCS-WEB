import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { ProfileFilterSection } from '../views/Profile/ProfileFilterSection';
import { useHistory } from 'react-router-dom';
import { useSignupState, useSampleDispatch } from '../stores/Signup';
import axios from 'axios';
import API_SERVER_PATH from '../utils/apis';

const SignupSettingContainer: React.FC = () => {
  const history = useHistory();

  const state = useSignupState();
  const dispatch = useSampleDispatch();

  const handleNextClick = (): void => {
    history.push('/login');

    axios
      .post(`${API_SERVER_PATH}/users/sign-up`, {
        uid: state.uid,
        authType: state.authType,
        nickname: state.nickname,
        profileImageUrl: state.profileImageUrl,
        styleIds: state.styleIds,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const clickhandler = () => {
    console.log(state.styleIds);
  };
  return (
    <Container>
      <ProfileFilterSection username={state.nickname} />
      <StyledButton color="active" onClick={handleNextClick}>
        완료
      </StyledButton>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
export default SignupSettingContainer;
