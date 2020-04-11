import React from 'react';
import { Link } from 'react-router-dom';

import auth from '../session/api';

import SendTweet from './SendTweet';
import Avatar from './Avatar';

import './styles/Header.scss';

const Header = ({ imageURL, name }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <Link to="/profile">
            <Avatar imageURL={imageURL} />
          </Link>
          <div className="col">
            <h1 className="User-Name">
              <Link to="/profile">{name}</Link>
              <span className="LogOut" onClick={() => auth.signOut()}>
                Cerrar sesión
              </span>
            </h1>
            <SendTweet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
