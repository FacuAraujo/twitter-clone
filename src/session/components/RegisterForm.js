import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles/RegisterForm.scss';
import Loader from '../../components/Loader';

const RegisterForm = ({ createAcc }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const { email, password, userName } = data;
  const history = useHistory();

  const createAccount = (e) => {
    e.preventDefault();
    setIsLoading(true);

    createAcc(email, password)
      .then(({ user }) => {
        user
          .updateProfile({
            displayName: userName,
            photoURL:
              'https://www.eleganciadospuntocero.com/wp-content/uploads/2013/03/Huevo-twitter-avatar.jpg',
          })
          .then(() => {
            user
              .sendEmailVerification()
              .catch((error) => console.log(error.message));

            history.push('/');
            setIsLoading(false);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') {
          setError({
            input: 'email',
            code: error.code,
            message: 'Introduce un correo electrónico válido',
          });
        } else if (error.code === 'auth/email-already-in-use') {
          setError({
            input: 'email',
            code: error.code,
            message: 'El correo ingresado ya esta en uso',
          });
        } else if (error.code === 'auth/weak-password') {
          setError({
            input: 'password',
            code: error.code,
            message: 'La contraseña debe tener al menos 6 caracteres',
          });
        } else {
          console.log(error.code, error.message);
        }
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <form onSubmit={createAccount}>
        <div className="form-group Register-Form-Group">
          <label htmlFor="userName" className="Register-Label">
            Usuario
          </label>
          <input
            className="form-control Register-Input"
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => setData({ ...data, userName: e.target.value })}
            value={userName}
          />
        </div>
        <div
          className={
            error.input === 'email'
              ? 'form-group Register-Form-Group Error'
              : 'form-group Register-Form-Group'
          }
        >
          <label htmlFor="email" className="Register-Label">
            Correo
          </label>
          <input
            className="form-control Register-Input"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={email}
          />
          {error.input === 'email' && (
            <small className="Error-Message">{error.message}</small>
          )}
        </div>
        <div
          className={
            error.input === 'password'
              ? 'form-group Register-Form-Group Error'
              : 'form-group Register-Form-Group'
          }
        >
          <label htmlFor="password" className="Register-Label">
            Contraseña
          </label>
          <input
            className="form-control Register-Input"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={password}
          />
          {error.input === 'password' && (
            <small className="Error-Message">{error.message}</small>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block Register-Btn"
          disabled={email && userName && password ? false : true}
        >
          {isLoading ? <Loader /> : 'Registrarse'}
        </button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
