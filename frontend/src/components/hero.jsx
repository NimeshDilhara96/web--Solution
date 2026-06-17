import React from 'react';
import heroImage from '../assets/hero.png';

/* ─── Design tokens (from source HTML) ─── */
const C = {
  ink: '#15142B',
  mute: '#6B7280',
  paper: '#EEF0F4',
  white: '#ffffff',
  v50: '#F1EFFE',
  v100: '#E4E0FD',
  v500: '#5B4FE0',
  v600: '#4D3FD6',
  v700: '#4234B8',
};

const F = {
  display: "'Plus Jakarta Sans', sans-serif",
  body: "'Inter', sans-serif",
};

/* ─── Marquee items ─── */
const MARQUEE = [
  'Full-Stack Development', 'AI Solutions', 'UI/UX Design',
  'Enterprise Systems', 'MERN Stack', 'Cloud Infrastructure',
  'SaaS Products', 'Scalable Architecture',
];

/* ─── Star SVG ─── */
const Star = ({ color }) => (
  <svg viewBox="0 0 20 20" width="14" height="14">
    <path
      d="M10 1l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L10 14.9l-5.6 3.1 1.4-6.2L1 7.5l6.4-.6L10 1z"
      fill={color}
    />
  </svg>
);

/* ─── Rating card ─── */
const RatingCard = ({ score, label, platform, starColor, halfStarColor }) => (
  <div style={{
    background: C.white, borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    padding: '14px 16px',
    display: 'flex', alignItems: 'center', gap: '14px',
  }}>
    <div style={{
      background: '#F3F4F6', borderRadius: '12px',
      padding: '8px 12px',
      fontFamily: F.display, fontWeight: 800,
      fontSize: '20px', lineHeight: 1, color: C.ink,
    }}>{score}</div>
    <div>
      <p style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.3, color: C.ink, margin: 0 }}>
        {label}<br />{platform}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginTop: '6px' }}>
        {[1, 2, 3, 4].map(i => <Star key={i} color={starColor} />)}
        <Star color={halfStarColor} />
      </div>
    </div>
  </div>
);

/* ─── Tool row inside browser / float panel ─── */
const ToolRow = ({ name, domain, badge, badgeBg, badgeColor, stat, divider }) => (
  <>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: '10px', fontWeight: 700, margin: 0, color: C.ink }}>{name}</p>
        <span style={{
          fontSize: '7.5px', fontWeight: 600,
          background: badgeBg, color: badgeColor,
          borderRadius: '4px', padding: '1px 6px',
        }}>{badge}</span>
      </div>
      <p style={{ fontSize: '8.5px', color: C.mute, margin: '2px 0 0' }}>{domain}</p>
      <p style={{ fontSize: '8.5px', color: 'rgba(107,114,128,0.8)', margin: '4px 0 0' }}>↗ {stat}</p>
      <div style={{
        marginTop: '6px', textAlign: 'center',
        fontSize: '8.5px', fontWeight: 600, color: C.ink,
        background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)',
        borderRadius: '6px', padding: '4px 0',
      }}>Manage Now</div>
    </div>
    {divider && <div style={{ height: '1px', background: 'rgba(0,0,0,0.05)', margin: '2px 0' }} />}
  </>
);

/* ─── Tool card (2-col grid inside browser) ─── */
const ToolGridCard = ({ name, domain, badge, badgeBg, badgeColor, stat, fullWidth }) => (
  <div style={{
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '8px', padding: '8px',
    gridColumn: fullWidth ? 'span 2' : 'span 1',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
      <p style={{ fontSize: '10px', fontWeight: 700, margin: 0, color: C.ink }}>{name}</p>
      <span style={{
        fontSize: '7.5px', fontWeight: 600,
        background: badgeBg, color: badgeColor,
        borderRadius: '4px', padding: '1px 4px',
      }}>{badge}</span>
    </div>
    <p style={{ fontSize: '8.5px', color: C.mute, margin: '2px 0' }}>{domain}</p>
    <p style={{ fontSize: '8.5px', color: 'rgba(107,114,128,0.8)', margin: '4px 0' }}>↗ {stat}</p>
    <div style={{
      textAlign: 'center', fontSize: '8.5px', fontWeight: 600, color: C.ink,
      background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)',
      borderRadius: '6px', padding: '4px 0',
      width: fullWidth ? '50%' : '100%',
    }}>Manage Now</div>
  </div>
);

/* ════════════════════════════════════════════
   HERO COMPONENT
════════════════════════════════════════════ */
const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" style={{ background: C.paper, fontFamily: F.body, WebkitFontSmoothing: 'antialiased' }}>
        <div className="hero-container-inner" style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 40px 96px' }}>

          {/* ════ HERO GRID ════ */}
          <div className="hero-main-grid">

            {/* ══ LEFT ══ */}
            <div className="hero-left-col" style={{ animation: 'rise 0.8s ease-out both' }}>

              {/* Headline */}
              <h1 style={{
                fontFamily: F.display,
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.06,
                fontSize: 'clamp(36px, 4.5vw, 54px)',
                color: C.ink,
                margin: '0 0 24px',
              }}>
                Crafting Next-Gen<br />
                Software &amp; AI<br />
                Solutions.
              </h1>

              {/* Body */}
              <p style={{
                color: C.mute, fontSize: '17px', lineHeight: 1.65,
                maxWidth: '420px', margin: '0 0 36px',
              }}>
                MommentX provides professional, custom-domain tech tools
                and scalable SaaS platforms. We build trusted digital solutions
                to empower your business from vision to market.
              </p>

              {/* Rating cards */}
              <div className="hero-rating-cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '0' }}>
                <RatingCard
                  score="4.9" label="Review" platform="on Product Hunt"
                  starColor="#FBBF24" halfStarColor="rgba(251,191,36,0.5)"
                />
                <RatingCard
                  score="4.8" label="Review" platform="on Trustpilot"
                  starColor="#10B981" halfStarColor="rgba(16,185,129,0.5)"
                />
              </div>
            </div>

            {/* ══ RIGHT — HERO GRAPHIC ══ */}
            <div style={{
              position: 'relative',
              margin: '0 auto',
              width: '100%',
              maxWidth: '600px',
              animation: 'rise 0.8s 0.15s ease-out both',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img
                src={heroImage}
                alt="MommentX Platform"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x600/e4e0fd/4234b8?text=Place+hero-graphic.png\\nin+public+folder';
                }}
              />
            </div>
            {/* end right */}
          </div>

          {/* ════ LOGO CLOUD ════ */}
          <div style={{
            marginTop: '96px',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center',
            gap: '24px 48px',
            opacity: 0.7,
          }}>
            {[
              { text: 'StackExchange', sup: '⤴' },
              { text: 'GENERAL ASSEMBLY', prefix: true },
              { text: 'Lyft', italic: true },
              { text: 'Climb' },
              { text: '⚑ Fountain' },
              { text: '⌁ instacart', lower: true },
            ].map(({ text, sup, prefix, italic, lower }) => (
              <span key={text} style={{
                fontFamily: F.display,
                fontWeight: prefix ? 800 : 700,
                fontSize: prefix ? '15px' : '17px',
                display: 'flex', alignItems: 'center', gap: '6px',
                fontStyle: italic ? 'italic' : 'normal',
                textTransform: lower ? 'lowercase' : 'none',
                color: C.ink,
              }}>
                {prefix && (
                  <span style={{
                    width: '20px', height: '20px', borderRadius: '50%',
                    background: 'rgba(21,20,43,0.8)',
                    display: 'inline-block',
                  }} />
                )}
                {text}
                {sup && <sup style={{ fontSize: '9px' }}>{sup}</sup>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE BAND ─── */}
      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map(rep => (
            <div key={rep} className="marquee-item">
              {MARQUEE.map((item, i) => (
                <React.Fragment key={i}>
                  <span className={`marquee-text ${i % 2 === 1 ? 'dim' : ''}`}>{item}</span>
                  <span className="marquee-dot" />
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
