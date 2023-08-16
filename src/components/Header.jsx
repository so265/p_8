import React from 'react';
import "../styleComponents/Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
        <img className='logoKasa' src="logoKasa.png" alt="logo kasa" />
      </div>
      <div className='nav-items'>
      <div>Accueil</div>
      <div>A propos</div>
      </div>
    </nav>
  );
}

export default Header;