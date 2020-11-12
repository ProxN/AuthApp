import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';
import { ReactComponent as LockSvg } from '../../assets/lock.svg';
import Flex from '../../components/Flex';
import Authbox from '../../components/AuthBox';
import Input from '../../components/Input';
import Button from '../../components/Button';
import CopyRight from '../../components/CopyRight';

const Form = styled.form`
  margin-top: 2.5rem;

  button {
    margin-top: 1rem;
  }
`;

const Login: React.FC = () => {
  return (
    <Flex height='100%' justify='center' align='center'>
      <Flex direction='column'>
        <Authbox title='Login' width='450px'>
          <Form>
            <Input placeholder='Email' icon={<MailSvg />} fullWidth />
            <Input
              type='password'
              placeholder='Password'
              icon={<LockSvg />}
              fullWidth
            />
            <Button status='primary' fullWidth>
              Login
            </Button>
          </Form>
        </Authbox>
        <CopyRight />
      </Flex>
    </Flex>
  );
};

export default Login;
