import React, { useEffect } from 'react';

import auth from './api';
import Auth from './screens/Auth';

const SessionContext = React.createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState('init');

  useEffect(() => {
    auth.onChange(user => {
      setUser(user);

      setStatus('restored');
    });
  }, []);

  const state = { user };
  const actions = {
    signOut: auth.signOut,
    signIn: { google: auth.signInGoogle, email: auth.signInEmail },
    createAcc: auth.createEmail
  };

  if (!user)
    return (
      <Auth
        signIn={actions.signIn}
        createAcc={actions.createAcc}
        status={status}
      />
    );

  return (
    <SessionContext.Provider value={{ state, actions }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider as Provider, SessionContext as default };
