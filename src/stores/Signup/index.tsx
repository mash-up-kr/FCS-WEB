// import React, {createContext, useState} from 'react';

// export type SignupProps = {
//   uid: number;
//   authType : string;
//   nickname : string;
//   styleIds: []
// }

// const SignupContext = createContext<SignupProps | undefined>(undefined);

// const SignupProvider: React.FC<SignupProps> = ({children}) => {
//   const [uid, setUid] = useState(0);
//   const [authType, setAuthType] = useState('KAKAO');
//   const [nickname, setNickname] = useState('');
//   const [styleIds, setStyleIds] = useState([] as any);

//   const value={uid, authType, nickname, styleIds}

//   return<SignupContext.Provider value={ {uid, authType, nickname, styleIds}}>{children}</SignupContext.Provider>
// }

// const {Consumer: SignupConsumer} = SignupContext;

// export {SignupConsumer, SignupProvider};

// export default SignupContext;

import React, { useReducer, useContext, createContext, Dispatch } from 'react';

// 상태를 위한 타입
type State = {
  uid: number;
  authType: string;
  nickname: string;
  styleIds: number[];
};

// 모든 액션들을 위한 타입
type Action =
  | { type: 'SET_UID'; uid: number }
  | { type: 'SET_AUTHTYPE'; authType: string }
  | { type: 'SET_NICKNAME'; nickname: string }
  | { type: 'SET_STYLEIDS'; styleIds: number[] };

// 디스패치를 위한 타입 (Dispatch 를 리액트에서 불러올 수 있음), 액션들의 타입을 Dispatch 의 Generics로 설정
type SampleDispatch = Dispatch<Action>;

// Context 만들기
const SignupStateContext = createContext<State | undefined>(undefined);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_UID':
      return {
        ...state,
        uid: action.uid, // count가 자동완성되며, number 타입인걸 알 수 있습니다.
      };
    case 'SET_AUTHTYPE':
      return {
        ...state,
        authType: action.authType, // text가 자동완성되며, string 타입인걸 알 수 있습니다.
      };
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname,
      };
    case 'SET_STYLEIDS':
      return {
        ...state,
        styleIds: action.styleIds,
      };
    default:
      throw new Error('Unhandled action');
  }
}

// SampleProvider 에서 useReduer를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider 로 children 을 감싸서 반환합니다.
export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    uid: 0,
    authType: 'KAKAO',
    nickname: '',
    styleIds: [],
  });

  return (
    <SignupStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>{children}</SampleDispatchContext.Provider>
    </SignupStateContext.Provider>
  );
}

// state 와 dispatch 를 쉽게 사용하기 위한 커스텀 Hooks
export function useSignupState() {
  const state = useContext(SignupStateContext);
  if (!state) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider'); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
