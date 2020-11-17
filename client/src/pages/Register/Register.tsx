import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ReactComponent as MailSvg } from '../../assets/mail.svg';
import { ReactComponent as LockSvg } from '../../assets/lock.svg';
import Flex from '../../components/Flex';
import Authbox from '../../components/AuthBox';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Button from '../../components/Button';
import CopyRight from '../../components/CopyRight';
import useLogin from '../../hooks/useLogin';
import { PasswordEmailInput } from '../../types';

const Form = styled.form`
  margin-top: 2.5rem;

  button {
    margin-top: 1rem;
  }
`;

const Register: React.FC = () => {
  const { handleSubmit, errors, control } = useForm<PasswordEmailInput>({
    reValidateMode: 'onSubmit',
  });

  const [mutate, { isLoading, data }] = useLogin('register');

  const onSubmit = (loginInputs: PasswordEmailInput): void => {
    mutate(loginInputs);
  };

  if (data && data.register.user) {
    return <Redirect to='/profile' />;
  }

  return (
    <Flex height='100%' justify='center' align='center'>
      <Flex direction='column'>
        <Authbox page='register' title='Login' width='450px'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              render={(props) => (
                <Input
                  placeholder='Email'
                  icon={<MailSvg />}
                  fullWidth
                  {...props}
                />
              )}
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
              }}
              defaultValue=''
            />
            <Controller
              render={(props) => (
                <Input
                  placeholder='Password'
                  icon={<LockSvg />}
                  fullWidth
                  {...props}
                />
              )}
              name='password'
              control={control}
              rules={{
                required: 'Password is required',
              }}
              defaultValue=''
            />
            <ErrorMessage
              errors={errors}
              name={errors.email ? 'email' : 'password'}
              as={<Text status='danger' />}
            />
            {/* {data && data.login.error && (
              <Text status='danger'>{data.login.error.message}</Text>
            )} */}
            <Button
              type='submit'
              status='primary'
              fullWidth
              disabled={isLoading}
            >
              Start coding now
            </Button>
          </Form>
        </Authbox>
        <CopyRight />
      </Flex>
    </Flex>
  );
};

export default Register;
