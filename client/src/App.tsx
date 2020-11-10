import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Login} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
