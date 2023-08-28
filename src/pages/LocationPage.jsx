import React from 'react';
import { Navigate, useParams } from 'react-router-dom'; // Importation des modules Navigate et useParams de react-router-dom
import Housing from './Housing.json'; //// Importation des données du fichier Housing.json
import Carrousel from '../components/Carrousel.jsx';

import '../stylePages/Location.scss';

function LocationPage() {
  const { id } = useParams(); // Récupération du paramètre "id" de l'URL

  const location = Housing.find(item => item.id === id); //Je recherche l'objet correspondant à l'id dans les données Housing


  if (!location) {
    return <Navigate to="somewhere/else" />; // Redirection vers "somewhere/else" si aucune location n'est trouvée
  }

  return (
    <div>
      <Carrousel Housing={location.pictures} /> {/* Affichage du composant Carrousel avec les images de la location */}
      <h1 className='title-images'>{location.title}</h1> {/* Affichage du titre de la location */}
      <p className='city-location'>{location.location}</p> {/* Affichage de la localisation de la location */}
      <div className='tags-housing'>
        {location.tags.map((tag, index) => ( 
          <span key={index} className='tag'>{tag}</span> 
        ))} {/* Affichage des tags de la location sous forme de balises span */}
      </div>
    </div>
  );
}

export default LocationPage;

