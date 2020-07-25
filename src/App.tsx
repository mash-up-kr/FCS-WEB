import React from 'react';
import { Header } from './components/common/Header';
import GlobalStyle from './styles/GlobalStyle.ts';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
);

export default App;
