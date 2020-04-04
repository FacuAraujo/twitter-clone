import React from 'react';

import auth from '../session/api';

import './styles/Header.scss';
import SendTweet from './SendTweet';

const Header = ({ imageURL, name }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="Avatar">
            {imageURL ? <img src={imageURL} alt="avatar" /> : null}
          </div>
          <div className="col">
            <h1 className="User-Name">
              {name}{' '}
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
