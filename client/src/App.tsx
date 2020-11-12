import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/profile' exact component={Profile} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
};

export default App;
