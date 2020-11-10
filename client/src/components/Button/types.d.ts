import { Size } from '../types';

export interface StylesProps {
  Size?: Size;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  borderRadius?: string;
}

export interface ButtonProps extends StylesProps {
  onClick?: () => void;
}
