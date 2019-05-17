import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import GetFriends from './components/GetFriends';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={LoginPage} />
      <PrivateRoute path='/friends' component={GetFriends} />
    </div>
  );
}

export default App;
