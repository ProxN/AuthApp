import styled, { css } from 'styled-components';
import { DropDownStylesProps } from './types';

export const DropDownContainer = styled.div<DropDownStylesProps>`
  ${({ theme, width }) => css`
    border: 1px solid ${theme.colors.border.gray2};
    width: ${width};
  `};
  padding: 1.5rem 1rem;
  position: absolute;
  top: 6rem;
  left: -3rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const Item = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text.main};
    border-radius: ${theme.borderRadius};
  `}

  padding: 1.2rem 1.2rem;
  transform: background 150ms ease-in-out;
  display: flex;
  align-items: center;
  :hover {
    background: #f2f2f2;
  }
`;

export const ItemIcon = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  margin-right: 1.2rem;
  color: #4f4f4f;
`;

export const ItemText = styled.span`
  color: #4f4f4f;
  font-weight: 500;
  line-height: 1.5;
`;

export const Line = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border.gray2};
  margin: 0.5rem 0;
`;
