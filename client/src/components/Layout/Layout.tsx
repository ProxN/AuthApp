import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from '../../styles';

const LayoutContainer = styled.div`
  height: 100%;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <GlobalStyles />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
