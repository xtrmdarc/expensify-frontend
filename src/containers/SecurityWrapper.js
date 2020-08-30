import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import AuthenticationWrapper from './AuthenticationWrapper';

class SecurityWrapper extends React.Component {
  render() {
    const { user } = this.props;
    let componentToRender;
    if (Object.keys(user).length !== 0) componentToRender = <App />;
    else componentToRender = <AuthenticationWrapper />;

    return componentToRender;
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

SecurityWrapper.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps)(SecurityWrapper);
