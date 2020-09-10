import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/common/Button';
import { ProfileFilterSection } from '../views/Profile/ProfileFilterSection';

const SignupSettingContainer: React.FC = () => {
  const [checked, setChecked] = useState(false);

  // const handleStyleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setChecked(event.target.checked);
  // }, []);

  return (
    <Container>
      <ProfileFilterSection />
      {checked ? <StyledButton color="active">완료</StyledButton> : <StyledButton color="disabled">완료</StyledButton>}
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
