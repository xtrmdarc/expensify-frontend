import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => {
  const { headerType, headerTitle, logOutUser } = props;
  return (
    <header>
      <Link to="/" className={`buttonNav ${headerType === 1 ? 'hidden' : ''}`}>
        Back
      </Link>
      <span className="pageTitle">{headerTitle}</span>
      <button type="button" className="buttonNav" href="#" onClick={logOutUser}>Log out</button>
    </header>
  );
};

Header.propTypes = {
  headerType: PropTypes.number.isRequired,
  headerTitle: PropTypes.string.isRequired,
  logOutUser: PropTypes.func.isRequired,
};

export default Header;
