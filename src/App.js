import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';  // Aquí irán los estilos

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
