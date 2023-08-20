import React from 'react';
import { NavLink } from 'react-router-dom'; //J'importe le composant NavLink de la bibliothèque react-router-dom, qui est utilisé pour créer des liens de navigation entre les différentes pages de mon application.
import "../styleComponents/Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
      <img className='logoKasa' src="/logoKasa.png" alt="logo kasa" />
      </div>
      <div className='nav-items'>
        <NavLink to="/" className="accueil-active">
          Accueil
        </NavLink>
        <div>
        <NavLink to="/about" className="accueil-active">
          A propos
        </NavLink>
  </div>
      </div>
    </nav>
  );
}

export default Header;