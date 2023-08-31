import React from 'react'
import { Link } from 'react-router-dom'; //est utilisé pour créer un lien vers la page d'accueil
import "../stylePages/_NotFoundPage.scss"



function NotFoundPage() {
  return (
    <div>
    <div className='error'>404</div>
    <div className='oups'>Oups! La page que vous demandez n'existe pas.</div>
    <Link to="/" className='return-link'>Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default NotFoundPage