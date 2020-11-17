import React, { createContext, Dispatch, useReducer } from 'react';
import { AuthState, AuthActions } from '../types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_USER':
      return { ...state, user: payload, isAuthenticated: true };

    case 'UNSET_USER':
      return initialState;
    default:
      return state;
  }
};

export const Context = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthActions>;
}>({ state: initialState, dispatch: () => null });

const AuthContext: React.FC = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
      {...props}
    />
  );
};

export default AuthContext;
