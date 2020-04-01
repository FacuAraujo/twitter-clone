import React from 'react';

import { useUser } from './session/hooks';

const App = () => {
  const user = useUser();
  return (
    <h1>
      Bienvenido {user.displayName} - {user.email}
    </h1>
  );
};

export default App;
