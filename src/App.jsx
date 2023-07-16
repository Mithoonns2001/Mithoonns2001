import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import CanvasAnimation from './components/CanvasAnimation/CanvasAnimation';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.innovtouch.com/innovtouch/themes/innov/js/fluidWave.js';
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>        
    <div className="slider">
    <canvas className="alx-canvas" id="pretty-bg" width="1361" height="200"></canvas>
  </div>
  
      <div className="contact-section">
      <Header/>
      </div>

      <Nav />

      <div className="contact-section">
        <About />
      </div>

      <div className="contact-section">
        <Experience />
      </div>

      <div className="contact-section">
        <Portfolio />
      </div>

      <div className="contact-section">
        <Contact />
      </div>

      <div className="header-buttons">
        <Footer />
      </div>

    </>
  );
};

export default App;
