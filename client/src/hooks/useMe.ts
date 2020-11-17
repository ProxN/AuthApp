import { useQuery } from 'react-query';
import graphqlClient, { gql } from '../utils/graphqlClient';
import { IUser } from '../types';

const useMe = () => {
  return useQuery(
    'user',
    async () => {
      const res = await graphqlClient.request<{
        me: IUser;
      }>(gql`
        query {
          me {
            id
            email
            name
            bio
          }
        }
      `);
      return res;
    },
    {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: true,
      retry: 0,
    }
  );
};

export default useMe;
