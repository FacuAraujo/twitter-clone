import React from 'react';

import './styles/Register.scss';

import RegisterForm from '../components/RegisterForm';
import TwitterLogo from '../../assets/images/twitter-logo.svg';

const Register = () => (
  <section className="Register-Container">
    <img src={TwitterLogo} alt="twitter logo" className="Twitter-Logo" />
    <h1 className="Register-Header">Registrarse en TwitterClone</h1>
    <RegisterForm />
  </section>
);

export default Register;
