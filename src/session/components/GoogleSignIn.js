import React from 'react';

import GoogleLogo from '../../assets/images/google-logo.svg';
import './styles/GoogleSignIn.scss';

const GoogleSignIn = ({ signInGoogle, text }) => {
  return (
    <button onClick={signInGoogle} className="Google-Btn">
      <img src={GoogleLogo} alt="Google logo" /> {text}
    </button>
  );
};

export default GoogleSignIn;
