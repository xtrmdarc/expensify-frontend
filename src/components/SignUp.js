import React from 'react';
import { Link } from 'react-router-dom';
import expensifyApi from '../api/expensify';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordInput: '',
      usernameInput: '',
      passwordConfirmationInput: '',
      errorsSubmission: [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit() {
    const {usernameInput, passwordInput, passwordConfirmationInput} = this.state;
    const newUser = {
      username: usernameInput,
      password: passwordInput,
      password_confirmation: passwordConfirmationInput,
    }
    console.log(this.props);
    expensifyApi.signUpUser(newUser).then( p => {
      this.props.loginUser(p);
    })
    .catch( err => {
      this.setState({errorsSubmission: err})
    });
  }

  render() { 
    const { errorsSubmission } = this.state;

    const renderErrors = errorsSubmission.map(p => <span className="errorMessage">{p}</span>)

    return ( 
      <div className="signUp">
        <div className="mainContent" >
          <span className="signUpTitle">Sign up to Expensify</span>
          {renderErrors}
          <label>
            Username
            <input id="usernameInput" value={this.state.usernameInput} type="text" onChange={this.handleChange} /> 
          </label>
          <label>
            Password
            <input id="passwordInput" value={this.state.passwordInput} type="password"  onChange={this.handleChange} /> 
          </label>
          <label>
            Password confirmation
            <input id="passwordConfirmationInput" value={this.state.passwordConfirmationInput} type="password" onChange={this.handleChange} /> 
          </label>
          <button className="cta" onClick={this.handleSubmit}>
            Sign up
          </button>
          <Link to="/" className="formLink">Already have an account? <u>Log in here</u></Link>
        </div>
      </div>
    );
  }
}
 
export default SignUp;