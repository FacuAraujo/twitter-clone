import React, { useState } from 'react';

import { useTweets } from '../tweets/hooks';

import './styles/SendTweet.scss';

const SendTweet = () => {
  const [tweet, setTweet] = useState('');
  // eslint-disable-next-line
  const [tweets, add] = useTweets();

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    add(tweet, date.getTime());
    setTweet('');
  };

  return (
    <div className="Input-Container">
      <form onSubmit={handleSubmit}>
        <div className="w-100">
          <textarea
            className="form-control mb-4 Tweet-Area"
            onChange={handleChange}
            value={tweet}
            placeholder="¿Qué está pasando?"
          ></textarea>
        </div>
        {tweet && (
          <small
            className={`Chars-Count ${tweet.length > 144 ? 'text-red' : ''}`}
          >
            Te quedan {144 - tweet.length} caracteres
          </small>
        )}
        <button
          className="btn btn-primary Tweet-btn"
          disabled={tweet && tweet.length <= 144 ? false : true}
          type="submit"
        >
          Twittear
        </button>
      </form>
    </div>
  );
};

export default SendTweet;
