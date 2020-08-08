import React from 'react';
import './App.css';

import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
