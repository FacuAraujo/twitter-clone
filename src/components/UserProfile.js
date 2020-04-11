import React from 'react';

import Avatar from '../components/Avatar';
import { useUser } from '../session/hooks';

import './styles/UserProfile.scss';

const UserProfile = () => {
  const { photoURL, displayName, email } = useUser();
  const userName = email.split('@')[0];
  return (
    <section className="User-Profile">
      <div className="container">
        <Avatar imageURL={photoURL} />
        <div className="Profile-Name">{displayName}</div>
        <div className="Profile-UserName">@{userName}</div>
      </div>
    </section>
  );
};

export default UserProfile;
