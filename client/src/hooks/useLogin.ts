import { useMutation, queryCache } from 'react-query';
import graphqlClient, { gql } from '../utils/graphqlClient';
import { PasswordEmailInput, UserResponse } from '../types';

type AuthType = 'login' | 'register';

interface Response {
  login: UserResponse;
  register: UserResponse;
}

const useLogin = (type: AuthType) => {
  return useMutation(
    async (data: PasswordEmailInput) => {
      const res = await graphqlClient.request<Response>(
        gql`
          mutation logUser($email: String!, $password: String!) {
            ${type}(email: $email, password: $password) {
              user {
                id
                email
              }
              error {
                field
                message
              }
            }
          }
        `,
        data
      );

      return res;
    },
    {
      onSuccess: (data) => {
        if (type === 'login') {
          queryCache.setQueryData('user', data.login.user);
        } else {
          queryCache.setQueryData('user', data.register.user);
        }
      },
    }
  );
};

export default useLogin;
