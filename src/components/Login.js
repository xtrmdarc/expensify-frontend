import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.svg';
import expensifyApi from '../api/expensify';

const Login = props => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [errorSubmit, setErrorSubmit] = useState('');

  const handleSubmit = () => {
    const { loginUser } = props;
    expensifyApi.loginUser(usernameInput, passwordInput).then(user => {
      loginUser(user);
    }).catch(error => {
      setErrorSubmit(error);
    });
  };

  const renderError = [];

  if (errorSubmit.forEach) {
    errorSubmit.forEach(p => {
      renderError.push(<span key={p} className="errorMessage">{p}</span>);
    });
  } else {
    renderError.push(<span key={errorSubmit} className="errorMessage">{errorSubmit}</span>);
  }

  return (
    <div className="login">
      <div className="mainContent">
        <img src={logo} alt="expensify logo" />
        {renderError}
        <label htmlFor="usernameInput">
          Username
          <input data-testid="username" id="usernameInput" value={usernameInput} type="text" onChange={e => setUsernameInput(e.target.value)} />
        </label>
        <label htmlFor="passwordInput">
          Password
          <input data-testid="password" id="passwordInput" value={passwordInput} type="password" onChange={e => setPasswordInput(e.target.value)} />
        </label>
        <button type="button" data-testid="loginBtn" className="cta" onClick={handleSubmit}>
          Log in
        </button>
        <Link to="/signUp" className="formLink">
          Don&apos;t have an account yet?
          <u> Sign Up here</u>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default Login;
