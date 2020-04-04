import React from 'react';

import DeleteTweet from './DeleteTweet';

import './styles/Tweet.scss';

const Tweet = ({ text, remove, date, userName, avatar, userTweet }) => {
  const tweetDate = date => {
    const actualDate = new Date();
    const difDatesSeconds = Math.round((actualDate - date) / 1000);

    if (difDatesSeconds < 59) {
      return `${difDatesSeconds}s`;
    } else if (difDatesSeconds / 60 < 59) {
      return `${Math.round(difDatesSeconds / 60)}min`;
    } else {
      return `${Math.round(difDatesSeconds / 60 / 60)}h`;
    }
  };

  const handleDeleteTweet = () => {
    remove();
  };

  return (
    <div className="Tweet-Container">
      <div className="Avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="col Tweet-Content">
        <div className="Tweet-Header">
          {userName}
          <span className="Tweet-Info">• {tweetDate(date)}</span>
        </div>
        {text}
      </div>

      {userTweet && <DeleteTweet handleDeleteTweet={handleDeleteTweet} />}
    </div>
  );
};

export default Tweet;
