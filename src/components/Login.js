import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/img/logo.svg';
import expensifyApi from '../api/expensify';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      errorSubmit: '',
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
    const { usernameInput, passwordInput } = this.state;
    const { loginUser } = this.props;
    expensifyApi.loginUser(usernameInput, passwordInput).then(user => {
      loginUser(user);
    }).catch(error => {
      this.setState({
        errorSubmit: error,
      });
    });
  }

  render() {
    const renderError = [];
    const { errorSubmit, usernameInput, passwordInput } = this.state;
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
            <input data-testid="username" id="usernameInput" value={usernameInput} type="text" onChange={this.handleChange} />
          </label>
          <label htmlFor="passwordInput">
            Password
            <input data-testid="password" id="passwordInput" value={passwordInput} type="password" onChange={this.handleChange} />
          </label>
          <button type="button" data-testid="loginBtn" className="cta" onClick={this.handleSubmit}>
            Log in
          </button>
          <Link to="/signUp" className="formLink">
            Don&apos;t have an account yet?
            <u> Sign Up here</u>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default Login;
