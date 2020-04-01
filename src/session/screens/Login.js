import React from 'react';

const Login = ({ signIn, status }) => (
  <div>
    {status === 'init' && <span>Intentando restaurar sesion...</span>}
    {status === 'restored' && (
      <button onClick={signIn}>Iniciar sesión con Google</button>
    )}
  </div>
);

export default Login;
