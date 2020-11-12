import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowDown } from '../../assets/arrowDown.svg';

export const HeaderContainer = styled.header`
  height: 7rem;
`;

export const HeaderContent = styled.nav`
  max-width: 126rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;

export const ArrowIcon = styled(ArrowDown)`
  height: 1rem;
  width: 1rem;
`;

export const UserDropDown = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
`;
