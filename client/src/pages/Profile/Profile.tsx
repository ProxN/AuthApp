import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Layout/Header';
import Flex from '../../components/Flex';
import CopyRight from '../../components/CopyRight';
import ProfileView from './components/ProfileView/ProfileView';
// import EditProfile from './components/EditProfile/EditProfile';
import { Media } from '../../styles';

const ProfileContainer = styled(Flex)`
  padding: 1.5rem 0;
  max-width: 85.5rem;
  margin: 0 auto;
  ${Media.thone} {
    padding: 0 2rem;
  }
`;

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <ProfileContainer justify='center' align='center' direction='column'>
        <ProfileView />
        {/* <EditProfile /> */}
        <CopyRight />
      </ProfileContainer>
    </>
  );
};

export default Profile;
