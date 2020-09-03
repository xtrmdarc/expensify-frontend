import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { loginUser } from '../actions';
import expensifyApi from '../api/expensify';

const SecurityWrapper = props => {
  const {
    loginUser,
    user,
  } = props;

  let loggedIn = true;
  if (Object.keys(user).filter(p => p !== 'token').length === 0) {
    const userToken = localStorage.getItem('userToken');
    if (userToken && userToken !== 'undefined' && userToken !== undefined) {
      expensifyApi.autoLogin(localStorage.getItem('userToken')).then(p => {
        loginUser(p);
      });
    } else {
      loggedIn = false;
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          { !loggedIn ? <Login loginUser={loginUser} /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/signUp">
          { !loggedIn ? <SignUp loginUser={loginUser} /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          { loggedIn ? <App /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
});

SecurityWrapper.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecurityWrapper);
