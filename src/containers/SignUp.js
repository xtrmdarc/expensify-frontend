import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordInput: '',
      usernameInput: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  render() { 
    return ( 
      <div className="signUp">
        <div className="mainContent" >
          <span className="signUpTitle">Sign up to Expensify</span>
          <label>
            Username
            <input id="usernameInput" value={this.state.usernameInput} type="text" placeholder="Type here" onChange={this.handleChange} /> 
            {/* {renderError} */}
          </label>
          <label>
            Password
            <input id="passwordInput" value={this.state.passwordInput} type="password" placeholder="Type here" onChange={this.handleChange} /> 
            {/* {renderError} */}
          </label>
          {/* <button className="cta" onClick={this.handleSubmit}> */}
            Log in
          {/* </button> */}
        </div>
      </div>
    );
  }
}
 
export default SignUp;