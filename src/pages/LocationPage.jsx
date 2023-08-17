import React from 'react';
import { useParams } from 'react-router-dom';
import HousingData from './Housing.json';

function LocationPage() {
  const { id } = useParams();

  const location = HousingData.find(item => item.id === id);

  if (!location) {
    return <div>Location not found.</div>;
  }

  return (
    <div>
      <h1>{location.title}</h1>
      {location.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`logements ${index}`} />
      ))}
      <p>{location.description}</p>
    </div>
  );
}

export default LocationPage;