import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, PostPage, PostSettingPage, ChooseDatePage, ChooseLocationPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <Route exact path="/post" component={PostPage} />
        <Route path="/post/date" component={ChooseDatePage} />
        <Route path="/post/location" component={ChooseLocationPage} />
        <Route path="/post/setting" component={PostSettingPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
