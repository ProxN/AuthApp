import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';
import { ReactComponent as LockSvg } from '../../assets/lock.svg';
import Flex from '../../components/Flex';
import Authbox from '../../components/AuthBox';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Form = styled.form`
  margin-top: 2.5rem;

  button {
    margin-top: 1rem;
  }
`;

const Login: React.FC = () => {
  return (
    <Flex height='100%' justify='center' align='center'>
      <Authbox title='Login' width='450px'>
        <Form>
          <Input placeholder='Email' icon={<MailSvg />} fullWidth />
          <Input
            type='password'
            placeholder='Password'
            icon={<LockSvg />}
            fullWidth
          />
          <Button fullWidth>Login</Button>
        </Form>
      </Authbox>
    </Flex>
  );
};

export default Login;
