import React from 'react';
import logo from '../assets/img/logo.svg';
import { connect } from 'react-redux';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: ''
    }
  }

  handleChange(e) {
    this.setState({
      username: e.target.value,
    })
  }

  handleSubmit() {

  }

  render() { 
    return ( 
      <div className="login">
        <div className="mainContent" >
          <img src={logo} alt="expensify logo" />
          <label>
            Username
            <input id="usernameInput" type="text" placeholder="Type here" onChange={this.handleChange} value={this.state.username}/>
          </label>
          <button className="cta">
            Log in
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: username => dispatch(loginUser(username)),
});
 
export default connect(null,mapDispatchToProps)(Login);