import React from 'react';
import styled, { css } from 'styled-components';
import { Link as routerLink } from 'react-router-dom';

interface LinkProps {
  href: string;
}

export const StyledLink = styled(routerLink)`
  ${({ theme }) => css`
    color: ${theme.colors.primary.main};
    :hover {
      color: ${theme.colors.primary.light};
    }
    :active {
      color: ${theme.colors.primary.dark};
    }
  `};
  transition: color 150ms ease-in-out;
  outline: none;
  cursor: pointer;
`;

const Link: React.FC<LinkProps> = (props) => {
  const { href, ...rest } = props;
  return <StyledLink to={href} {...rest} />;
};

export default Link;
