import styled, { css } from 'styled-components';
import { StylesProps } from './types';

export const AuthContainer = styled.div<StylesProps>`
  ${({ theme, width }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.border.gray1};
    width: ${width && width};
  `};
  padding: 4rem;
`;

export const AuthTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes[3]}px;
    font-weight: 600;
  `};
  max-width: 30rem;
  margin-top: 2rem;
`;

export const AuthInfo = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CircleSVG = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.border.gray3};
    border: 1px solid ${theme.colors.border.gray3};
  `};
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 4rem;
  }
  svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

export const AuthSocial = styled.div`
  display: flex;
  margin: 2rem 0;
`;
