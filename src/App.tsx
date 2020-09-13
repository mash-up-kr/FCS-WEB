import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, UploadPage, PostPage, PostSettingPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <Route exact path="/post" component={UploadPage} />
        <Route path="/post/setting" component={PostSettingPage} />
        <RouteWithTabs exact path="/posts/:id" component={PostPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
