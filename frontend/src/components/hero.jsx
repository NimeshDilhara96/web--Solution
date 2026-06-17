import React from 'react';

/* ─── Design tokens (from source HTML) ─── */
const C = {
  ink:     '#15142B',
  mute:    '#6B7280',
  paper:   '#EEF0F4',
  white:   '#ffffff',
  v50:     '#F1EFFE',
  v100:    '#E4E0FD',
  v500:    '#5B4FE0',
  v600:    '#4D3FD6',
  v700:    '#4234B8',
};

const F = {
  display: "'Plus Jakarta Sans', sans-serif",
  body:    "'Inter', sans-serif",
};

/* ─── Marquee items ─── */
const MARQUEE = [
  'Full-Stack Development','AI Solutions','UI/UX Design',
  'Enterprise Systems','MERN Stack','Cloud Infrastructure',
  'SaaS Products','Scalable Architecture',
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
        {[1,2,3,4].map(i => <Star key={i} color={starColor} />)}
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 40px 96px' }}>

          {/* ════ HERO GRID ════ */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}>

            {/* ══ LEFT ══ */}
            <div style={{ animation: 'rise 0.8s ease-out both' }}>

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
                Build, Host, &amp; Sell<br />
                SaaS Tools with<br />
                Custom Domains.
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '0' }}>
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

            {/* ══ RIGHT — ORB + WINDOWS ══ */}
            <div style={{
              position: 'relative',
              margin: '0 auto',
              width: '100%',
              maxWidth: '560px',
              aspectRatio: '1 / 1',
              animation: 'rise 0.8s 0.15s ease-out both',
            }}>

              {/* ── Orb ── */}
              <div style={{
                position: 'absolute',
                top: '4%', left: '4%', right: '4%', bottom: '4%',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 38% 28%, #9B8CF5 0%, #6E5DEA 32%, #4634C2 62%, #2A2270 100%)',
                boxShadow: `
                  inset -20px -30px 60px rgba(0,0,0,0.35),
                  inset 20px 20px 50px rgba(255,255,255,0.15),
                  0 40px 80px -20px rgba(50,40,140,0.45)
                `,
              }} />

              {/* ── Decorative hand shapes ── */}
              <div style={{
                position: 'absolute', left: '2%', bottom: '2%',
                width: '34%', height: '20%',
                borderRadius: '50% 50% 45% 45%',
                transform: 'rotate(-8deg)',
                background: 'linear-gradient(160deg, #E9B98C 0%, #D9A06F 100%)',
                opacity: 0.95,
              }} />
              <div style={{
                position: 'absolute', right: '4%', bottom: '0%',
                width: '30%', height: '18%',
                borderRadius: '50% 50% 45% 45%',
                transform: 'rotate(6deg)',
                background: 'linear-gradient(160deg, #E9B98C 0%, #D9A06F 100%)',
                opacity: 0.95,
              }} />

              {/* ────────────────────────────────
                  BACK BROWSER WINDOW
              ──────────────────────────────── */}
              <div style={{
                position: 'absolute', left: '8%', top: '24%',
                width: '68%',
                background: C.white,
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 30px 60px -15px rgba(30,20,90,0.35)',
              }}>
                {/* Chrome bar */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 12px',
                  borderBottom: '1px solid rgba(0,0,0,0.05)',
                  background: '#F9FAFB',
                }}>
                  <div style={{ display: 'flex', gap: '5px', flexShrink: 0 }}>
                    {['#F87171','#FBBF24','#34D399'].map(c => (
                      <span key={c} style={{ width:'10px',height:'10px',borderRadius:'50%',background:c,display:'block' }}/>
                    ))}
                  </div>
                  <div style={{
                    flex: 1, background: C.white, border: '1px solid rgba(0,0,0,0.05)',
                    borderRadius: '6px', padding: '4px 10px',
                    fontSize: '10px', color: C.mute,
                    overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
                  }}>
                    https://mommentx.io/developers-hub/demo
                  </div>
                </div>

                {/* App body */}
                <div style={{ display: 'flex' }}>
                  {/* Sidebar */}
                  <div style={{
                    display: 'flex', flexDirection: 'column', gap: '12px',
                    alignItems: 'center', padding: '16px 10px',
                    borderRight: '1px solid rgba(0,0,0,0.05)',
                    background: 'rgba(249,250,251,0.6)',
                    flexShrink: 0,
                  }}>
                    {['#DDD6FE','#E5E7EB','#E5E7EB','#E5E7EB','#E5E7EB'].map((bg, i) => (
                      <span key={i} style={{ width:'16px',height:'16px',borderRadius:'4px',background:bg,display:'block' }}/>
                    ))}
                  </div>

                  {/* Main panel */}
                  <div style={{ flex: 1, padding: '14px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: C.ink, margin: '0 0 2px', fontFamily: F.display }}>MommentX Tools</p>
                    <p style={{ fontSize: '10.5px', color: C.mute, margin: '0 0 8px' }}>Hi, Adam! (Developer Hub)</p>

                    {/* Search */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)',
                      borderRadius: '6px', padding: '6px 8px', marginBottom: '12px',
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke={C.mute} strokeWidth="2"/>
                        <path d="M21 21l-4.3-4.3" stroke={C.mute} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontSize: '9.5px', color: 'rgba(107,114,128,0.7)' }}>Search</span>
                    </div>

                    {/* Tool grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <ToolGridCard name="Favicon Generator" domain="custom.favicon.com" badge="Beta" badgeBg="#EDE9FE" badgeColor="#5B21B6" stat="12.5k Uses" />
                      <ToolGridCard name="Image Compressor" domain="optimize.images.io" badge="Live" badgeBg="#D1FAE5" badgeColor="#065F46" stat="5.1m Processed" />
                      <ToolGridCard name="SEO Tool" domain="seo.analyser.com" badge="Beta" badgeBg="#FFEDD5" badgeColor="#9A3412" stat="250 Sites" fullWidth />
                    </div>
                  </div>
                </div>
              </div>

              {/* ────────────────────────────────
                  FRONT FLOATING PANEL
              ──────────────────────────────── */}
              <div style={{
                position: 'absolute', right: '0%', top: '16%',
                width: '44%',
                background: C.white,
                borderRadius: '16px',
                padding: '14px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 25px 50px -12px rgba(30,20,90,0.4)',
              }}>
                {/* Panel header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16M4 12h16M4 18h16" stroke="rgba(21,20,43,0.7)" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: C.ink, fontFamily: F.display }}>MommentX Tools</span>
                  </div>
                  <span style={{ width:'20px',height:'20px',borderRadius:'50%',background:'#E5E7EB',display:'block' }}/>
                </div>

                {/* Greeting */}
                <p style={{ fontSize: '10px', fontWeight: 600, margin: '0 0 1px', color: C.ink }}>
                  Hi, <span style={{ fontWeight: 700 }}>Adam!</span>
                </p>
                <p style={{ fontSize: '9px', color: C.mute, margin: '0 0 10px' }}>(Developer Hub)</p>

                {/* Search */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: '6px', padding: '6px 8px', marginBottom: '12px',
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke={C.mute} strokeWidth="2"/>
                    <path d="M21 21l-4.3-4.3" stroke={C.mute} strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span style={{ fontSize: '9px', color: 'rgba(107,114,128,0.7)' }}>Search</span>
                </div>

                {/* Tool list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <ToolRow name="Favicon Generator" domain="custom.favicon.com" badge="Beta" badgeBg="#EDE9FE" badgeColor="#5B21B6" stat="12.5k Uses" divider />
                  <ToolRow name="Image Compressor" domain="optimize.images.io" badge="Live" badgeBg="#D1FAE5" badgeColor="#065F46" stat="5.1m Processed" divider />
                  <ToolRow name="SEO Tool" domain="seo.analyser.com" badge="Beta" badgeBg="#FFEDD5" badgeColor="#9A3412" stat="250 Sites" divider={false} />
                </div>
              </div>
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
