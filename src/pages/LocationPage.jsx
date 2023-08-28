import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Housing from './Housing.json';
import Carrousel from '../components/Carrousel.jsx';
import PleineStars from '../assets/full-star.png'; // Chemin vers l'image d'étoile pleine
import GreyStar from '../assets/grey-star.png'; // Chemin vers l'image d'étoile grise

import '../stylePages/Location.scss';

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const remaining = 5 - fullStars;
  
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src={PleineStars} alt="FullStar" className='star-full' />);
  }

  for (let i = 0; i < remaining; i++) {
    stars.push(<img key={i + fullStars} src={GreyStar} alt="Grey Star" className='star-grey' />);
  }

  return stars;
}

function LocationPage() {
  const { id } = useParams();

  const location = Housing.find(item => item.id === id);

  if (!location) {
    return <Navigate to="somewhere/else" />;
  }

  return (
    <div className='location-container'>
      <Carrousel Housing={location.pictures} />
      <div className='location-details'>
        <h1 className='title-images'>{location.title}</h1>
        <div className='host'>
          {/* Utilisation de la classe 'host-info' pour grouper le prénom et l'image */}
          <div className='host-info'>
            <p className='name'>{location.host.name}</p>
            <img className='picture-person' src={location.host.picture} alt="Host" />
          </div>
          {/* Étoiles affichées en dessous du prénom et de l'image */}
          <div className='stars'>{renderStars(parseInt(location.rating, 10))}</div>
        </div>
        <p className='city-location'>{location.location}</p>
        <div className='tags-housing'>
          {location.tags.map((tag, index) => (
            <span key={index} className='tag'>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LocationPage;
