import React, { createContext, useState, useCallback, useEffect } from 'react';
import api from '../../utils/apis';

interface Styles {
  id: number;
  name: string;
}

interface StyleContextValue {
  styles: Styles[];
  getStyles: () => Promise<void>;
}

const initialValue = {
  styles: [],
  getStyles: async () => undefined,
};

export const StyleContext = createContext<StyleContextValue>(initialValue);

const StyleProvider: React.FC = ({ children }) => {
  const [styles, setStyles] = useState<Styles[]>([]);

  const getStyles = useCallback(async () => {
    const { data } = await api.getStyles();

    //memo(@kirby): axios도 response 타입 만들기
    // const generatedData = data.data.map((style: any) => ({ ...style, active: style.active ?? false }));
    // setStyles(generatedData);

    setStyles(data.data);
  }, []);

  return <StyleContext.Provider value={{ styles, getStyles }}>{children}</StyleContext.Provider>;
};

export default StyleProvider;
