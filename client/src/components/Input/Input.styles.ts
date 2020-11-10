import styled, { css } from 'styled-components';
import { InputStylesProps } from './types';

const InputSizes = {
  small: '.5.6rem 1.2rem',
  default: '.8rem 1.6rem',
  large: '1.2rem 1.6rem',
};

export const InputContainer = styled.div`
  margin-bottom: 1.4rem;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledInput = styled.input<InputStylesProps>`
  ${({ theme, Size, borderRadius, withIcon, fullWidth }) => css`
    line-height: ${theme.lineHeight};
    padding: ${InputSizes[Size as keyof typeof InputSizes]};
    border: 1px solid ${theme.colors.border.gray1};
    border-radius: ${borderRadius};
    padding-left: ${withIcon && '4rem'};
    width: ${fullWidth && '100%'};
    color: ${theme.colors.text.main};
    font-size: ${theme.fontSizes[1]}px;
  `};

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ::placeholder {
    color: #828282;
    opacity: 0.9;
  }

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  outline: none;
`;

export const SvgIcon = styled.span`
  height: 2rem;
  width: 2rem;
  position: absolute;
  left: 1.2rem;
  color: #828282;
`;
