import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MainPage, PostPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <RouteWithTabs path="/post" component={PostPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
