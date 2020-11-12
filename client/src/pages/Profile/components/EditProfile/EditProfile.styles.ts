import styled, { css } from 'styled-components';
import { Media } from '../../../../styles';

export const EditContent = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.border.gray2};
  `};
  margin: 1.5rem 0;
  width: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;

  ${Media.thone} {
    padding: 3rem;
    border: none;
  }
`;

export const Form = styled.form`
  max-width: 40rem;
`;
