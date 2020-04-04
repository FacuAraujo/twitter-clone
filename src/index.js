import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

import { Provider as SessionProvider } from './session/context';
import { Provider as TweetProvider } from './tweets/context';

import './global.scss';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <TweetProvider>
        <App />
      </TweetProvider>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
