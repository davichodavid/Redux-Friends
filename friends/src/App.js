import React from 'react';
import { Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import GetFriends from './components/GetFriends';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginPage} />
      <Route path='/friends' component={GetFriends} />
    </div>
  );
}

export default App;
