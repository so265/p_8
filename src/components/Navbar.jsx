import React from 'react';
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
        <img className='logoKasa' src="logoKasa.svg" alt="logo kasa" />
      </div>
      <div className='nav-items'>
      <div>Accueil</div>
      <div>A propos</div>
      </div>
    </nav>
  );
}

export default Navbar;