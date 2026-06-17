import React from 'react';

const saasProducts = [
  {
    emoji: '🎨',
    name: 'FaviconForge',
    tagline: 'AI-powered Favicon Generator',
    desc: 'Generate pixel-perfect favicons in every format from a single image or text prompt. Export SVG, PNG, ICO in seconds.',
    status: 'live',
    statusLabel: 'Live',
    color: '#eff6ff',
    href: '#',
  },
  {
    emoji: '🗜️',
    name: 'PixelShrink',
    tagline: 'Smart Image Compressor',
    desc: 'Compress JPEG, PNG, and WebP files up to 90% without visible quality loss. Batch processing, drag-and-drop simple.',
    status: 'live',
    statusLabel: 'Live',
    color: '#f0fdf4',
    href: '#',
  },
  {
    emoji: '📋',
    name: 'FormCraft',
    tagline: 'Drag & Drop Form Builder',
    desc: 'Create embeddable forms with conditional logic, file uploads, and analytics in minutes — no code needed.',
    status: 'beta',
    statusLabel: 'Beta',
    color: '#fefce8',
    href: '#',
  },
  {
    emoji: '🚀',
    name: 'DeployPilot',
    tagline: 'One-Click Deployment Manager',
    desc: 'Connect your Git repo and deploy to any cloud provider in one click. Auto-scaling, rollbacks, and uptime monitoring included.',
    status: 'beta',
    statusLabel: 'Beta',
    color: '#f5f3ff',
    href: '#',
  },
  {
    emoji: '📸',
    name: 'CodeSnap',
    tagline: 'Beautiful Code Screenshots',
    desc: 'Turn your code snippets into stunning, shareable images with syntax highlighting, themes, and custom backgrounds.',
    status: 'live',
    statusLabel: 'Live',
    color: '#fff7ed',
    href: '#',
  },
  {
    emoji: '🔗',
    name: 'LinkVault',
    tagline: 'URL Shortener & Analytics',
    desc: 'Shorten, brand, and track every link. Get real-time click analytics, geo data, and QR code generation built-in.',
    status: 'soon',
    statusLabel: 'Coming Soon',
    color: '#fdf2f8',
    href: '#',
  },
];

const statusClass = {
  live: 'badge-live',
  beta: 'badge-beta',
  soon: 'badge-soon',
};

const SaasEcosystem = () => {
  return (
    <section id="saas" className="section-wrapper-soft">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">Our SaaS Ecosystem</div>
          <h2 className="section-title">
            Built In-House.{' '}
            <span className="gradient-text">Used Worldwide.</span>
          </h2>
          <p className="section-desc">
            Beyond client work, we build our own suite of developer and productivity tools.
            Thoughtfully crafted, obsessively refined — and ready for you to try today.
          </p>
        </div>

        {/* Cards grid */}
        <div className="saas-grid">
          {saasProducts.map((product) => (
            <div key={product.name} className="saas-card">
              {/* Icon */}
              <div
                className="saas-card-icon"
                style={{ background: product.color, fontSize: '24px' }}
              >
                {product.emoji}
              </div>

              {/* Header row */}
              <div className="saas-card-header">
                <h3 className="saas-card-name">{product.name}</h3>
                <span className={`badge ${statusClass[product.status]}`}>
                  {product.statusLabel}
                </span>
              </div>

              {/* Tagline */}
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#9ba3b4', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '12px' }}>
                {product.tagline}
              </p>

              {/* Description */}
              <p className="saas-card-desc">{product.desc}</p>

              {/* Footer */}
              <div className="saas-card-footer">
                <button className="saas-try-btn" disabled={product.status === 'soon'} style={{ opacity: product.status === 'soon' ? 0.45 : 1, cursor: product.status === 'soon' ? 'not-allowed' : 'pointer' }}>
                  {product.status === 'soon' ? 'Coming Soon' : 'Try Now'}
                  {product.status !== 'soon' && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaasEcosystem;
