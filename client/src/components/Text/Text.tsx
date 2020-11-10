import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  appearance?: 'default' | 'hint';
}

const StyledText = styled.span<Props>`
  ${({ theme, appearance }) => css`
    color: ${appearance === 'default'
      ? theme.colors.text.secondary
      : '#828282'};
    font-size: ${theme.fontSizes[1]}px;
  `};
`;

const Text: React.FC<Props> = (props) => {
  return <StyledText {...props} />;
};

Text.defaultProps = {
  appearance: 'default',
};

export default Text;
