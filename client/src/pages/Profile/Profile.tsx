import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '../../context/auth.context';
import Header from '../../components/Layout/Header';
import Flex from '../../components/Flex';
import CopyRight from '../../components/CopyRight';
import ProfileView from './components/ProfileView/ProfileView';
// import EditProfile from './components/EditProfile/EditProfile';
import { Media } from '../../styles';
import EditProfile from './components/EditProfile/EditProfile';

const ProfileContainer = styled(Flex)`
  padding: 1.5rem 0;
  max-width: 85.5rem;
  margin: 0 auto;
  ${Media.thone} {
    padding: 0 2rem;
  }
`;

const Profile: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const { state } = useContext(Context);

  if (!state.user) return null;

  const handleEditClick = () => {
    setEditing(!editing);
  };

  return (
    <>
      <Header />
      <ProfileContainer justify='center' align='center' direction='column'>
        {!editing ? (
          <ProfileView handleEditClick={handleEditClick} user={state.user} />
        ) : (
          <EditProfile handleEditClick={handleEditClick} user={state.user} />
        )}
        <CopyRight />
      </ProfileContainer>
    </>
  );
};

export default Profile;
