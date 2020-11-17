import React from 'react';
import Avatar from '../Avatar';
import Text from '../Text';
// import DropDown from '../DropDown';
import { ReactComponent as Logo } from '../../assets/devchallenges.svg';
// import { ReactComponent as Profile } from '../../assets/profile.svg';
// import { ReactComponent as Group } from '../../assets/group.svg';
// import { ReactComponent as Logout } from '../../assets/logout.svg';
import {
  ArrowIcon,
  UserDropDown,
  HeaderContent,
  HeaderContainer,
  LogoLink,
} from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to='/profile'>
          <Logo />
        </LogoLink>
        <UserDropDown>
          <Avatar
            url='https://avatars0.githubusercontent.com/u/46717240?v=4'
            alt='Profile Pic'
          />
          <Text strong margin='0 1.2rem'>
            Xanthe Neal
          </Text>
          <ArrowIcon />
          {/* <DropDown width='192px'>
            <DropDown.Item text='My Profile' icon={<Profile />} />
            <DropDown.Item text='Group Chat' icon={<Group />} />
            <DropDown.Divider />
            <DropDown.Item text='Logout' icon={<Logout />} />
          </DropDown> */}
        </UserDropDown>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
