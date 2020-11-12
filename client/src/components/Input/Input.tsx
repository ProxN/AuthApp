import React from 'react';
import { InputProps } from './types';
import {
  InputBox,
  SvgIcon,
  StyledInput,
  InputContainer,
  Label,
  TextArea as StyledTextArea,
} from './Input.styles';

const InputWrapper: React.FC<{ label?: string }> = ({ children, label }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      {children}
    </InputContainer>
  );
};

const Input = (props: InputProps): React.ReactElement => {
  const { onChange, icon, label, ...rest } = props;
  return (
    <InputWrapper label={label}>
      <InputBox>
        {icon && <SvgIcon>{icon}</SvgIcon>}
        <StyledInput withIcon={!!icon} {...rest} />
      </InputBox>
    </InputWrapper>
  );
};

const TextArea: React.FC<InputProps> = (props) => {
  const { onChange, label, ...rest } = props;

  return (
    <InputWrapper label={label}>
      <StyledTextArea {...rest} />
    </InputWrapper>
  );
};

TextArea.defaultProps = {
  Size: 'default',
  borderRadius: '8px',
  type: 'text',
  fullWidth: false,
};

Input.TextArea = TextArea;

Input.defaultProps = {
  Size: 'default',
  borderRadius: '8px',
  type: 'text',
  fullWidth: false,
};

export default Input;
