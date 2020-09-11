import React from 'react';
import FeedProvider from './Feed';
import StyleProvider from './Styles';
import UserProvider from './User';

export const GlobalProvider = ({ children }: { children: any }) => {
  return (
    <FeedProvider>
      <UserProvider>
        <StyleProvider>{children}</StyleProvider>
      </UserProvider>
    </FeedProvider>
  );
};
