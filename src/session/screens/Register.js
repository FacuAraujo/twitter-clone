import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Register.scss';

import RegisterForm from '../components/RegisterForm';
import TwitterLogo from '../../assets/images/twitter-logo.svg';
import GoogleSignIn from '../components/GoogleSignIn';

const Register = ({ createAcc, signInGoogle }) => (
  <section className="Register-Container">
    <img src={TwitterLogo} alt="twitter logo" className="Twitter-Logo" />
    <h1 className="Register-Header">Registrarse en Aswitter</h1>
    <RegisterForm createAcc={createAcc} />
    <GoogleSignIn signInGoogle={signInGoogle} text="Registrate con Google" />
    <Link to="/" className="primary Register-Link">
      ¿Ya tienes una cuenta? Inicia sesión en Aswitter
    </Link>
  </section>
);

export default Register;
