import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, SignupPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
