import React from 'react';
import Contact from '../../components/Contact';

export const metadata = {
  title: "Startup Case Studies & MVPs | MommentX",
  description: "Explore our recent MVP builds, SaaS platforms, and AI integrations. See how we help startups scale fast with modern technology.",
  alternates: {
    canonical: "https://mommentx.space/portfolio",
  },
  openGraph: {
    title: "Startup Portfolio & Case Studies | MommentX",
    description: "Discover our latest MVP and SaaS development success stories.",
    url: "https://mommentx.space/portfolio",
  }
};

const caseStudies = [
  {
    emoji: '📈',
    type: 'SaaS Platform',
    title: 'OrderFlow Growth Engine',
    desc: 'From an idea to a fully functional inventory automation SaaS. Built to handle rapid scale and multi-channel synchronization.',
    points: [
      'Goal: Validate a complex B2B SaaS idea quickly',
      'Solution: Next.js MVP with scalable PostgreSQL DB',
      'Tech: React, Node.js, Stripe, AWS',
      'Result: Secured $150k seed funding post-launch'
    ],
  },
  {
    emoji: '🚀',
    type: 'MVP Development',
    title: 'HR Connect MVP',
    desc: 'A modern, lightweight HR portal for remote startups to manage onboarding and payroll without enterprise bloat.',
    points: [
      'Goal: Launch a beautiful, fast MVP in 6 weeks',
      'Solution: Serverless architecture for rapid deployment',
      'Tech: Next.js, Firebase, Tailwind CSS',
      'Result: Acquired 500+ beta users in month one'
    ],
  },
  {
    emoji: '🤖',
    type: 'AI Integration',
    title: 'NutriCare AI Co-Pilot',
    desc: 'Integrated a custom LLM wrapper into an existing healthcare app to automate diet generation for nutritionists.',
    points: [
      'Goal: Reduce manual diet planning time by 80%',
      'Solution: Fine-tuned OpenAI prompt chaining',
      'Tech: Python, OpenAI API, React',
      'Result: Scaled to 10k+ global active users'
    ],
  },
];

const metrics = [
  { num: '99.9%', label: 'Average Uptime SLA' },
  { num: '50+',   label: 'Global Projects Delivered' },
  { num: '100%',  label: 'Source Code Ownership' },
];

const PortfolioPage = () => {
  return (
    <>
      <section className="section-wrapper-soft" style={{ paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label">Case Studies</div>
          <h1 style={{ fontFamily: 'Syne', fontSize: '48px', fontWeight: 800, color: '#0a0d14', marginTop: '16px', marginBottom: '24px' }}>
            Featured Global <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#52525b', maxWidth: '600px', lineHeight: 1.6, marginBottom: '64px' }}>
            Real-world business problems solved through scalable technology, custom software engineering, and intelligent architecture.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {caseStudies.map((r, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                <div style={{ width: '100%', height: '180px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '64px' }}>
                  {r.emoji}
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#2563eb', fontWeight: 700, marginBottom: '8px' }}>{r.type}</div>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{r.title}</h3>
                  <p style={{ color: '#52525b', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {r.desc}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
                    {r.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <circle cx="7" cy="7" r="6.5" stroke="#bfdbfe"/>
                          <path d="M4 7l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics bar */}
          <div style={{ 
            marginTop: '80px', 
            background: '#0a0d14', 
            borderRadius: '16px', 
            padding: '48px 32px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '32px',
            textAlign: 'center'
          }}>
            {metrics.map((m, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', fontFamily: 'Syne', marginBottom: '8px' }}>{m.num}</div>
                <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default PortfolioPage;
