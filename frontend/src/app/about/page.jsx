"use client";
import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* ── Hero Section ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="section-label">About MommentX</div>
          <h1 className="about-title">
            Engineering the <span className="gradient-text">Future of Digital</span>
          </h1>
          <p className="about-desc">
            We are a global software development agency dedicated to building high-performance, scalable, and innovative digital products. From startups to enterprises, we transform complex challenges into elegant solutions.
          </p>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="why-choose-section">
        <div className="why-choose-inner">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <p className="section-desc text-center" style={{ maxWidth: "600px", margin: "0 auto 48px" }}>
            Partnering with MommentX means getting more than just code. You get a dedicated technical partner committed to your success.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3 className="why-title">World-Class Expertise</h3>
              <p className="why-desc">
                Our team consists of top-tier developers, designers, and strategists. We leverage industry best practices and the latest technologies to deliver unparalleled quality.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3 className="why-title">True Partnership</h3>
              <p className="why-desc">
                We don&apos;t just take orders; we provide strategic guidance. We immerse ourselves in your business goals to ensure the software we build actually drives growth.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">⏱️</div>
              <h3 className="why-title">Agile & Transparent</h3>
              <p className="why-desc">
                No hidden fees, no black boxes. Our agile development process ensures you have full visibility into every sprint, milestone, and deliverable.
              </p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔒</div>
              <h3 className="why-title">Uncompromising Quality</h3>
              <p className="why-desc">
                From rigorous automated testing to stringent code reviews and security audits, we ensure your product is robust, secure, and ready to scale from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission Section ── */}
      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-content">
            <div className="section-label" style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}>Our Mission</div>
            <h2 className="mission-title">To empower businesses through flawless technology.</h2>
            <p className="mission-desc">
              At MommentX, we believe that great software should be invisible—it should just work. Our mission is to bridge the gap between complex business requirements and seamless user experiences, enabling our clients to dominate their respective markets.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Ready to start your digital transformation?</h2>
          <Link href="/#contact" className="btn btn-primary" style={{ marginTop: "24px" }}>
            Contact Our Team
          </Link>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          background: #ffffff;
          padding-top: 100px;
        }
        .about-hero {
          padding: 80px 24px 64px;
          text-align: center;
        }
        .about-hero-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .section-label {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 99px;
          background: rgba(124, 58, 237, 0.1);
          color: var(--color-accent);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .about-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-text);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .about-desc {
          font-size: 18px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        .text-center {
          text-align: center;
        }
        
        /* ── Why Choose Us ── */
        .why-choose-section {
          padding: 80px 24px;
          background: var(--color-bg-soft);
          border-top: 1px solid var(--color-border-soft);
        }
        .why-choose-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--color-text);
          margin-bottom: 16px;
        }
        .section-desc {
          font-size: 16px;
          color: var(--color-text-hint);
          line-height: 1.6;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        .why-card {
          background: #ffffff;
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.05);
        }
        .why-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }
        .why-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 12px;
        }
        .why-desc {
          font-size: 14.5px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        /* ── Mission ── */
        .mission-section {
          padding: 100px 24px;
          background: var(--color-text);
          color: #ffffff;
          text-align: center;
        }
        .mission-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .mission-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          margin: 24px 0;
          line-height: 1.2;
        }
        .mission-desc {
          font-size: 18px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
        }

        /* ── CTA ── */
        .about-cta {
          padding: 80px 24px;
          text-align: center;
          border-top: 1px solid var(--color-border-soft);
        }
        .about-cta-inner h2 {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
