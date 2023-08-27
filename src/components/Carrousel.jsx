import React from 'react'
import '../styleComponents/Carrousel.scss'
import ArrowLeft from '../assets/chevron-carrousel-left.png'
import ArrowRight from'../assets/chevron-carrousel-right.png'

function Carrousel() {
  return (
    <div>
    <div><img className='chevron-left' src={ArrowLeft} alt="Fléche gauche" /></div>
    <div><img className='chevron-left' src={ArrowRight} alt="Fléche droite" /></div>
    </div>
  )
}

export default Carrousel