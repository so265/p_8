//Ce composant React Cards permet d'afficher les cartes des logements sur ma page d'accueil

import React from 'react'; //J'importe la bibliothéque de React qui me permet d'utiliser les fonctionnalités de React, dont la création de composants.
import { NavLink } from 'react-router-dom';  //J'importe le composant NavLink de la bibliothèque react-router-dom, qui est utilisé pour créer des liens de navigation entre les différentes pages de mon application.
import '../styleComponents/Cards.scss';
import Housing from '../pages/Housing.json'; // J'importe les données depuis le fichier JSON pour afficher les logements.

const limitedHousing = Housing.slice(-6); // J'affiche seulement les 6 dernièrs logements du fichier JSON.

function Cards() {
  return (
    <main className='cards-container'>
      {limitedHousing.map((location) => (
        <NavLink to={`/location/${location.id}`} key={location.id} className='card-link'>
          
            <img src={location.cover} alt={location.title} className='card-image' />
            <p className='card-title'>{location.title}</p>
          
        </NavLink>
      ))}
    </main>
  );
}

export default Cards;