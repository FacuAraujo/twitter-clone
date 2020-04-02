import React from 'react';

import Header from '../components/Header';
import TweetsList from '../components/TweetsList';

import { useUser } from '../session/hooks';

const Home = () => {
  const user = useUser();

  return (
    <React.Fragment>
      <Header imageURL={user.photoURL} name={user.displayName} />
      <TweetsList />
    </React.Fragment>
  );
};

export default Home;
