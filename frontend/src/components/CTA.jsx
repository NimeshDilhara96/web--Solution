import React from 'react';

const CTA = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cta-band">
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 className="cta-title">Ready to Build<br/>Something <em>Great?</em></h2>
        <p className="cta-sub">Tell us about your project and we'll get back to you within 24 hours with a plan.</p>
        <button className="btn btn-primary btn-lg" style={{ background: '#fafaf9', color: '#0f0f0f' }} onClick={() => scrollToSection('contact')}>Start a Project →</button>
      </div>
    </section>
  );
};

export default CTA;
