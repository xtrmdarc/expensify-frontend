import React from 'react';
import logo from '../assets/img/logo.svg';
import expensifyApi from '../api/expensify';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      usernameInput: '',
      passwordInput: '',
      errorSubmit: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit() {
    const { usernameInput, passwordInput } = this.state;
    expensifyApi.loginUser(usernameInput, passwordInput).then(user => {
      this.props.loginUser(user);
    }).catch(error => {
      this.setState({
        errorSubmit: error,
      })
    });
  }

  render() { 
    let renderError = [];
    const { errorSubmit } = this.state;
    if(errorSubmit.forEach){
      errorSubmit.forEach(p => {
        renderError.push(<span className="errorMessage">{p}</span>);
      });
    }
    else {
      renderError.push(<span className="errorMessage">{errorSubmit}</span>);
    }

    return ( 
      <div className="login">
        <div className="mainContent" >
          <img src={logo} alt="expensify logo" />
          {renderError}
          <label>
            Username
            <input id="usernameInput" value={this.state.usernameInput} type="text" onChange={this.handleChange} value={this.state.usernameInput}/>
          </label>
          <label>
            Password
            <input id="passwordInput" value={this.state.passwordInput} type="password" onChange={this.handleChange} value={this.state.passwordInput}/>
          </label>
          <button className="cta" onClick={this.handleSubmit}>
            Log in
          </button>
          <Link to="/signUp" className="formLink">Don't have an account yet? <u>Sign Up here</u> </Link>
        </div>
      </div>
    );
  }
}

export default Login;