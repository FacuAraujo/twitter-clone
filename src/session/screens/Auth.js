import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageLoading from '../../components/PageLoading';
import Login from './Login';
import Register from './Register';

const Auth = ({ signIn, createAcc, status }) => (
  <div>
    {status === 'init' && <PageLoading />}
    {status === 'restored' && (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login signInGoogle={signIn.google} signInEmail={signIn.email} />
          </Route>
          <Route exact path="/register">
            <Register createAcc={createAcc} />
          </Route>
        </Switch>
      </BrowserRouter>
    )}
  </div>
);

export default Auth;
