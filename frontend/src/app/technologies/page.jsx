"use client";
import React from "react";
import Link from "next/link";

const techCategories = [
  {
    title: "Frontend Engineering",
    description: "Lightning-fast, accessible, and responsive user interfaces.",
    skills: ["React.js", "Next.js", "Vue.js", "Tailwind CSS", "TypeScript", "Figma"],
    icon: "🎨"
  },
  {
    title: "Backend & API",
    description: "Reliable, scalable, and secure backend architectures.",
    skills: ["Node.js", "Python", "NestJS", "Express", "GraphQL", "REST APIs"],
    icon: "⚙️"
  },
  {
    title: "Database & Cloud",
    description: "High-availability databases and serverless cloud infrastructure.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Vercel"],
    icon: "☁️"
  },
  {
    title: "Mobile Development",
    description: "Native-like cross-platform mobile experiences.",
    skills: ["React Native", "Expo", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    icon: "📱"
  }
];

export default function TechnologiesPage() {
  return (
    <div className="tech-page">
      {/* ── Hero Section ── */}
      <section className="tech-hero">
        <div className="tech-hero-inner">
          <div className="section-label">Expertise & Technologies</div>
          <h1 className="tech-title">
            Built on <span className="gradient-text">Reliable, Scalable & Secure</span> Technologies.
          </h1>
          <p className="tech-desc">
            We don&apos;t just write code; we engineer solutions. By utilizing the modern web and mobile tech stack, we ensure your applications can scale to millions of users while maintaining enterprise-grade security and uncompromising reliability.
          </p>
        </div>
      </section>

      {/* ── Core Values Section ── */}
      <section className="tech-values-section">
        <div className="tech-values-inner">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3 className="value-title">Secure by Design</h3>
              <p className="value-desc">
                Security is not an afterthought. We implement robust authentication, data encryption at rest and in transit, and follow OWASP best practices to protect your data.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3 className="value-title">Infinitely Scalable</h3>
              <p className="value-desc">
                From monolithic MVCs to serverless microservices, we architect applications that seamlessly scale up during traffic spikes without breaking a sweat.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3 className="value-title">Rock-Solid Reliability</h3>
              <p className="value-desc">
                Downtime is expensive. We employ comprehensive automated testing, CI/CD pipelines, and multi-region cloud deployments for 99.99% uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stack Section ── */}
      <section className="tech-stack-section">
        <div className="tech-stack-inner">
          <h2 className="section-title text-center">Our Technology Stack</h2>
          <p className="section-desc text-center" style={{ maxWidth: "600px", margin: "0 auto 48px" }}>
            We continuously adapt to the evolving technological landscape, mastering the tools that provide the highest value to our clients.
          </p>

          <div className="stack-grid">
            {techCategories.map((category, idx) => (
              <div key={idx} className="stack-card">
                <div className="stack-card-header">
                  <span className="stack-icon">{category.icon}</span>
                  <h3 className="stack-title">{category.title}</h3>
                </div>
                <p className="stack-desc">{category.description}</p>
                <div className="stack-tags">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="stack-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="tech-cta">
        <div className="tech-cta-inner">
          <h2>Ready to build something amazing?</h2>
          <p>Let&apos;s discuss the perfect tech stack for your next big project.</p>
          <Link href="/#contact" className="btn btn-primary" style={{ marginTop: "24px" }}>
            Start a Project
          </Link>
        </div>
      </section>

      <style jsx>{`
        .tech-page {
          background: #ffffff;
          padding-top: 100px; /* Offset for navbar */
        }
        .tech-hero {
          padding: 80px 24px 64px;
          text-align: center;
          background: linear-gradient(135deg, #f8f9fb 0%, #f0f2f8 100%);
          border-bottom: 1px solid var(--color-border-soft);
        }
        .tech-hero-inner {
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
        .tech-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--color-text);
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .tech-desc {
          font-size: 18px;
          color: var(--color-text-muted);
          line-height: 1.7;
        }
        .tech-values-section {
          padding: 80px 24px;
        }
        .tech-values-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
        }
        .value-card {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s;
        }
        .value-card:hover {
          transform: translateY(-4px);
        }
        .value-icon {
          font-size: 32px;
          margin-bottom: 20px;
        }
        .value-title {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: 12px;
        }
        .value-desc {
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .tech-stack-section {
          padding: 80px 24px 100px;
          background: var(--color-bg-soft);
          border-top: 1px solid var(--color-border-soft);
        }
        .tech-stack-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .text-center {
          text-align: center;
        }
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
        }
        .stack-card {
          background: #ffffff;
          padding: 32px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
        }
        .stack-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .stack-icon {
          font-size: 24px;
        }
        .stack-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 700;
          color: var(--color-text);
          margin: 0;
        }
        .stack-desc {
          font-size: 14.5px;
          color: var(--color-text-hint);
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .stack-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .stack-tag {
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          background: var(--color-bg-soft);
          color: var(--color-text-muted);
          font-size: 13px;
          font-weight: 600;
          border: 1px solid var(--color-border-soft);
        }
        .tech-cta {
          padding: 80px 24px;
          background: var(--color-text);
          color: #ffffff;
          text-align: center;
        }
        .tech-cta-inner h2 {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .tech-cta-inner p {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }
        @media (max-width: 768px) {
          .stack-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
