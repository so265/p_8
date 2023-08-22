import React from 'react';
import { useState } from 'react';  //J'importe le hook useState depuis React pour gérer l'état local dans le composant.
import '../styleComponents/Collapse-description.scss'; // J'importe les styles CSS du composant Collapse
import chevronUp from "../assets/chevron-up.png";

function Collapse({ title, content }) { // Je déclare un composant fonctionnel nommé Collapse qui accepte les propriétés title et content
  const [isActive, setActive] = useState(false); //Je déclare un état local isActive initialisé à false, le collapse est fermé et une fonction setActive pour mettre à jour cet état.

  return (
    <div className='collapse-container'>
      <div className='collapse-button' onClick={() => setActive(!isActive)}> {/* j'ajoute un gestionnaire d'événements onClick qui inverse la valeur de isActive lorsqu'il est cliqué = collapse ouvert*/}
        <div className='collapse-header'>
          <h2 className='collapse-title'>{title}</h2> {/*J'afiche le titre ds l'élément h2*/}
        </div>
        <div className='arrow-container'>
          <img 
            className={isActive ? 'arrow active' : 'arrow'} 
            src={chevronUp}
            alt=""
          />
        </div>{/*J'afiche le titre ds l'élément h2*/}
      </div>
      <div>
        {isActive && <div className="collapse-content">{content}</div>} {/*Si isActive est vrai, affiche une div avec la classe CSS collapse-content contenant le contenu. */}
      </div>
    </div>
  );
}

export default Collapse; //J'exporte le composant collapse pour pouvoir l'utiliser ailleurs
