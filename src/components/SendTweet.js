import React, { useState } from 'react';

import './styles/SendTweet.scss';

const SendTweet = () => {
  const [tweet, setTweet] = useState('');

  return (
    <div className="Input-Container">
      <textarea
        type="text"
        className="form-control mr-4 Tweet-Area"
        placeholder="¿Qué está pasando?"
        onChange={e => setTweet(e.target.value)}
        value={tweet}
      />
      <button
        className="btn btn-primary Tweet-btn"
        disabled={tweet ? false : true}
      >
        Twittear
      </button>
    </div>
  );
};

export default SendTweet;
