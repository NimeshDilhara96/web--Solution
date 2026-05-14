import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      {/* Add other sections here */}
    </div>
  );
}

export default App;