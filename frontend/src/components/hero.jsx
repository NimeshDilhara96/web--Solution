import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Marquee animation setup
    const items = ['Web Development','UI/UX Design','Mobile Apps','Backend APIs','SEO Optimization','Digital Strategy','React & Next.js','Cloud Solutions'];
    const track = document.getElementById('marquee-track');
    if (track) {
      track.innerHTML = '';
      [0,1].forEach(() => {
        const wrap = document.createElement('div');
        wrap.className = 'marquee-item';
        items.forEach((item, i) => {
          const sp = document.createElement('span');
          sp.className = 'marquee-text' + (i % 2 === 1 ? ' dim' : '');
          sp.textContent = item;
          const sep = document.createElement('span');
          sep.className = 'marquee-sep';
          sep.textContent = '·';
          wrap.appendChild(sp);
          wrap.appendChild(sep);
        });
        track.appendChild(wrap);
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home">
        <div className="hero-inner">
          <div>
            <p className="section-label anim-1">Software Solutions · Web Development</p>
            <h1 className="hero-title anim-1">We Build<br/>Digital<br/><em>Experiences.</em></h1>
            <p className="hero-sub anim-2">MommentX is a software solutions company crafting modern websites, web apps, and digital products that drive real business results.</p>
            <div className="hero-cta anim-3">
              <button className="btn btn-primary" onClick={() => scrollToSection('services')}>Our Services</button>
              <button className="btn btn-outline" onClick={() => scrollToSection('portfolio')}>View Work</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-canvas">
              <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="#0f0f0f"/>
                <circle cx="200" cy="250" r="160" fill="none" stroke="#222" strokeWidth="1"/>
                <circle cx="200" cy="250" r="120" fill="none" stroke="#1a1a1a" strokeWidth="0.5"/>
                <circle cx="200" cy="250" r="80" fill="none" stroke="#333" strokeWidth="0.5"/>
                <line x1="0" y1="250" x2="400" y2="250" stroke="#222" strokeWidth="0.5"/>
                <line x1="200" y1="0" x2="200" y2="500" stroke="#222" strokeWidth="0.5"/>
                <circle cx="200" cy="130" r="6" fill="#fff"/>
                <circle cx="320" cy="250" r="4" fill="#666"/>
                <circle cx="80" cy="250" r="4" fill="#666"/>
                <circle cx="200" cy="370" r="4" fill="#666"/>
                <text x="200" y="255" textAnchor="middle" fill="#333" fontFamily="'DM Sans'" fontSize="11" letterSpacing="3">MOMMENTX</text>
                <text x="200" y="272" textAnchor="middle" fill="#444" fontFamily="'DM Sans'" fontSize="9" letterSpacing="2">SOFTWARE SOLUTIONS</text>
                <line x1="200" y1="90" x2="200" y2="80" stroke="#444" strokeWidth="1"/>
                <line x1="313" y1="137" x2="320" y2="131" stroke="#444" strokeWidth="1"/>
                <line x1="360" y1="250" x2="370" y2="250" stroke="#444" strokeWidth="1"/>
                <line x1="313" y1="363" x2="320" y2="369" stroke="#444" strokeWidth="1"/>
                <line x1="200" y1="410" x2="200" y2="420" stroke="#444" strokeWidth="1"/>
                <line x1="87" y1="363" x2="80" y2="369" stroke="#444" strokeWidth="1"/>
                <line x1="40" y1="250" x2="30" y2="250" stroke="#444" strokeWidth="1"/>
                <line x1="87" y1="137" x2="80" y2="131" stroke="#444" strokeWidth="1"/>
              </svg>
              <div className="hero-badges">
                <span className="hero-badge-item">React</span>
                <span className="hero-badge-item">Node.js</span>
                <span className="hero-badge-item">AWS</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="floating-card-label">Projects Delivered</div>
              <div className="floating-card-num">50+</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track" id="marquee-track"></div>
      </div>

      <section id="stats-section">
        <div className="stats-inner">
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-number">50+</div><div className="stat-label">Projects Delivered</div></div>
            <div className="stat-card"><div className="stat-number">98%</div><div className="stat-label">Client Satisfaction</div></div>
            <div className="stat-card"><div className="stat-number">5+</div><div className="stat-label">Years Experience</div></div>
            <div className="stat-card"><div className="stat-number">20+</div><div className="stat-label">Tech Partners</div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
