import React, { useState, useEffect } from 'react';

import { useUser } from '../session/hooks';

import './styles/Like.scss';

const Like = ({ likes, addLike, removeLike }) => {
  const user = useUser();
  const [isLike, setLike] = useState(null);

  useEffect(() => {
    const userLike = likes.includes(user.uid);
    setLike(userLike);
  }, [likes, user.uid]);

  const handleClick = () => {
    setLike(!isLike);
    isLike ? removeLike() : addLike();
  };

  return (
    <div className={`Likes-Container ${isLike ? 'text-red' : ''}`}>
      <div
        className={`button fav ${isLike ? 'is-liked' : ''}`}
        id="fav"
        onClick={handleClick}
      ></div>
      {likes.length}
    </div>
  );
};

export default Like;
