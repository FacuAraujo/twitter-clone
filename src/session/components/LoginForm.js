import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/LoginForm.scss';

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = data;

  return (
    <React.Fragment>
      <form>
        <div className="form-group Login-Form-Group">
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
        </div>
        <div className="form-group Login-Form-Group">
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
        </div>
        <button
          className="btn btn-primary btn-block Login-Btn"
          disabled={email && password ? false : true}
        >
          Iniciar sesión
        </button>
      </form>

      <Link to="/register" className="primary Login-Link">
        ¿Aún no tenes cuenta? Regístrate en TwitterClone
      </Link>
    </React.Fragment>
  );
};

export default LoginForm;
