import React from 'react'; //J'importe la bibliothèque React, ça me permet d'utiliser les fonctionnalités de React, notamment la création de composants.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx'; //Je veux que le Header et le footer apparaissent sur toutes les pages.
import Footer from'./components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import Location from './pages/LocationPage.jsx';
import About from './pages/About.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'; 
import "./App.scss";

function App() { //<BrowserRouter> est un composant fourni par la bibliothèque react-router-dom pour gérer la logique de routage de mon application,  conteneur qui enveloppe les différentes routes de votre application. 
  return (
    <BrowserRouter> 
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;