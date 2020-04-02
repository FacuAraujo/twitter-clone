import React from 'react';

import PageLoading from '../../components/PageLoading';

const Login = ({ signIn, status }) => (
  <div>
    {status === 'init' && <PageLoading />}
    {status === 'restored' && (
      <button onClick={signIn}>Iniciar sesión con Google</button>
    )}
  </div>
);

export default Login;
