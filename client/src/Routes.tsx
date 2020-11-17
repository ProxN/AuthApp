import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Context } from './context/auth.context';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const Routes: React.FC = () => {
  const { state } = useContext(Context);

  const { isAuthenticated } = state;

  return (
    <>
      <Switch>
        <Route
          path='/'
          exact
          render={() =>
            isAuthenticated ? <Redirect to='/profile' /> : <Login />
          }
        />
        <Route
          path='/register'
          exact
          render={() =>
            isAuthenticated ? <Redirect to='/profile' /> : <Register />
          }
        />
        <Route
          path='/profile'
          exact
          render={() => (!isAuthenticated ? <Redirect to='/' /> : <Profile />)}
        />
        <Redirect to='/' />
      </Switch>
    </>
  );
};

export default Routes;
