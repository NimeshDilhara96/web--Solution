import React from 'react';
import Contact from '../../components/contact';

export const metadata = {
  title: "Startup Services: MVP & SaaS Development | MommentX",
  description: "Explore our startup-focused software development services. We build scalable MVPs, SaaS platforms, and AI integrations for ambitious founders.",
  alternates: {
    canonical: "https://mommentx.space/services",
  },
  openGraph: {
    title: "Startup Services & MVP Development | MommentX",
    description: "End-to-end MVP, SaaS, and AI development services for fast-moving startups.",
    url: "https://mommentx.space/services",
  }
};

const ServicesPage = () => {
  return (
    <>
      <section className="section-wrapper-soft" style={{ paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div className="section-label">Our Services</div>
          <h1 style={{ fontFamily: 'Syne', fontSize: '48px', fontWeight: 800, color: '#0a0d14', marginTop: '16px', marginBottom: '24px' }}>
            We Build Software<br />That Scales Businesses
          </h1>
          <p style={{ fontSize: '18px', color: '#52525b', maxWidth: '600px', lineHeight: 1.6, marginBottom: '64px' }}>
            From high-performance web applications to complex enterprise systems and AI integrations, our expert team delivers tailored solutions.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Service 1 */}
            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🚀</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>MVP Development</h3>
              <p style={{ color: '#52525b', marginBottom: '24px', lineHeight: 1.6 }}>We build your Minimum Viable Product fast. Perfect for early-stage founders looking to validate ideas and secure funding without wasting months.</p>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>Startup Starter: $499+</div>
            </div>

            {/* Service 2 */}
            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🧱</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>SaaS Platform Engineering</h3>
              <p style={{ color: '#52525b', marginBottom: '24px', lineHeight: 1.6 }}>End-to-end SaaS products and web platforms designed to handle growth. We handle authentication, payments, databases, and core business logic.</p>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>Scale Package: $899+</div>
            </div>

            {/* Service 3 */}
            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>🤖</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>AI Prototyping & Integrations</h3>
              <p style={{ color: '#52525b', marginBottom: '24px', lineHeight: 1.6 }}>Embed AI into your existing product or build an AI-first startup. From custom OpenAI wrappers to intelligent automation workflows.</p>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>Smart Starter: $299+</div>
            </div>

            {/* Service 4 */}
            <div style={{ background: '#f8fafc', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>⚡</div>
              <h3 style={{ fontFamily: 'Syne', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>High-Performance Web Apps</h3>
              <p style={{ color: '#52525b', marginBottom: '24px', lineHeight: 1.6 }}>Lightning-fast, SEO-optimized marketing sites and web applications. Convert visitors into users with premium UI and zero-lag performance.</p>
              <div style={{ fontWeight: 600, color: '#1e40af' }}>Web Starter: $199+</div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ServicesPage;
