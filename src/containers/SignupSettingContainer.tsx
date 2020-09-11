import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { ProfileFilterSection } from '../views/Profile/ProfileFilterSection';
import { useHistory, useLocation } from 'react-router-dom';

const SignupSettingContainer: React.FC = () => {
  const history = useHistory();

  const handleNextClick = (): void => {
    history.push('/');
  };

  return (
    <Container>
      <ProfileFilterSection />
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
