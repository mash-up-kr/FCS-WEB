// import React from 'react';
// import GlobalStyle from './styles/GlobalStyle.ts';
// <<<<<<< HEAD
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { MainPage, LoginPage, SignupPage, SignupSettingPage } from './pages';
// =======
// import { BrowserRouter, Switch } from 'react-router-dom';
// import { MainPage, PostPage } from './pages';
// >>>>>>> 9b4251a3b58f0a88a6a9347bbe56ccc08c4ff234
// import RouteWithTabs from './layouts/RouteWithTab';

// const App: React.FC = () => (
//   <>
//     <GlobalStyle />
//     <BrowserRouter>
//       <Switch>
//         <RouteWithTabs exact path="/" component={MainPage} />
// <<<<<<< HEAD
//         <Route path="/login" component={LoginPage} />
//         <Route path="/signup/username" component={SignupPage} />
//         <Route path="/signup/style" component={SignupSettingPage} />
// =======
//         <RouteWithTabs exact path="/posts/:id" component={PostPage} />
// >>>>>>> 9b4251a3b58f0a88a6a9347bbe56ccc08c4ff234
//       </Switch>
//     </BrowserRouter>
//   </>
// );

// export default App;

import React from 'react';
import GlobalStyle from './styles/GlobalStyle.ts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage, PostPage, LoginPage, SignupPage, SignupSettingPage } from './pages';
import RouteWithTabs from './layouts/RouteWithTab';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithTabs exact path="/" component={MainPage} />
        <RouteWithTabs exact path="/posts/:id" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup/username" component={SignupPage} />
        <Route path="/signup/style" component={SignupSettingPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
