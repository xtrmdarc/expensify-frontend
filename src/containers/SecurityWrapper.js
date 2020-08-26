import React from 'react';
import App from './App';
import Login from './Login';
import { connect } from 'react-redux';

class SecurityWrapper extends React.Component {

  render() { 
    const { user } = this.props;
    let componentToRender ;
    if(Object.keys(user).length != 0)
      componentToRender = <App />
    else
      componentToRender = <Login />

    return componentToRender;
  }
}

const mapStateToProps = state => ({
  user: state.user
})
 
export default connect(mapStateToProps)(SecurityWrapper);
