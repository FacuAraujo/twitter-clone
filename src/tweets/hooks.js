import React from 'react';

import TweetContext from './context';

export function useTweets() {
  const {
    state: { tweets },
    actions: { add, remove }
  } = React.useContext(TweetContext);

  return [
    tweets.map(tweet => ({
      ...tweet,
      remove: () => remove(tweet.id)
    })),
    add
  ];
}
