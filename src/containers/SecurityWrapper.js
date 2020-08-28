import React from 'react';
import App from './App';
import { connect } from 'react-redux';
import AuthenticationWrapper from './AuthenticationWrapper';

class SecurityWrapper extends React.Component {

  render() { 
    const { user } = this.props;
    let componentToRender ;
    if(Object.keys(user).length != 0)
      componentToRender = <App />
    else
      componentToRender = <AuthenticationWrapper />

    return componentToRender;
  }
}

const mapStateToProps = state => ({
  user: state.user
})
 
export default connect(mapStateToProps)(SecurityWrapper);
