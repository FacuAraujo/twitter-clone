import React from 'react';

import DeleteTweet from './DeleteTweet';
import Avatar from './Avatar';
import Like from './Like';

import './styles/Tweet.scss';

const Tweet = ({
  text,
  remove,
  date,
  avatar,
  userTweet,
  likes,
  removeLike,
  addLike,
  userName,
  profileName,
}) => {
  const tweetDate = (date) => {
    const actualDate = new Date();
    const difDatesSeconds = Math.round((actualDate - date) / 1000);

    if (difDatesSeconds < 59) {
      return `${difDatesSeconds}s`;
    } else if (difDatesSeconds / 60 < 59) {
      return `${Math.round(difDatesSeconds / 60)}min`;
    } else if (difDatesSeconds / 60 / 60 < 24) {
      return `${Math.round(difDatesSeconds / 60 / 60)}h`;
    } else {
      return `Hace ${Math.round(difDatesSeconds / 60 / 60 / 24)} días`;
    }
  };

  const handleDeleteTweet = () => {
    remove();
  };

  return (
    <div className="Tweet-Container">
      <Avatar imageURL={avatar} />
      <div className="col Tweet-Content">
        <div className="Tweet-Header">
          <span>{profileName}</span>
          <span className="UserName">@{userName}</span>
          <span className="Tweet-Info">• {tweetDate(date)}</span>
        </div>
        {text}
      </div>

      <div className="Tweet-Actions">
        {userTweet && <DeleteTweet handleDeleteTweet={handleDeleteTweet} />}
        <Like addLike={addLike} removeLike={removeLike} likes={likes} />
      </div>
    </div>
  );
};

export default Tweet;
