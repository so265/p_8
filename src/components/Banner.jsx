import React from 'react';
import "../styleComponents/Banner.scss";

function Banner(props) {
  return (
    <div className='banner'>
      <img className='img-paysage' src={props.imageSrc} alt="banner paysage" /> {/* J' Utilise la props imageSrc pour afficher le titre */}
      <h1>{props.title}</h1> {/* J' Utilise la props title pour afficher le titre */}
      
    </div>
  );
}

export default Banner;
