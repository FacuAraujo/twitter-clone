import React from 'react';

import './styles/Login.scss';

import LoginForm from '../components/LoginForm';
import TwitterLogo from '../../assets/images/twitter-logo.svg';

const Login = () => (
  <section className="Login-Container">
    <img src={TwitterLogo} alt="twitter logo" className="Twitter-Logo" />
    <h1 className="Login-Header">Iniciar sesión en TwitterClone</h1>
    <LoginForm />
  </section>
);

export default Login;
