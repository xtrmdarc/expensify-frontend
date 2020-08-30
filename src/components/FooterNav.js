import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addIcon from '../assets/img/add.svg';
import growIcon from '../assets/img/grow.svg';

const FooterNav = props => {
  const { actualTab, userId } = props;

  return (
    <footer>
      <nav>
        <Link to="/" className={`navItem ${actualTab === 'list' ? 'active' : ''}`}>
          <img src={addIcon} alt="add icon" />
          <span>Add expense</span>
        </Link>
        <Link to={`/progress/${userId}`} className={`navItem ${actualTab === 'progress' ? 'active' : ''}`}>
          <img src={growIcon} alt="grow icon" />
          <span>Track it</span>
        </Link>
      </nav>
    </footer>
  );
};

FooterNav.propTypes = {
  actualTab: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default FooterNav;
