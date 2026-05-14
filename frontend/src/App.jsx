import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Process from './components/Process';
import Portfolio from './components/portfolio';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--dark)' }}>
      <Cursor />
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;