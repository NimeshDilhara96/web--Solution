"use client";
import React from "react";
import Contact from "./contact";

const whyChooseUs = [
  {
    emoji: '🏆',
    type: 'Engineering Standard',
    title: 'World-Class Engineering',
    desc: 'Senior full-stack developers crafting clean, scalable architectures with Next.js, Node.js, Python, and cloud-native backends.',
    points: [
      'Top-tier production code with zero shortcuts',
      'Built to scale seamlessly to millions of users',
      'Strict automated testing & security standards'
    ],
  },
  {
    emoji: '🤝',
    type: 'Studio Partnership',
    title: 'True Founder Partnership',
    desc: "We don't just write code; we provide strategic guidance, acting as your dedicated fractional CTO and tech partner.",
    points: [
      'Direct communication with lead engineers',
      'Market validation & feature prioritization',
      'Long-term technical roadmap alignment'
    ],
  },
  {
    emoji: '⚡',
    type: 'Agile Delivery',
    title: 'Agile & Rapid Sprints',
    desc: 'No bureaucracy or black boxes. We work in weekly sprints with full visibility into milestones, commits, and progress.',
    points: [
      'Working software delivered every sprint',
      'Weekly demo calls & transparent roadmaps',
      'Fast 2-4 week MVP turnaround time'
    ],
  },
  {
    emoji: '🔒',
    type: 'Freedom & Control',
    title: '100% IP & Code Ownership',
    desc: 'From day one, you own all source code, databases, design assets, and cloud configurations with zero vendor lock-in.',
    points: [
      'Complete repository and account transfer',
      'Full architectural documentation included',
      'Zero royalties or licensing fees'
    ],
  },
];

const studioMetrics = [
  { num: '2-4 Wks', label: 'Average MVP Launch Time' },
  { num: '100%',   label: 'Client IP & Code Ownership' },
  { num: '99.9%',  label: 'Production Uptime SLA' },
  { num: '50+',    label: 'Global Startup Projects' },
];

const About = () => {
  return (
    <>
      <section className="section-wrapper-soft" style={{ paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* Header */}
          <div className="section-label">About MommentX</div>
          <h1 style={{ fontFamily: 'Syne', fontSize: '48px', fontWeight: 800, color: '#0a0d14', marginTop: '16px', marginBottom: '24px' }}>
            Founders Building for <span className="gradient-text">Founders</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#52525b', maxWidth: '640px', lineHeight: 1.6, marginBottom: '64px' }}>
            MommentX is an agile startup studio. We help ambitious founders and modern teams build fast, scalable products without the typical agency bloat.
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Card Emoji Header */}
                <div
                  style={{
                    width: '100%',
                    height: '140px',
                    background: '#f8fafc',
                    borderBottom: '1px solid #edf2f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '52px',
                  }}
                >
                  {item.emoji}
                </div>

                {/* Card Body */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#2563eb',
                      fontWeight: 700,
                      marginBottom: '8px',
                    }}
                  >
                    {item.type}
                  </div>
                  <h3 style={{ fontFamily: 'Syne', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#0a0d14' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#52525b', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, marginTop: 'auto' }}>
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                        <svg width="16" height="16" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                          <circle cx="7" cy="7" r="6.5" stroke="#bfdbfe" />
                          <path d="M4 7l2 2 4-4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics Bar (Portfolio Style) */}
          <div
            style={{
              marginTop: '80px',
              background: '#0a0d14',
              borderRadius: '16px',
              padding: '48px 32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              textAlign: 'center',
            }}
          >
            {studioMetrics.map((m, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', fontFamily: 'Syne', marginBottom: '8px' }}>
                  {m.num}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '15px', fontWeight: 500 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Behind MommentX / Founder Spotlight */}
          <div style={{ marginTop: '96px', marginBottom: '40px' }}>
            <div className="section-label">Behind MommentX</div>
            <h2 style={{ fontFamily: 'Syne', fontSize: '36px', fontWeight: 800, color: '#0a0d14', marginTop: '16px', marginBottom: '16px' }}>
              Meet the Founder & Lead Engineer
            </h2>
            <p style={{ fontSize: '17px', color: '#52525b', maxWidth: '600px', lineHeight: 1.6, marginBottom: '48px' }}>
              Built by a dedicated technologist passionate about helping early-stage founders bring software ideas to reality.
            </p>

            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center',
                gap: '36px',
                flexWrap: 'wrap',
                maxWidth: '850px',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://nimeshdilhara.vercel.app/assets/nimesh_dilhara_Kulasooriya_profe-CHbIPluU.jpeg"
                alt="Nimesh Dilhara Kulasooriya"
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #f1f5f9',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <div style={{ flex: 1, minWidth: '260px' }}>
                <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#2563eb', fontWeight: 700, marginBottom: '6px' }}>
                  Founder & Lead Engineer
                </div>
                <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 800, color: '#0a0d14', marginBottom: '8px' }}>
                  Nimesh Dilhara
                </h3>
                <p style={{ color: '#52525b', fontSize: '15px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Senior software engineer and startup enthusiast specializing in full-stack architecture, Next.js applications, SaaS platforms, and AI product development.
                </p>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <a
                    href="https://www.linkedin.com/in/nimeshdilhara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#2563eb',
                      textDecoration: 'none',
                    }}
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href="https://github.com/nimeshdilhara96"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#64748b',
                      textDecoration: 'none',
                    }}
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </>
  );
};

export default About;
