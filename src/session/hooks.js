import React from 'react';

import SessionContext from './context';

export const useUser = () => {
  const {
    state: { user }
  } = React.useContext(SessionContext);

  return user;
};
