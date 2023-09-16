import React from 'react'; //importation du module React
import "../styleComponents/_Banner.scss"; 

function Banner(props) {
  return (
    <div className='banner'>
      <img className='img-paysage' src={props.imageSrc} alt="banner paysage" /> {/* J' Utilise la props imageSrc pour afficher l'image */}
      <h1>{props.title}</h1> {/* J' Utilise la props title pour afficher le titre */}
      
    </div>
  );
}

export default Banner;
