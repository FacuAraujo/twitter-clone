import React from 'react';

import { useTweets } from '../tweets/hooks';
import { useUser } from '../session/hooks';
import PageLoading from './PageLoading';
import Tweet from './Tweet';

const UserTweets = ({ userTweets }) => {
  const [tweets] = useTweets();
  const user = useUser();

  const sortArray = (array, value) => {
    return array.sort((a, b) => {
      return b[value] - a[value];
    });
  };

  const tweetsOrder = sortArray(userTweets, 'date');

  if (tweets.length === 0) return <PageLoading />;

  return (
    <div className="container">
      <h2>Tweets</h2>
      <div className="UserTweets-Container">
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
            userName,
          }) => (
            <Tweet
              key={id}
              id={id}
              text={text}
              remove={remove}
              uid={uid}
              date={date}
              profileName={displayName}
              avatar={photoURL}
              userTweet={user.uid === uid}
              addLike={addLike}
              removeLike={removeLike}
              likes={likes}
              userName={userName}
            />
          )
        )}
      </div>
    </div>
  );
};

export default UserTweets;
