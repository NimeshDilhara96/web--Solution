import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import ERP from './pages/ERP';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const location = useLocation();
  const isErpPage = location.pathname === '/erp';

  return (
    <div style={{ background: '#ffffff', color: '#0a0d14', overflowX: 'hidden' }}>
      {!isErpPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erp" element={<ERP />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      {!isErpPage && <Footer />}
    </div>
  );
}

export default App;