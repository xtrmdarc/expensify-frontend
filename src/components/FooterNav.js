import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = props => {
  const { actualTab, userId } = props;
  console.log(props);
  return (
    <footer>
      <nav>
        <Link to="/" className={`navItem ${actualTab === 'list' ? 'active' : ''}`}>Add expense</Link>
        <Link to={`/progress/${userId}`} className={`navItem ${actualTab === 'progress' ? 'active' : ''}`}>Your progress</Link>
      </nav>
    </footer>
  )
}

export default FooterNav;