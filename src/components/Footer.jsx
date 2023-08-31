import React from 'react'
import "../styleComponents/_Footer.scss"

function Footer() {
  return (
    <footer>
      <img className='footer-logo' src="/logoBlancKasa.png" alt="logo kasa" />
      <p className='copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer