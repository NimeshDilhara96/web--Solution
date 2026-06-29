import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '120px auto', padding: '0 24px', lineHeight: '1.6' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '24px', fontWeight: 'bold' }}>Privacy Policy</h1>
      <p style={{ marginBottom: '16px', color: '#555' }}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>1. Introduction</h2>
        <p style={{ marginBottom: '16px' }}>
          Welcome to MommentX. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>2. The Data We Collect About You</h2>
        <p style={{ marginBottom: '16px' }}>
          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
          <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
          <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
          <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>3. How We Use Your Personal Data</h2>
        <p style={{ marginBottom: '16px' }}>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '24px', marginBottom: '16px' }}>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', fontWeight: 'bold' }}>4. Contact Us</h2>
        <p style={{ marginBottom: '16px' }}>
          If you have any questions about this privacy policy or our privacy practices, please contact us via the contact form on our home page.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
