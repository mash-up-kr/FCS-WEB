import React from 'react';
import { GlobalProvider } from './stores/GlobalProvider';
import App from './App';

const Root = () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
);

export default Root;
