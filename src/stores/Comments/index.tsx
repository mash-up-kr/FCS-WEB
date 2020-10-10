import React, { createContext, useCallback, useState } from 'react';
import api from '../../utils/apis';

interface Comments {
  id: string;
  message: string;
  userNickname: string;
  createdDate: string;
}

interface CommentContextValue {
  comments: Comments[];
  getComment: () => Promise<void>;
}

const initialValue = {
  comments: [],
  getComment: async () => undefined,
};

export const CommentContext = createContext<CommentContextValue>(initialValue);

const CommentProvider: React.FC = ({ children }) => {
  const [comments, setComments] = useState<Comments[]>([]);

  const getComment = useCallback(async () => {
    const { data } = await api.getComment();

    //memo(@kirby): axios도 response 타입 만들기
    // const generatedData = data.data.map((style: any) => ({ ...style, active: style.active ?? false }));
    // setStyles(generatedData);

    setComments(data.data);
  }, []);

  return <CommentContext.Provider value={{ comments, getComment }}>{children}</CommentContext.Provider>;
};

export default CommentProvider;
