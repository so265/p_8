import React from 'react'; //J'importe la bibliothèque React, ça me permet d'utiliser les fonctionnalités de React, notamment la création de composants.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; //Je veux que cette Navbar apparaisse sur toutes les pages
import HomePage from './pages/HomePage.jsx';
import Location from './pages/LocationPage.jsx';
import About from './pages/About.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'; 
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;