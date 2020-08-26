import React, { useState } from 'react';

const Header = props => {
  return (
    <header>
      <a className="buttonNav hidden" href="#"></a>
        <span className="pageTitle">{props.headerTitle}</span>
      <a className="buttonNav" href="#">+</a>
    </header>
  );
}

export default Header;