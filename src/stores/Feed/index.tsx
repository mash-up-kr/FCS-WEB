import React, { createContext, useState, useCallback } from 'react';

type Feed = {
  id: string;
  photoUrl: string;
  message: string;
  weather: string;
  tempature: string;
  date: string;
};

interface FeedContextValue {
  feeds?: Feed[];
}

const initialValue = {
  feeds: [],
};

export const FeedContext = createContext<FeedContextValue>(initialValue);

const FeedProvider: React.FC = ({ children }) => {
  return <FeedContext.Provider value={initialValue}></FeedContext.Provider>;
};
