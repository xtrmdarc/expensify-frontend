import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import { loginUser } from '../actions';

const AuthenticationWrapper = props => {
  const { loginUser } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/signUp">
          <SignUp loginUser={loginUser} />
        </Route>
        <Route>
          <Login loginUser={loginUser} />
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: username => dispatch(loginUser(username)),
});

AuthenticationWrapper.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AuthenticationWrapper);
