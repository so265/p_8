import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styleComponents/_Header.scss";

function Header() {
  return (
    <nav className="navbar">
      <div className='navbar_logo'>
        <img className='logoKasa' src="/logoKasa.png" alt="logo kasa" /> {/*J'affiche l'image du logo Kasa avec la classe CSS logoKasa */}
      </div>
      <div className='nav-items'>
      <NavLink to="/" className="nav-link uppercase-mobile">{/*Je crée un lien de navigation vers la page d'accueil */}
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-link uppercase-mobile"> {/* {/*Je crée un lien de navigation vers la page A Propos */} 
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;



