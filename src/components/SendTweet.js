import React from 'react';

import './styles/SendTweet.scss';

const SendTweet = () => {
  return (
    <div className="Input-Container">
      <textarea
        type="text"
        className="form-control mr-4 Tweet-Area"
        placeholder="¿Qué está pasando?"
      />
      <button className="btn btn-primary Tweet-btn">Twittear</button>
    </div>
  );
};

export default SendTweet;
