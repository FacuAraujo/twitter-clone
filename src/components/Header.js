import React from 'react';

import './styles/Header.scss';
import SendTweet from './SendTweet';

const Header = ({ imageURL, name }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="Avatar">
            <img src={imageURL} alt="avatar" />
          </div>
          <div className="col">
            <h1 className="User-Name">{name}</h1>
            <SendTweet />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
