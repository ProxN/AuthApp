import React from 'react';
import styled, { css } from 'styled-components';

interface FlexProps {
  align?: 'center' | 'flex-end' | 'flex-start';
  justify?:
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  height?: string;
}

const FlexContainer = styled.div<FlexProps>`
  ${({ justify, align, height }) => css`
    align-items: ${align};
    justify-content: ${justify};
    height: ${height && height};
  `};
  display: flex;
`;

const Flex: React.FC<FlexProps> = (props) => {
  return <FlexContainer {...props} />;
};

Flex.defaultProps = {
  align: 'flex-start',
  justify: 'flex-start',
};

export default Flex;
