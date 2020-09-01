import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../components/common/Header';
import { Feed } from '../components/Feed';
import MainContentSection from '../views/Main/MainContentSection';
import { gray0 } from '../utils/color';

const MainContainer: React.FC = () => {
  return (
    <Container>
      <MainContentSection />
      <Header>
        <Feed />
      </Header>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${gray0};
`;

export default MainContainer;
