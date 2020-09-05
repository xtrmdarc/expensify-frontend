import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import expensifyApi from '../api/expensify';

const SignUp = props => {
  const [passwordInput, setPasswordInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordConfirmationInput, setPasswordConfirmationInput] = useState('');
  const [errorsSubmission, setErrorsSubmission] = useState([]);

  const handleSubmit = () => {
    const newUser = {
      username: usernameInput,
      password: passwordInput,
      password_confirmation: passwordConfirmationInput,
    };

    expensifyApi.signUpUser(newUser).then(p => {
      const { loginUser } = props;
      loginUser(p);
    })
      .catch(err => {
        setErrorsSubmission(err);
      });
  };

  const renderErrors = errorsSubmission.map(p => <span key={p} className="errorMessage">{p}</span>);

  return (
    <div className="signUp">
      <div className="mainContent">
        <span className="signUpTitle">Sign up to Expensify</span>
        {renderErrors}
        <label htmlFor="usernameInput">
          Username
          <input
            id="usernameInput"
            value={usernameInput}
            type="text"
            onChange={e => setUsernameInput(e.target.value)}
          />
        </label>
        <label htmlFor="passwordInput">
          Password
          <input
            id="passwordInput"
            value={passwordInput}
            type="password"
            onChange={e => setPasswordInput(e.target.value)}
          />
        </label>
        <label htmlFor="passwordConfirmationInput">
          Password confirmation
          <input
            id="passwordConfirmationInput"
            value={passwordConfirmationInput}
            type="password"
            onChange={e => setPasswordConfirmationInput(e.target.value)}
          />
        </label>
        <button type="button" className="cta" onClick={handleSubmit}>
          Sign up
        </button>
        <Link to="/" className="formLink">
          Already have an account?
          <u> Log in here</u>
        </Link>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default SignUp;
