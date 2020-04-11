import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import PageLoading from '../../components/PageLoading';
import Login from './Login';
import Register from './Register';

const Auth = ({ signIn, createAcc, status }) => (
  <div>
    {status === 'init' && <PageLoading />}
    {status === 'restored' && (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/">
            <Login signInGoogle={signIn.google} signInEmail={signIn.email} />
          </Route>
          <Route exact path="/register">
            <Register createAcc={createAcc} signInGoogle={signIn.google} />
          </Route>
        </Switch>
      </HashRouter>
    )}
  </div>
);

export default Auth;
