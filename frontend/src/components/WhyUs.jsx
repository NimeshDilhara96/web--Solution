import React from 'react';

const reasons = [
  {
    emoji: '🏗️',
    title: 'Clean Architecture',
    desc: 'Every project follows SOLID principles, modular design patterns, and clean separation of concerns. Code that future teams can actually maintain and extend.',
    points: ['SOLID & DRY principles', 'Modular, testable code', 'Comprehensive documentation'],
  },
  {
    emoji: '📈',
    title: 'Scalable Solutions',
    desc: 'We build for where you\'re going, not just where you are. Our systems handle load spikes, evolving requirements, and growth from MVP to enterprise — without rewrites.',
    points: ['Horizontal & vertical scaling', 'Microservices architecture', 'Performance-first mindset'],
  },
  {
    emoji: '⚡',
    title: 'Modern Tech Stacks',
    desc: 'We invest in proven, cutting-edge technologies. React, Node.js, Python, AWS, Docker, and Kubernetes — chosen for your project\'s needs, not familiarity.',
    points: ['Latest proven frameworks', 'Cloud-native deployments', 'DevOps & CI/CD pipelines'],
  },
];

const metrics = [
  { num: '99.9%', label: 'Average Uptime SLA' },
  { num: '50+',   label: 'Projects Delivered' },
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
          <div className="section-label">Why MommentX</div>
          <h2 className="section-title">
            Why Leading Teams{' '}
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="section-desc">
            High-paying clients don't just buy code — they buy reliability, clarity, and
            a team they can trust to get it right the first time.
          </p>
        </div>

        {/* 3-column cards */}
        <div className="why-grid">
          {reasons.map((r) => (
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
