import React from 'react';
import logo from '../assets/img/logo.svg';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import expensifyApi from '../api/expensify';

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
      username: e.target.value,
    })
  }

  handleSubmit() {
    expensifyApi.loginUser(this.state.username).then(user => {
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
            <input id="usernameInput" value={this.state.usernameInput} type="text" placeholder="Type here" onChange={this.handleChange} value={this.state.username}/>
            {renderError}
          </label>
          <button className="cta" onClick={this.handleSubmit}>
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