import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Housing from './Housing.json';
import Carrousel from '../components/Carrousel.jsx';
import PleineStars from '../assets/full-star.png'; // Chemin vers l'image d'étoile pleine
import GreyStar from '../assets/grey-star.png'; // Chemin vers l'image d'étoile grise
import Collapse from '../components/Collapse.jsx'
import '../stylePages/_Location.scss';

// Fonction pour afficher les étoiles pleines et grises
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const remaining = 5 - fullStars;
  
  const stars = [];

// Boucle pour ajouter les étoiles pleines
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src={PleineStars} alt="FullStar" className='star-full' />);
  }

  // Boucle pour ajouter les étoiles grises
  for (let i = 0; i < remaining; i++) {
    stars.push(<img key={i + fullStars} src={GreyStar} alt="Grey Star" className='star-grey' />);
  }

  return stars;
}

// Fonction principale de la page Location
function LocationPage() {
  const { id } = useParams(); // J'obtiens l'ID du paramètre d'URL

  const location = Housing.find(item => item.id === id); // Je trouve les informations du logement basé sur l'ID

  if (!location) {
    return <Navigate to="somewhere/else" />; // Si aucune information n'est trouvée, je redirige ailleurs
  }

  // Affichage des détails de la page
  return (
    <div className='location-container'>
      <Carrousel Housing={location.pictures} /> {/* Affichage du carrousel d'images avec les images du logement */}
      <div className='location-details'>
        <div className='left-column'>
          <h1 className='title-images'>{location.title}</h1> {/* Affichage du titre du logement */}
          <p className='city-location'>{location.location}</p> {/* Affichage de l'emplacement du logement */}
          <div className='tags-housing'>
            {/* Boucle pour afficher les tags du logement */}
            {location.tags.map((tag, index) => (  
              <span key={index} className='tag'>{tag}</span>
            ))}
          </div>
         
        </div>
        <div className='right-column'>
          <div className='host-info'>
          <p className='name'>{location.host.name}</p> {/* Affichage du nom de l'hôte */}
            <img className='picture-person' src={location.host.picture} alt="Host" /> {/* Affichage de la photo de l'hôte */}
           
          </div>
          <div className='stars'>{renderStars(parseInt(location.rating))}</div> {/* Affichage des étoiles de notation */}
          </div>
          </div>
          
          {/* Conteneur des collapses */}
          <div className='collapses-flex'>
          <div className='collapse-container-location'> {/*Premier collapse pour la description */}
          <Collapse 
          title="Description"
          content={<div className="collapse-description">{location.description}</div>} //Je fais apparaitre la description en provenance du fichier Housing.json dans mon composant collapse
          />
</div>
<div className='collapse-container-location'> {/*Deuxiéme collapse pour les équipements */}

{/*Utilisation de la fonction map pour parcourir chaque élément de la liste d'équipements (location.equipments) */}
 {/*Je crée une div pour chaque équipement avec une clé unique (key) basée sur l'index et une classe CSS 'equipment' */}
<Collapse 
      title="Equipements" 
      content={location.equipments.map((equipment, index) => ( 
       <div key={index} className='collapse-equipment'>{equipment}</div>   
))}
      />
        </div>
        </div>
      
    </div>
  );
}

export default LocationPage; // J'exporte la fonction principale pour être utilisée ailleurs
