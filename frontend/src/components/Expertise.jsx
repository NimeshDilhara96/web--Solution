import React from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    emoji: "🚀",
    title: "MVP Development",
    price: "Startup Starter: $499+",
    desc: "We build your Minimum Viable Product fast. Perfect for early-stage founders looking to validate ideas and secure funding without wasting months.",
    tags: ["React", "Next.js", "Firebase", "Prototyping", "Speed"],
    color: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    num: "02",
    emoji: "🧱",
    title: "SaaS Platform Engineering",
    price: "Scale Package: $899+",
    desc: "End-to-end SaaS products and web platforms designed to handle growth. We handle authentication, payments, databases, and core business logic.",
    tags: ["Node.js", "Stripe", "PostgreSQL", "Cloud", "Architecture"],
    color: "#f5f3ff",
    iconColor: "#7c3aed",
  },
  {
    num: "03",
    emoji: "🤖",
    title: "AI Prototyping & Integrations",
    price: "Smart Starter: $299+",
    desc: "Embed AI into your existing product or build an AI-first startup. From custom OpenAI wrappers to intelligent automation workflows.",
    tags: ["OpenAI", "Python", "Chatbots", "LLMs", "Automation"],
    color: "#fdf4ff",
    iconColor: "#d946ef",
  },
  {
    num: "04",
    emoji: "⚡",
    title: "High-Performance Web Apps",
    price: "Web Starter: $199+",
    desc: "Lightning-fast, SEO-optimized marketing sites and web applications. Convert visitors into users with premium UI and zero-lag performance.",
    tags: ["Next.js", "Tailwind", "SEO", "Vercel", "Performance"],
    color: "#fff7ed",
    iconColor: "#ea580c",
  }
];


const Expertise = () => {
  return (
    <section id="expertise" className="section-wrapper">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">How We Help</div>
          <h2 className="section-title">
            Productized Services for{" "}
            <span className="gradient-text">Modern Founders</span>
          </h2>
          <p className="section-desc">
            Transparent pricing. No endless discovery calls. Pick what you need, and we start building your product today.
          </p>
        </div>

        {/* Grid */}
        <div className="expertise-grid">
          {services.map((s) => (
            <div key={s.num} className="expertise-card">
              <span className="expertise-card-num">{s.num}</span>
              <div
                className="expertise-icon-wrap"
                style={{ background: s.color, fontSize: "26px" }}
              >
                {s.emoji}
              </div>
              <h3 className="expertise-title">{s.title}</h3>
              {s.price && (
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#2563eb",
                    marginBottom: "8px",
                  }}
                >
                  {s.price}
                </div>
              )}
              <p className="expertise-desc">{s.desc}</p>
              <div className="expertise-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {s.discoverHref && (
                <Link
                  href={s.discoverHref}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "14px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#7c3aed",
                    textDecoration: "none",
                  }}
                >
                  Browse Catalog
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
