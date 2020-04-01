import React from 'react';

import Header from '../components/Header';
import TweetsList from '../components/TweetsList';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <TweetsList />
    </React.Fragment>
  );
};

export default Home;
