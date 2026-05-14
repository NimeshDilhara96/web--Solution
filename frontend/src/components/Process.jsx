import React from 'react';

const Process = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We deep-dive into your goals, audience, and competitive landscape.' },
    { num: '02', title: 'Strategy', desc: 'A tailored digital roadmap aligned to your business outcomes.' },
    { num: '03', title: 'Design', desc: 'High-fidelity designs crafted for both aesthetics and conversion.' },
    { num: '04', title: 'Build', desc: 'Clean, scalable code with rigorous QA and performance testing.' },
    { num: '05', title: 'Launch', desc: 'Seamless deployment with ongoing support and optimization.' },
  ];

  return (
    <section id="process-section">
      <div className="section-inner">
        <p className="section-label process-label">How We Work</p>
        <h2 className="section-title" style={{ color: '#fafaf9' }}>Our Process</h2>
        <div className="process-list">
          {steps.map((step, idx) => (
            <div key={idx} className={`process-step ${idx !== steps.length - 1 ? '' : ''}`} style={{ borderBottom: idx !== steps.length - 1 ? '1px solid #1e1e1e' : 'none' }}>
              <div className="process-num">{step.num}</div>
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
