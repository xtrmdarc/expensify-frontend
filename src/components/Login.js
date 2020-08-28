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
      errorMessage: '',
    }
  }

  handleChange(e) {
    this.setState({
      usernameInput: e.target.value,
    })
  }

  handleSubmit() {
    console.log(this.state);
    expensifyApi.loginUser(this.state.usernameInput).then(user => {
      console.log(this.props);
      this.props.loginUser(user);
    }).catch(error => {
      this.setState({
        errorMessage: error.message,
      })
    });
  }

  render() { 
    let renderError = '';
    if(this.state.errorMessage != ''){
      renderError = <span className="errorMessage">{this.state.errorMessage}</span>;
    }
    
    return ( 
      <div className="login">
        <div className="mainContent" >
          <img src={logo} alt="expensify logo" />
          <label>
            Username
            <input id="usernameInput" value={this.state.usernameInput} type="text" onChange={this.handleChange} value={this.state.usernameInput}/>
            {renderError}
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