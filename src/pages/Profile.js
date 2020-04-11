import React from 'react';

import { useTweets } from '../tweets/hooks';
import { useUser } from '../session/hooks';

import ProfileHeader from '../components/ProfileHeader';
import UserProfile from '../components/UserProfile';
import UserTweets from '../components/UserTweets';

const Profile = () => {
  const [tweets] = useTweets();
  const user = useUser();

  const getUserTweets = (tweets) => {
    const userTweets = [];
    tweets.map((tweet) => {
      if (tweet.uid === user.uid) {
        return userTweets.push(tweet);
      }
      return null;
    });
    return userTweets;
  };

  const userTweets = getUserTweets(tweets);

  return (
    <React.Fragment>
      <ProfileHeader userTweets={userTweets} />
      <UserProfile />
      <UserTweets userTweets={userTweets} />
    </React.Fragment>
  );
};

export default Profile;
