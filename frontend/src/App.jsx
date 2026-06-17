import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Expertise from './components/Expertise';
import SaasEcosystem from './components/SaasEcosystem';
import WhyUs from './components/WhyUs';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div style={{ background: '#ffffff', color: '#0a0d14', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Expertise />
      <SaasEcosystem />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;