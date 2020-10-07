import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  MainPage,
  PostPage,
  PostSettingPage,
  ChooseDatePage,
  ChooseLocationPage,
  DetailPostPage,
  LoginPage,
  SignupPage,
  SignupSettingPage,
  ModifyInfoPage,
} from './pages';
import ModifyInfoContainer from './containers/ModifyInfoContainer';
import RouteWithTabs from './layouts/RouteWithTab';
import { SignupProvider } from './stores/Signup';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <RouteWithTabs exact path="/posts/:id" component={DetailPostPage} />
        <Route exact path="/post" component={PostPage} />
        <Route path="/post/date" component={ChooseDatePage} />
        <Route path="/post/location" component={ChooseLocationPage} />
        <Route path="/post/setting" component={PostSettingPage} />
        <SignupProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup/username" component={SignupPage} />
          <Route path="/signup/style" component={SignupSettingPage} />
        </SignupProvider>
        <Route path="/modifyInfo" component={ModifyInfoPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
