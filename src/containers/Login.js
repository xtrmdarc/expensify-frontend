import React from 'react';
import logo from '../assets/img/logo.svg';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <div className="login">
        <div className="mainContent" >
          <img src={logo} alt="expensify logo" />
          <label>
            Username
            <input id="usernameInput" type="text" placeholder="Type here"/>
          </label>
          <button className="cta">
            Log in
          </button>
        </div>
      </div>
    );
  }
}
 
export default Login;