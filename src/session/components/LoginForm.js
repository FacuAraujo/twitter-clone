import React, { useState } from 'react';

import './styles/LoginForm.scss';
import Loader from '../../components/Loader';

const LoginForm = ({ signInEmail }) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const authAccount = e => {
    e.preventDefault();
    setIsLoading(true);

    signInEmail(email, password)
      .then(result => {
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          setError({
            input: 'email',
            code: error.code,
            message: 'Introduce un correo electrónico válido'
          });
        } else if (error.code === 'auth/user-disabled') {
          setError({
            input: 'email',
            code: error.code,
            message: 'Tu usuario ha sido desabilitado'
          });
        } else if (error.code === 'auth/user-not-found') {
          setError({
            input: 'email',
            code: error.code,
            message: 'No existe un usuario con ese correo'
          });
        } else if (error.code === 'auth/wrong-password') {
          setError({
            input: 'password',
            code: error.code,
            message: 'La contraseña es incorrecta'
          });
        } else {
          console.log(error.code, error.message);
        }
        setIsLoading(false);
      });
  };

  const { email, password } = data;

  return (
    <React.Fragment>
      <form onSubmit={authAccount}>
        <div
          className={
            error.input === 'email'
              ? 'form-group Login-Form-Group Error'
              : 'form-group Login-Form-Group'
          }
        >
          <label htmlFor="email" className="Login-Label">
            Correo
          </label>
          <input
            className="form-control Login-Input"
            type="email"
            name="email"
            id="email"
            onChange={e => setData({ ...data, email: e.target.value })}
            value={email}
          />
          {error.input === 'email' && (
            <small className="Error-Message">{error.message}</small>
          )}
        </div>
        <div
          className={
            error.input === 'password'
              ? 'form-group Login-Form-Group Error'
              : 'form-group Login-Form-Group'
          }
        >
          <label htmlFor="password" className="Login-Label">
            Contraseña
          </label>
          <input
            className="form-control Login-Input"
            type="password"
            name="password"
            id="password"
            onChange={e => setData({ ...data, password: e.target.value })}
            value={password}
          />
          {error.input === 'password' && (
            <small className="Error-Message">{error.message}</small>
          )}
        </div>
        <button
          className="btn btn-primary btn-block Login-Btn"
          disabled={email && password ? false : true}
        >
          {isLoading ? <Loader /> : 'Iniciar sesión'}
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
