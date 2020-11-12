import React from 'react';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Avatar from '../../../../components/Avatar';
import {
  ProfileContent,
  ProfileInfo,
  ProfileHeader,
  ProfileLabel,
  Title,
  Container,
} from './ProfileView.styles';

const ProfileView: React.FC = () => {
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
          <Button Size='small'>Edit</Button>
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
          <Text>Xanthe Neal</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>BIO</ProfileLabel>
          <Text>
            I am a software developer and a big fan of devchallenges...
          </Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>PHONE</ProfileLabel>
          <Text>908249274292</Text>
        </ProfileInfo>
        <ProfileInfo align='center'>
          <ProfileLabel appearance='hint'>EMAIL</ProfileLabel>
          <Text>xanthe.neal@gmail.com</Text>
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
