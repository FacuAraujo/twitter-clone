import React from 'react';

import './styles/Header.scss';
import SendTweet from './SendTweet';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="Avatar">
            <img
              src="https://www.eleganciadospuntocero.com/wp-content/uploads/2013/03/Huevo-twitter-avatar.jpg"
              alt="avatar"
            />
          </div>
          <div className="col">
            <h1 className="User-Name">Facundo Araujo</h1>
            <SendTweet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
