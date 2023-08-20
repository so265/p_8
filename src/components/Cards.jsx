//Ce composant React Cards permet d'afficher les cartes des logements sur ma page d'accueil

import React from 'react'; //J'importe la bibliothéque de React qui me permet d'utiliser les fonctionnalités de React, dont la création de composants.
import { NavLink } from 'react-router-dom';  //J'importe le composant NavLink de la bibliothèque react-router-dom, qui est utilisé pour créer des liens de navigation entre les différentes pages de mon application.
import '../styleComponents/Cards.scss';
import Housing from '../pages/Housing.json'; // J'importe les données depuis le fichier JSON pour afficher les logements.

const limitedHousing = Housing.slice(-6); // J'affiche seulement les 6 dernièrs logements du fichier JSON.

function Cards() {
  return (
    <div className='cards-container'>{/*Avec map je parcours les 6 derniers logements (location) et j'affiche les images et titres avec des liens (NavLink). */}
      {limitedHousing.map((location) => ( 
        <NavLink to={`/location/${location.id}`}> {/*Ceci crée un lien de navigation (<NavLink>) vers la page du logement en utilisant l'ID unique du logement dans l'URL. */}
         <img src={location.cover} alt={location.title} /> {/*J'affiche l'image et le titre, cover et title sont issues du fichier Housing.json*/}
          <p>{location.title}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Cards;