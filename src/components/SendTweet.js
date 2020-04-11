import React, { useState } from 'react';

import { useTweets } from '../tweets/hooks';

import './styles/SendTweet.scss';

const SendTweet = () => {
  const [tweet, setTweet] = useState('');
  const [enableChar, setEnableChar] = useState(144);
  // eslint-disable-next-line
  const [tweets, add] = useTweets();

  const handleChange = (e) => {
    if (tweet.length < 144) {
      setTweet(e.target.value);
      setEnableChar(143 - tweet.length);
    }
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    add(tweet, date.getTime());
    setTweet('');
  };

  return (
    <div className="Input-Container">
      <form onSubmit={onSubmit}>
        <div className="w-100">
          <textarea
            type="text"
            className="form-control mr-4 Tweet-Area"
            placeholder="¿Qué está pasando?"
            onChange={handleChange}
            value={tweet}
          />
          {tweet && (
            <small className="text-secondary">
              Te quedan {enableChar} caracteres
            </small>
          )}
        </div>
        <button
          className="btn btn-primary Tweet-btn"
          disabled={tweet ? false : true}
          type="submit"
        >
          Twittear
        </button>
      </form>
    </div>
  );
};

export default SendTweet;
