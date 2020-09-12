import React, { createContext, useCallback, useState } from 'react';
import { WeatherEnum } from '../../model/User';

interface UserContextValue {
  userFilterValue: UserFilter;
  setFilter: (userFilter: UserFilter) => void;
}

interface UserFilter {
  styleIds: number[];
  weather: 'CLEAR' | 'CLOUDS' | 'RAIN' | 'SNOW' | 'THUNDERSTORM';
  temperature: number;
  tempDifference: number;
}

const initialValue = {
  userFilterValue: {
    styleIds: [1, 2, 3],
    weather: WeatherEnum.CLEAR,
    temperature: 22,
    tempDifference: 2,
  },
  setFilter: (userFilter: UserFilter) => undefined,
};

interface UserProps {
  initialUserValue?: undefined;
}

//TODO: 백엔드에 회원에 필터 담을수 있으면 그 로직 추가하기
export const UserContext = createContext<UserContextValue>(initialValue);

const UserProvider: React.FC<UserProps> = ({ children, initialUserValue }) => {
  const [userFilter, setUserFilter] = useState<UserFilter>(initialValue.userFilterValue);

  const setFilter = useCallback((userFilter: UserFilter) => {
    setUserFilter(userFilter);
  }, []);

  return <UserContext.Provider value={{ userFilterValue: userFilter, setFilter }}>{children}</UserContext.Provider>;
};

export default UserProvider;
