import React from 'react';

const services = [
  {
    num: '01',
    emoji: '🧱',
    title: 'Full-Stack Development (MERN)',
    desc: 'End-to-end web applications built on MongoDB, Express, React, and Node.js. Clean architecture, scalable codebases, and production-ready deployments.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
    color: '#eff6ff',
    iconColor: '#2563eb',
  },
  {
    num: '02',
    emoji: '🤖',
    title: 'Artificial Intelligence Solutions',
    desc: 'Practical AI integrations that create real business value — from intelligent automation and NLP to custom ML models and computer vision pipelines.',
    tags: ['Python', 'TensorFlow', 'OpenAI API', 'LangChain'],
    color: '#f5f3ff',
    iconColor: '#7c3aed',
  },
  {
    num: '03',
    emoji: '✦',
    title: 'UI/UX Design',
    desc: 'User-centered design that converts. We craft interfaces that balance stunning aesthetics with intuitive flows — from wireframes to polished prototypes.',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'Research'],
    color: '#fff7ed',
    iconColor: '#ea580c',
  },
  {
    num: '04',
    emoji: '⚙️',
    title: 'Custom Enterprise Systems',
    desc: 'Bespoke ERP, CRM, and workflow automation platforms built for your operations. We replace fragile manual processes with robust, integrated systems.',
    tags: ['ERP', 'CRM', 'Automation', 'Microservices', 'Docker'],
    color: '#f0fdf4',
    iconColor: '#059669',
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-wrapper">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-title">
            Services Built for{' '}
            <span className="gradient-text">Real Impact</span>
          </h2>
          <p className="section-desc">
            From concept to production, we provide end-to-end software solutions
            engineered to help ambitious businesses compete and win in the digital age.
          </p>
        </div>

        {/* Grid */}
        <div className="expertise-grid">
          {services.map((s) => (
            <div key={s.num} className="expertise-card">
              <span className="expertise-card-num">{s.num}</span>
              <div
                className="expertise-icon-wrap"
                style={{ background: s.color, fontSize: '26px' }}
              >
                {s.emoji}
              </div>
              <h3 className="expertise-title">{s.title}</h3>
              <p className="expertise-desc">{s.desc}</p>
              <div className="expertise-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
