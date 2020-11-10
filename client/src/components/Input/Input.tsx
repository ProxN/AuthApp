import React from 'react';
import { InputBox, SvgIcon, StyledInput, InputContainer } from './Input.styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = (props) => {
  const { onChange, icon, ...rest } = props;
  return (
    <InputContainer>
      <InputBox>
        {icon && <SvgIcon>{icon}</SvgIcon>}
        <StyledInput withIcon={!!icon} {...rest} />
      </InputBox>
    </InputContainer>
  );
};

Input.defaultProps = {
  Size: 'default',
  borderRadius: '8px',
  type: 'text',
  fullWidth: false,
};

export default Input;
