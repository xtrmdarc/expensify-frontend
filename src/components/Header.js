import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <Link to="/" className={`buttonNav ${props.headerType == 1 ? 'hidden' : ''}`} href="#">
        Back
      </Link>
      <span className="pageTitle">{props.headerTitle}</span>
      <a className="buttonNav" href="#">+</a>
    </header>
  );
}

export default Header;