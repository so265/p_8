import React from 'react';
import Banner from '../components/Banner.jsx';
import Cards from '../components/Cards.jsx';
//import Housing from './Housing.json';



function HomePage() {
  return (
    <div>
      <Banner imageSrc="homeBanner.jpg" title="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
  );
}

export default HomePage;