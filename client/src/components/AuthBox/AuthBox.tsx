import React from 'react';
import Text from '../Text';
import Link from '../Link';
import { AuthBoxProps } from './types';
import { ReactComponent as Logo } from '../../assets/devchallenges.svg';
import { ReactComponent as TwitterSVG } from '../../assets/twitter.svg';
import { ReactComponent as GithubSVG } from '../../assets/github.svg';
import { ReactComponent as GoogleSVG } from '../../assets/google.svg';
import {
  AuthContainer,
  AuthSocial,
  AuthTitle,
  AuthInfo,
  CircleSVG,
} from './AuthBox.styles';

const info = {
  login: {
    text: 'Don’t have an account yet?',
    href: '/register',
    linkText: 'Register',
  },
  register: {
    text: 'Adready a member?',
    href: '/login',
    linkText: 'Login',
  },
};

const AuthBox: React.FC<AuthBoxProps> = (props) => {
  const { title, children, page, ...rest } = props;
  return (
    <AuthContainer {...rest}>
      <Logo />
      {title && <AuthTitle>{title}</AuthTitle>}
      {children}
      <AuthInfo>
        <Text appearance='hint'>or continue with these social profile</Text>
        <AuthSocial>
          <CircleSVG>
            <TwitterSVG />
          </CircleSVG>
          <CircleSVG>
            <GoogleSVG />
          </CircleSVG>
          <CircleSVG>
            <GithubSVG />
          </CircleSVG>
        </AuthSocial>

        {page && (
          <Text appearance='hint'>
            {info[page].text}
            <Link href={info[page].href}>
              &nbsp;
              {info[page].linkText}
            </Link>
          </Text>
        )}
      </AuthInfo>
    </AuthContainer>
  );
};

AuthBox.defaultProps = {
  page: 'login',
};

export default AuthBox;
