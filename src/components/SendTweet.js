import React, { useState } from 'react';

import { useTweets } from '../tweets/hooks';

import './styles/SendTweet.scss';

const SendTweet = () => {
  const [tweet, setTweet] = useState('');
  const [enableChar, setEnableChar] = useState(144);
  const [tweets, add] = useTweets();

  const handleChange = (e) => {
    setTweet(e.target.value);
    console.log(tweet.length);
    setEnableChar(145 - tweet.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    add(tweet, date.getTime());
    setTweet('');
  };

  const isButtonEnable = tweet.length > 0 && tweet.length <= 144;
  // console.log(tweet.length > 0 && tweet.length <= 144);

  return (
    <div className="Input-Container">
      <form onSubmit={handleSubmit}>
        <div className="w-100">
          <div className="Tweet-Area-Wrapper">
            <textarea
              className="form-control mb-4 Tweet-Area"
              onChange={handleChange}
              value={tweet}
              placeholder="¿Qué está pasando?"
            ></textarea>
          </div>
          {tweet && (
            <small className="text-secondary">
              Te quedan {enableChar} caracteres
            </small>
          )}
        </div>
        <button
          className="btn btn-primary Tweet-btn"
          disabled={!isButtonEnable}
          type="submit"
        >
          Twittear
        </button>
      </form>
    </div>
  );
};

export default SendTweet;
function newFunction() {
  console.log();
}
