import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from '../containers/SignUp';
import Login from '../containers/Login';

const AuthenticationWrapper = () => {
  return (
    <Router>
      <Switch >
        <Route exact path="/signUp">
          <SignUp />
        </Route>
        <Route >
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default AuthenticationWrapper;