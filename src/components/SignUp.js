import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import expensifyApi from '../api/expensify';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordInput: '',
      usernameInput: '',
      passwordConfirmationInput: '',
      errorsSubmission: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit() {
    const { usernameInput, passwordInput, passwordConfirmationInput } = this.state;
    const newUser = {
      username: usernameInput,
      password: passwordInput,
      password_confirmation: passwordConfirmationInput,
    };

    expensifyApi.signUpUser(newUser).then(p => {
      const { loginUser } = this.props;
      loginUser(p);
    })
      .catch(err => {
        this.setState({ errorsSubmission: err });
      });
  }

  render() {
    const {
      errorsSubmission, usernameInput, passwordInput, passwordConfirmationInput,
    } = this.state;

    const renderErrors = errorsSubmission.map(p => <span key={p} className="errorMessage">{p}</span>);

    return (
      <div className="signUp">
        <div className="mainContent">
          <span className="signUpTitle">Sign up to Expensify</span>
          {renderErrors}
          <label htmlFor="usernameInput">
            Username
            <input id="usernameInput" value={usernameInput} type="text" onChange={this.handleChange} />
          </label>
          <label htmlFor="passwordInput">
            Password
            <input id="passwordInput" value={passwordInput} type="password" onChange={this.handleChange} />
          </label>
          <label htmlFor="passwordConfirmationInput">
            Password confirmation
            <input id="passwordConfirmationInput" value={passwordConfirmationInput} type="password" onChange={this.handleChange} />
          </label>
          <button type="button" className="cta" onClick={this.handleSubmit}>
            Sign up
          </button>
          <Link to="/" className="formLink">
            Already have an account?
            <u> Log in here</u>
          </Link>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default SignUp;
