import React, { useState, useEffect } from 'react';

import { useUser } from '../session/hooks';

import api from './api';
import PageLoading from '../components/PageLoading';

const TweetContext = React.createContext({});

const TweetProvider = ({ children }) => {
  const user = useUser();
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const add = (text, date) => {
    const { uid, displayName, photoURL } = user;
    api.add({ text, date, uid, displayName, photoURL });
  };

  const remove = id => {
    api.remove(id);
  };

  useEffect(() => {
    api.onChange(tweets => {
      setTweets(tweets);

      setIsLoading(false);
    });

    return () => setIsLoading(true);
  }, [user.uid]);

  if (isLoading) return <PageLoading />;

  const state = { tweets };
  const actions = { add, remove };

  return (
    <TweetContext.Provider value={{ state, actions }}>
      {children}
    </TweetContext.Provider>
  );
};

export { TweetProvider as Provider, TweetContext as default };
