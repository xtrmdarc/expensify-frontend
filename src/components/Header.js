import React from 'react';

const Header = () => {
  return (
    <header>
      <a className="buttonNav hidden" href="#"></a>
        <span className="pageTitle">Choose expense</span>
      <a className="buttonNav" href="#">+</a>
    </header>
  );
}

export default Header;