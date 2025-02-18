import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Footer from './components/Footer.js';

import './css/App.css';
import './css/colors.css';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
