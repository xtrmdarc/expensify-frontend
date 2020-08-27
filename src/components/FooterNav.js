import React from 'react';
import { Link } from 'react-router-dom';
import addIcon from '../assets/img/add.svg';
import growIcon from '../assets/img/grow.svg';
const FooterNav = props => {
  const { actualTab, userId } = props;
  console.log(props);
  return (
    <footer>
      <nav>
        <Link to="/" className={`navItem ${actualTab === 'list' ? 'active' : ''}`}>
          <img src={addIcon} />
          <span>Add expense</span>
        </Link>
        <Link to={`/progress/${userId}`} className={`navItem ${actualTab === 'progress' ? 'active' : ''}`}>
          <img src={growIcon} />
          <span>Track it</span>
        </Link>
      </nav>
    </footer>
  )
}

export default FooterNav;