import React from 'react';
import Flex from '../../../../components/Flex';
import Link from '../../../../components/Link';
import Text from '../../../../components/Text';
import Input from '../../../../components/Input';
import Avatar from '../../../../components/Avatar';

import { EditContent, Form } from './EditProfile.styles';

const EditProfile: React.FC = () => {
  return (
    <Flex direction='column' fullWidth>
      <Link href='/profile'> Back</Link>
      <EditContent>
        <Text size={3}>Edit Profile</Text>
        <Text appearance='hint' size={0}>
          Changes will be reflected to every services
        </Text>
        <Flex margin='2.5rem 0' align='center'>
          <Avatar
            url='https://avatars0.githubusercontent.com/u/46717240?v=4'
            alt='Profile Pic'
            size='large'
          />
          <Text appearance='hint' margin='0 0 0 2.5rem'>
            CHANGE PHOTO
          </Text>
        </Flex>
        <Form>
          <Input fullWidth label='name' placeholder='Enter your name...' />
          <Input.TextArea
            fullWidth
            label='bio'
            placeholder='Enter your bio...'
          />
          <Input fullWidth label='phone' placeholder='Enter your phone...' />
          <Input fullWidth label='email' placeholder='Enter your email...' />
          <Input
            fullWidth
            label='password'
            placeholder='Enter your password...'
          />
        </Form>
      </EditContent>
    </Flex>
  );
};

export default EditProfile;
