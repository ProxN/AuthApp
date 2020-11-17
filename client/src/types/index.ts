export type PasswordEmailInput = {
  email: string;
  password: string;
};

export interface IUser {
  id: string;
  email: string;
  name: string;
  bio: string;
  phone: string;
}

export interface UserResponse {
  error?: {
    field: string;
    message: string;
  };
  user: IUser;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

interface SetUserAction {
  type: 'SET_USER';
  payload: IUser;
}

interface UnsetUserAction {
  type: 'UNSET_USER';
  payload: null;
}

export type AuthActions = SetUserAction | UnsetUserAction;
