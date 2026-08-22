import React from "react";
import Link from "next/link";

const services = [
  {
    num: "01",
    emoji: "🌐",
    title: "High-Performance Web Apps",
    price: "Starting from $99",
    desc: "Lightning-fast, SEO-optimised websites and web applications built on modern stacks. From stunning landing pages to complex, data-driven platforms.",
    tags: ["React", "Next.js", "SEO", "CMS", "Responsive"],
    color: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    num: "02",
    emoji: "🧱",
    title: "SaaS & Platform Development",
    price: "Starting from $499",
    desc: "End-to-end SaaS products and custom web platforms — from scalable MVPs to enterprise-grade systems that solve real operational challenges globally.",
    tags: ["MERN Stack", "Node.js", "APIs", "Cloud", "Database Design"],
    color: "#f5f3ff",
    iconColor: "#7c3aed",
  },
  {
    num: "03",
    emoji: "🛍️",
    title: "E-commerce & Conversion Design",
    price: "Starting from $399",
    desc: "High-converting online storefronts with intelligent product management, seamless payment flows, and customer-focused shopping experiences.",
    tags: ["Online Stores", "Payments", "Inventory", "Orders", "Analytics"],
    color: "#fff7ed",
    iconColor: "#ea580c",
  },
  {
    num: "04",
    emoji: "🤖",
    title: "AI Integration & Automation",
    price: "Starting from $299",
    desc: "Practical AI solutions that automate repetitive workflows, enhance customer experiences, and give your business a competitive intelligence edge.",
    tags: ["AI Integration", "Chatbots", "OpenAI API", "Automation"],
    color: "#fdf4ff",
    iconColor: "#d946ef",
  },
  {
    num: "05",
    emoji: "⚙️",
    title: "Enterprise ERP & CRM Systems",
    price: "Custom Quote",
    desc: "Powerful, fully custom business management systems — ERP, CRM, and workflow automation — designed around your unique enterprise operations.",
    tags: ["ERP", "CRM", "Automation", "Cloud Systems", "Scalable"],
    color: "#f0fdf4",
    iconColor: "#059669",
  },
  {
    num: "06",
    emoji: "✦",
    title: "Digital Products & Design Systems",
    price: "Browse Catalog",
    desc: "Premium Figma UI kits, Notion templates, and design systems crafted for founders and product teams. Ship polished products, faster.",
    tags: ["Figma", "Notion", "Design Systems", "Templates", "UI Kits"],
    color: "#f8fafc",
    iconColor: "#475569",
    discoverHref: "/discover",
  },
];


const Expertise = () => {
  return (
    <section id="expertise" className="section-wrapper">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">Our Expertise</div>
          <h2 className="section-title">
            Digital Solutions Built for{" "}
            <span className="gradient-text">Business Growth</span>
          </h2>
          <p className="section-desc">
            We help startups and businesses build scalable software, digital
            products, and automation solutions that create measurable impact.
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
