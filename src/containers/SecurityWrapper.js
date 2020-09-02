import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import AuthenticationWrapper from './AuthenticationWrapper';
import expensifyApi from '../api/expensify';
import { loginUser } from '../actions';
import store from '../store';

class SecurityWrapper extends React.Component {
  render() {
    const { user, loginUser } = this.props;
    let componentToRender;
    
    if (Object.keys(user).filter(p => p !== 'token').length !== 0) componentToRender = <App />;
    else {
      const userToken = localStorage.getItem('userToken');
      if(userToken && userToken !== 'undefined' && userToken !== undefined) {
        expensifyApi.autoLogin(localStorage.getItem('userToken')).then(p => {
          loginUser(p);
        });
        componentToRender = <div></div>;
      }
      else {
        componentToRender = <AuthenticationWrapper />;
      }
    }
    return componentToRender;
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  loginUser: (data) => dispatch(loginUser(data)),
})

SecurityWrapper.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SecurityWrapper);
