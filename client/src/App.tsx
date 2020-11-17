import React, { useEffect, useContext } from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import Layout from './components/Layout';
import Routes from './Routes';
import useMe from './hooks/useMe';
import { Context } from './context/auth.context';

const querycache = new QueryCache({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App: React.FC = () => {
  const { data, isLoading } = useMe();
  const { dispatch } = useContext(Context);

  useEffect(() => {
    if (data && data.me) {
      dispatch({
        type: 'SET_USER',
        payload: data.me,
      });
    }
  }, [isLoading]);

  return (
    <React.Suspense fallback={() => null}>
      <ReactQueryCacheProvider queryCache={querycache}>
        <Layout>
          <Routes />
          <ReactQueryDevtools />
        </Layout>
      </ReactQueryCacheProvider>
    </React.Suspense>
  );
};

export default App;
