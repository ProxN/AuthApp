import React from 'react';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Avatar from '../../../../components/Avatar';
import { IUser } from '../../../../types';
import {
  ProfileContent,
  ProfileInfo,
  ProfileHeader,
  ProfileLabel,
  Title,
  Container,
} from './ProfileView.styles';

interface ProfileViewProps {
  user: IUser;
  handleEditClick: () => void;
}

const nothing = '--------------';

const ProfileView: React.FC<ProfileViewProps> = ({ user, handleEditClick }) => {
  return (
    <Container direction='column' align='center'>
      <Title>Personal info</Title>
      <Text size={2}>Basic info, like your name and photo</Text>
      <ProfileContent>
        <ProfileHeader justify='space-between' align='center'>
          <Flex direction='column'>
            <Text size={4}>Profile</Text>
            <Text appearance='hint' size={0}>
              Some info may be visible to other people
            </Text>
          </Flex>
          <Button onClick={handleEditClick} Size='small'>
            Edit
          </Button>
        </ProfileHeader>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>PHOTO</ProfileLabel>
          <Avatar
            url='https://avatars0.githubusercontent.com/u/46717240?v=4'
            alt='Profile Pic'
            size='large'
          />
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>NAME</ProfileLabel>
          <Text>{user.name || nothing}</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>BIO</ProfileLabel>
          <Text>{user.bio || nothing}</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>PHONE</ProfileLabel>
          <Text>{user.phone || nothing}</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>EMAIL</ProfileLabel>
          <Text>{user.email || nothing}</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>PASSWORD</ProfileLabel>
          <Text>************</Text>
        </ProfileInfo>
      </ProfileContent>
    </Container>
  );
};

export default ProfileView;
