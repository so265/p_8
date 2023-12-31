import React, { useState } from 'react';
import '../styleComponents/_Collapse-description.scss'; // J'importe les styles CSS du composant Collapse
import chevronUp from "../assets/chevron-up.png";



function Collapse({ title, content }) {  //Cela signifie que j'attends que le composant Collapse reçoive des props avec des noms title et content, pas besoin d'utiliser props.title ou props.content à l'intérieur de la fonction//
  // Je déclare un état local isActive initialisé à false.
  // Cela signifie que le collapse est fermé au début.
  const [isActive, setActive] = useState(false);

  return (
    <div className='collapse-container'>
      {/* J'ajoute un gestionnaire d'événements onClick au bouton.
           Lorsqu'il est cliqué, cela inverse la valeur de isActive,
           ce qui ouvre ou ferme le collapse. */}
      <div className='collapse-button' onClick={() => setActive(!isActive)}>
        <div className='collapse-header'>
          {/* J'affiche le titre dans un élément h2 */}
          <h2 className='collapse-title'>{title}</h2> {/*Cette prop "title"est utilisé pour afficher le titre du collapse*/}
        </div>
        <div className='arrow-container'>
          {/* J'affiche une flèche vers le haut ou le bas en fonction de l'état isActive */}
          <img 
            className={isActive ? 'arrow active' : 'arrow'} 
            src={chevronUp}
            alt=""
          />
        </div>
      </div>
     
        {/* Si isActive est vrai, j'affiche une div avec le contenu.
             Cela permet d'afficher ou de masquer la description du collapse. */}
        {isActive && <div className="collapse-content">{content}</div>} {/*Cette prop "collapse"est utilisé pour afficher le contenu(texte) du collapse*/}
      </div>
    );
}

export default Collapse; // J'exporte le composant Collapse pour pouvoir l'utiliser ailleurs
