import React from 'react';

import { useTweets } from '../tweets/hooks';
import { useUser } from '../session/hooks';
import PageLoading from './PageLoading';
import Tweet from './Tweet';

const TweetsList = () => {
  const [tweets] = useTweets();
  const user = useUser();

  const sortArray = (array, value) => {
    return array.sort((a, b) => {
      return b[value] - a[value];
    });
  };

  const tweetsOrder = sortArray(tweets, 'date');

  if (tweets.length === 0) return <PageLoading />;

  return (
    <div className="container">
      <div className="TweetsList-Container">
        {tweetsOrder.map(
          ({
            id,
            text,
            date,
            displayName,
            photoURL,
            uid,
            remove,
            addLike,
            removeLike,
            likes,
          }) => (
            <Tweet
              key={id}
              id={id}
              text={text}
              remove={remove}
              uid={uid}
              date={date}
              userName={displayName}
              avatar={photoURL}
              userTweet={user.uid === uid}
              addLike={addLike}
              removeLike={removeLike}
              likes={likes}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TweetsList;
