import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
