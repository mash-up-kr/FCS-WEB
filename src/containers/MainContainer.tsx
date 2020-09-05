import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/common/Header';
import { Feed } from '../components/Feed';
import { gray0 } from '../utils/color';
import MainContentSection from '../views/Main/MainContentSection';

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
