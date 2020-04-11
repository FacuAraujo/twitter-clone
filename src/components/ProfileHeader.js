import React from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../session/hooks';

import './styles/ProfileHeader.scss';

const ProfileHeader = ({ userTweets }) => {
  const { displayName } = useUser();
  const tweetsQty = userTweets.length;
  return (
    <header>
      <div className="container">
        <div className="User-Header-Container">
          <Link to="/">
            <div className="arrow"></div>
          </Link>
          <div className="Header-User-Info">
            <div className="Header-User">{displayName}</div>
            <div className="Header-Tweets">{tweetsQty} Tweets</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;
