import React from 'react';

const Portfolio = () => {
  const works = [
    { category: 'Web Dev', title: 'E-Commerce Platform', color: '#0f172a', accentColor: '#38bdf8' },
    { category: 'UI/UX + Dev', title: 'FinTech Dashboard', color: '#1e1b4b', accentColor: '#a78bfa' },
    { category: 'Mobile', title: 'Healthcare App', color: '#052e16', accentColor: '#4ade80' },
    { category: 'Full-Stack', title: 'Logistics SaaS', color: '#431407', accentColor: '#fb923c' },
    { category: 'Design + Dev', title: 'Brand Website', color: '#0c0a09', accentColor: '#fbbf24' },
    { category: 'Web App', title: 'AI Analytics Tool', color: '#1e3a5f', accentColor: '#60a5fa' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Projects That<br/><em>Deliver</em></h2>
          </div>
          <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>Work With Us →</button>
        </div>
        <div className="work-grid">
          {works.map((work, idx) => (
            <div key={idx} className="work-card" style={{ backgroundColor: work.color }}>
              <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="150" r="80" fill="none" stroke={work.accentColor} strokeWidth="0.5" opacity="0.4"/>
                <circle cx="150" cy="150" r="120" fill="none" stroke={work.accentColor} strokeWidth="0.3" opacity="0.2"/>
                <circle cx="150" cy="150" r="20" fill={work.accentColor} opacity="0.1"/>
              </svg>
              <div className="work-overlay">
                <div className="work-category" style={{ color: work.accentColor }}>{work.category}</div>
                <div className="work-title">{work.title}</div>
              </div>
              <div className="work-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
