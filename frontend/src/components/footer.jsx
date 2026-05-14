import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">MOMMENTX</div>
            <p className="footer-desc">Software solutions for modern businesses. Web development, design, and digital strategy from Colombo, Sri Lanka.</p>
          </div>
          <div>
            <div className="footer-col-label">Services</div>
            {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Backend APIs', 'SEO'].map((service, idx) => (
              <a key={idx} onClick={() => scrollToSection('services')} className="footer-link">{service}</a>
            ))}
          </div>
          <div>
            <div className="footer-col-label">Company</div>
            {[
              { label: 'About', id: 'about' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Process', id: 'process-section' },
              { label: 'Contact', id: 'contact' },
            ].map((item, idx) => (
              <a key={idx} onClick={() => scrollToSection(item.id)} className="footer-link">{item.label}</a>
            ))}
          </div>
          <div>
            <div className="footer-col-label">Connect</div>
            {['LinkedIn', 'Behance', 'GitHub', 'Instagram'].map((social, idx) => (
              <a key={idx} href="#" className="footer-link">{social}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 MommentX. All rights reserved.</div>
          <div className="footer-copy">Crafted in Colombo, Sri Lanka 🇱🇰</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

