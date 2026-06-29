import React, { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '120px auto', padding: '0 24px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 'bold' }}>Terms of Service</h1>
      <p style={{ marginBottom: '16px', color: '#555' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>1. Agreement to Terms</h2>
        <p style={{ marginBottom: '16px' }}>
          These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and MommentX ("we", "us", or "our"), concerning your access to and use of our website and services.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>2. Intellectual Property Rights</h2>
        <p style={{ marginBottom: '16px' }}>
          Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>3. User Representations</h2>
        <p style={{ marginBottom: '16px' }}>
          By using the Site, you represent and warrant that: 
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li>All registration information you submit will be true, accurate, current, and complete.</li>
          <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
          <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
          <li>You will not use the Site for any illegal or unauthorized purpose.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>4. Modifications and Interruptions</h2>
        <p style={{ marginBottom: '16px' }}>
          We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
