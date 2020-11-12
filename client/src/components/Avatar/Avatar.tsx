import React from 'react';
import styled, { css } from 'styled-components';

interface AvatarStylesProps {
  size?: 'small' | 'large';
}

interface AvatarProps extends AvatarStylesProps {
  url?: string;
  alt?: string;
}

const AvatarBox = styled.div<AvatarStylesProps>`
  ${({ size }) =>
    size &&
    css`
      height: ${size === 'large' ? '7.2rem' : '3.4rem'};
      width: ${size === 'large' ? '7.2rem' : '3.4rem'};
    `}
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Avatar: React.FC<AvatarProps> = (props) => {
  const { alt, url, size } = props;
  return (
    <AvatarBox size={size}>
      <img src={url} alt={alt} />
    </AvatarBox>
  );
};

Avatar.defaultProps = {
  size: 'small',
};

export default Avatar;
