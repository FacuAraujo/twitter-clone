import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/RegisterForm.scss';

const RegisterForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    userName: ''
  });

  const { email, password, userName } = data;

  return (
    <React.Fragment>
      <form>
        <div className="form-group Register-Form-Group">
          <label htmlFor="userName" className="Register-Label">
            Usuario
          </label>
          <input
            className="form-control Register-Input"
            type="text"
            name="userName"
            id="userName"
            onChange={e => setData({ ...data, userName: e.target.value })}
            value={userName}
          />
        </div>
        <div className="form-group Register-Form-Group">
          <label htmlFor="email" className="Register-Label">
            Correo
          </label>
          <input
            className="form-control Register-Input"
            type="email"
            name="email"
            id="email"
            onChange={e => setData({ ...data, email: e.target.value })}
            value={email}
          />
        </div>
        <div className="form-group Register-Form-Group">
          <label htmlFor="password" className="Register-Label">
            Contraseña
          </label>
          <input
            className="form-control Register-Input"
            type="password"
            name="password"
            id="password"
            onChange={e => setData({ ...data, password: e.target.value })}
            value={password}
          />
        </div>
        <button
          className="btn btn-primary btn-block Register-Btn"
          disabled={email && userName && password ? false : true}
        >
          Registrarse
        </button>
      </form>

      <Link to="/" className="primary Register-Link">
        ¿Ya tienes una cuenta? Inicia sesión en TwitterClone
      </Link>
    </React.Fragment>
  );
};

export default RegisterForm;
