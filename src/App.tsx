import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, PostPage, ChooseDatePage, ChooseLocationPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <Route path="/post" component={PostPage} />
        <Route path="/post/date" component={ChooseDatePage} />
        <Route path="/post/location" component={ChooseLocationPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
