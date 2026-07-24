import React from 'react';

const caseStudies = [
  {
    emoji: '📦',
    title: 'OrderFlow ERP',
    desc: 'An all-in-one business management platform designed to automate multi-channel retail operations.',
    points: [
      'Problem: Manual order tracking & lost sales',
      'Solution: Centralized inventory & order ERP',
      'Tech: React, Node.js, PostgreSQL',
      'Result: 300% faster order fulfillment'
    ],
  },
  {
    emoji: '👥',
    title: 'Global HRM System',
    desc: 'A comprehensive human resource management solution for multinational enterprise teams.',
    points: [
      'Problem: Fragmented HR data & compliance risks',
      'Solution: Unified portal with automated payroll',
      'Tech: Next.js, Python, AWS',
      'Result: Reduced payroll processing time by 80%'
    ],
  },
  {
    emoji: '🥗',
    title: 'NutriCare AI Platform',
    desc: 'An AI-driven nutrition and diet planning SaaS platform for healthcare professionals.',
    points: [
      'Problem: Inefficient manual diet planning',
      'Solution: AI-powered meal generation engine',
      'Tech: OpenAI API, React, Node.js',
      'Result: Scaled to 10k+ global active users'
    ],
  },
];

const metrics = [
  { num: '99.9%', label: 'Average Uptime SLA' },
  { num: '50+',   label: 'Global Projects Delivered' },
  { num: '100%',  label: 'Source Code Ownership' },
];

const WhyUs = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-us" className="section-wrapper">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">Case Studies</div>
          <h2 className="section-title">
            Featured Global{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            Real-world business problems solved through scalable technology, custom software engineering, and intelligent architecture.
          </p>
        </div>

        {/* 3-column cards */}
        <div className="why-grid">
          {caseStudies.map((r) => (
            <div key={r.title} className="why-card">
              <div className="why-icon-wrap" style={{ fontSize: '28px' }}>
                {r.emoji}
              </div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc" style={{ marginBottom: '20px' }}>{r.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {r.points.map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#5a6478' }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="7" cy="7" r="6.5" stroke="#bfdbfe"/>
                      <path d="M4 7l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dark metrics bar */}
        <div className="why-metrics">
          {metrics.map((m) => (
            <div key={m.label} className="why-metric">
              <div className="why-metric-num">{m.num}</div>
              <div className="why-metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA below metrics */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ fontSize: '16px', color: '#5a6478', marginBottom: '24px' }}>
            Ready to work with a team that treats your project like their own?
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-lg" onClick={() => scrollTo('contact')}>
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => scrollTo('saas')}>
              Explore Our SaaS Tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
