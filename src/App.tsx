import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, SignupPage, SignupSettingPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup/username" component={SignupPage} />
        <Route path="/signup/style" component={SignupSettingPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
