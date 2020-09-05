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
        <Link to="/" className={`navItem ${actualTab === 'list' ? 'active' : ''}`} data-testid="listTab">
          <img src={addIcon} alt="add icon" />
          <span>Add expense</span>
        </Link>
        <Link to={`/progress/${userId}`} className={`navItem ${actualTab === 'progress' ? 'active' : ''}`} data-testid="progressTab">
          <img src={growIcon} alt="grow icon" />
          <span>Track it</span>
        </Link>
      </nav>
    </footer>
  );
};

FooterNav.defaultProps = {
  userId: 0,
};

FooterNav.propTypes = {
  actualTab: PropTypes.string.isRequired,
  userId: PropTypes.number,
};

export default FooterNav;
