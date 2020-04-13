import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Login.scss';

import LoginForm from '../components/LoginForm';
import TwitterLogo from '../../assets/images/twitter-logo.svg';
import GoogleSignIn from '../components/GoogleSignIn';

const Login = ({ signInGoogle, signInEmail }) => (
  <section className="Login-Container">
    <img src={TwitterLogo} alt="twitter logo" className="Twitter-Logo" />
    <h1 className="Login-Header">Iniciar sesión en Aswitter</h1>
    <LoginForm signInEmail={signInEmail} />
    <GoogleSignIn
      signInGoogle={signInGoogle}
      text="Iniciar sesión con Google"
    />
    <Link to="/register" className="primary Login-Link">
      ¿Aún no tenes cuenta? Regístrate en Aswitter
    </Link>
  </section>
);

export default Login;
