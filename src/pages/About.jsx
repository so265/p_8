import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

function About() {
  return (
    <div>
      <Banner imageSrc="montagne.png"  />
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default About;