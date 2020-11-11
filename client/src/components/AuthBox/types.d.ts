export interface StylesProps {
  width?: string;
}

export interface AuthBoxProps extends StylesProps {
  title?: string;
  page?: 'login' | 'register';
}
