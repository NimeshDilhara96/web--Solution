import React from 'react';

const About = () => {
  const team = [
    { initials: 'KS', name: 'Kavindu S.', role: 'Founder & Lead Developer', color: '#0f172a' },
    { initials: 'NP', name: 'Nimali P.', role: 'UI/UX Designer', color: '#1e1b4b' },
    { initials: 'AR', name: 'Ashan R.', role: 'Backend Engineer', color: '#052e16' },
  ];

  const values = [
    'Quality over quantity',
    'Transparent communication',
    'Deadline committed',
    'ROI focused',
  ];

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div className="about-inner">
        <div>
          <p className="section-label">About MommentX</p>
          <h2 className="about-title">
            A Team That<br/>
            Cares About<br/>
            <em>Your Growth</em>
          </h2>
          <p className="about-p">MommentX was founded with a clear mission: to help businesses of all sizes unlock their potential through thoughtful software solutions. We're not just a development shop - we're your long-term digital partner.</p>
          <p className="about-p">
            From startups launching their first MVP to established companies modernizing their digital infrastructure, we bring the same commitment to excellence to every engagement.</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Let's Talk</button>
        </div>

        <div>
          <p className="team-label">The Team</p>
          <div className="team-grid">
            {team.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-avatar" style={{ background: member.color }}>{member.initials}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            ))}
          </div>
          <div className="values-card">
            <div className="values-title">Our Values</div>
            <div className="values-list">
              {values.map((value, idx) => (
                <div key={idx} className="values-item">
                  <span>✓</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
