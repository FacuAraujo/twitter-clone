import React from 'react';

import './styles/Avatar.scss';

const Avatar = ({ imageURL }) => {
  return (
    <div className="Avatar">
      {imageURL ? <img src={imageURL} alt="avatar" /> : null}
    </div>
  );
};

export default Avatar;
