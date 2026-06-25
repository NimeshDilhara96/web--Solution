import React from 'react';
import Hero from '../components/hero';
import Expertise from '../components/Expertise';
import SaasEcosystem from '../components/SaasEcosystem';
import WhyUs from '../components/WhyUs';
import Contact from '../components/contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <SaasEcosystem />
      <WhyUs />
      <Contact />
    </>
  );
};

export default Home;
