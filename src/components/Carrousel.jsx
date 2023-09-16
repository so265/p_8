import React, { useState } from 'react'; //utilisée pour importer le hook useState ainsi que le module principal de React.
import '../styleComponents/_Carrousel.scss';
import ArrowLeft from '../assets/chevron-carrousel-left.png'
import ArrowRight from'../assets/chevron-carrousel-right.png'


function Carrousel({ Housing }) {
  const [currentIndex, setCurrentIndex] = useState(0); /*cette variable permet de savoir quelle image est actuellement affichée dans le carrousel, et c'est ce qui permet de faire défiler les images en avant ou en arrière.*/ 

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Housing.length - 1 : prevIndex - 1)); //Décrémente l'index pour afficher l'image précédente
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Housing.length - 1 ? 0 : prevIndex + 1)); //Incrémente l'index pour afficher l'image suivante
  };

  const showArrows = Housing.length > 1; // Vérifie si j'ai plus d'une image pour afficher les flèches
  const showCounter = Housing.length > 1; // Vérifie si vous avez plus d'une image pour afficher le compteur

  return (
    <div className="slider">
      <img className="slider-image" src={Housing[currentIndex]} alt={`Vue de la chambre ${currentIndex + 1}`} /> {/* Affiche l'image actuelle */}
{/* Si showArrows est vrai, les flèches sont affichées */}
      {showArrows && ( 
        <>
          <img
            className='slider-arrow chevron-left'
            src={ArrowLeft}
            alt="show previous slider"
            onClick={goToPrevious} // Appelle la fonction goToPrevious lors du clic sur la flèche gauche
          />

          <img
            className='slider-arrow chevron-right'
            src={ArrowRight}
            alt="show next slider"
            onClick={goToNext} // Appelle la fonction goToPrevious lors du clic sur la flèche droite
          />
        </>
      )}

      {showCounter && <p className='slideCount'>{currentIndex + 1} / {Housing.length}</p>} {/* Affiche le compteur si showCounter est vrai */}
    </div>
  );
}

export default Carrousel;
