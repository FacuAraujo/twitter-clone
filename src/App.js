import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => (
  <HashRouter basename="">
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default App;
