import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery & Scope",
    desc: "We dive deep into your startup idea, validate assumptions, and define a razor-sharp MVP scope to avoid wasted dev time."
  },
  {
    num: "02",
    title: "UI/UX Prototyping",
    desc: "We design a high-fidelity Figma prototype so you can see exactly how the product works before we write a single line of code."
  },
  {
    num: "03",
    title: "Agile Build",
    desc: "We build in 2-week sprints using modern tech like Next.js and Firebase, giving you full transparency and regular testing builds."
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "We deploy your product, set up analytics, and hand over the keys. We stick around to help you iterate based on real user feedback."
  }
];

const Process = () => {
  return (
    <section className="section-wrapper" style={{ background: '#0a0d14', color: '#ffffff' }}>
      <div className="section-inner">
        <div className="section-head">
          <div className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}>How We Work</div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Built for <span className="gradient-text">Speed & Scale</span>
          </h2>
          <p className="section-desc" style={{ color: '#9ba3b4' }}>
            A proven, no-BS engineering process designed to get your product to market fast.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '32px',
          marginTop: '48px' 
        }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ position: 'relative', padding: '24px', background: '#111827', borderRadius: '16px', border: '1px solid #1f2937' }}>
              <div style={{ fontSize: '48px', fontFamily: 'Syne', fontWeight: 800, color: '#374151', position: 'absolute', top: '16px', right: '24px', lineHeight: 1 }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '20px', fontWeight: 700, marginBottom: '12px', marginTop: '24px', position: 'relative', zIndex: 1 }}>
                {step.title}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '14.5px', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
