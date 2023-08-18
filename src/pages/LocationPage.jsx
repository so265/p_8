import React from 'react';
import { useParams } from 'react-router-dom';
import HousingData from './Housing.json';
import '../stylePages/Location.scss'

function LocationPage() {
  const { id } = useParams();

  const location = HousingData.find(item => item.id === id);

  if (!location) {
    return <div>Location not found.</div>;
  }

  return (
    <div>
      
      {location.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`logements ${index}`} className='location-images' />
      ))}
      <h1 className='title-images'>{location.title}</h1>
      <p className='description-pictures'>{location.location}</p>
    </div>
  );
}

export default LocationPage;