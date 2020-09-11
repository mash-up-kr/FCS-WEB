import React, { createContext, useState, useCallback } from 'react';
import api from '../../utils/apis';
import { UserFilter } from '../../model/User';

type Feed = {
  id: string;
  photoUrl: string;
  message: string;
  weather: 'CLEAR' | 'CLOUDS' | 'RAIN' | 'SNOW' | 'THUNDERSTORM';
  temperature: string;
  date: string;
  nickname: string;
  styleIds: string[];
};

interface FeedContextValue {
  feeds?: Feed[];
  getFeeds: (filterOptions: UserFilter) => Promise<void>;
}

const initialValue = {
  feeds: [],
  getFeeds: async (filterOptions: UserFilter) => undefined,
};

interface FeedProps {
  initialFeedValue?: Feed[];
}

export const FeedContext = createContext<FeedContextValue>(initialValue);

const FeedProvider: React.FC<FeedProps> = ({ children, initialFeedValue }) => {
  const [feeds, setFeeds] = useState<Feed[] | undefined>(initialFeedValue);

  const getFeeds = useCallback(async (filterOptions: UserFilter) => {
    const { data } = await api.getFeeds(filterOptions);

    //TODO: 무한 스크롤 가능하게 구현하기
    setFeeds(data.data.posts);
  }, []);

  return <FeedContext.Provider value={{ feeds, getFeeds }}>{children}</FeedContext.Provider>;
};

export default FeedProvider;
