import React from 'react';
import App from './App';
import Login from './Login';

class SecurityWrapper extends React.Component {

  render() { 
    let componentToRender ;
    if(false)
      componentToRender = <App />
    else
      componentToRender = <Login />

    return componentToRender;
  }
}
 
export default SecurityWrapper;
