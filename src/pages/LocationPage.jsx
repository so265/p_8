import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Housing from './Housing.json';
import Carrousel from '../components/Carrousel.jsx';

import '../stylePages/Location.scss'


function LocationPage() {
  const { id } = useParams();

  const location = Housing.find(item => item.id === id);

  if (!location) {
    return <Navigate to="somewhere/else" />
  }

  return (
    
    <div>
      <Carrousel />
      {location.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`logements ${index}`} className='location-images' />
      ))}
      <h1 className='title-images'>{location.title}</h1>
      <p className='city-location'>{location.location}</p>
    </div>
  );
}

export default LocationPage;

