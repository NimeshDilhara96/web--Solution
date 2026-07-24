import React from "react";

const services = [
  {
    num: "01",
    emoji: "🌐",
    title: "Website Development",
    price: "Starting from $99",
    desc: "Modern, high-performance websites that help businesses establish credibility, attract customers, and grow their online presence.",
    tags: ["React", "Next.js", "SEO", "CMS", "Responsive"],
    color: "#eff6ff",
    iconColor: "#2563eb",
  },
  {
    num: "02",
    emoji: "🧱",
    title: "Web Application Development",
    price: "Starting from $499",
    desc: "Custom web applications and SaaS platforms built to streamline operations, improve efficiency, and solve real business challenges.",
    tags: ["MERN Stack", "Node.js", "APIs", "Cloud", "Database Design"],
    color: "#f5f3ff",
    iconColor: "#7c3aed",
  },
  {
    num: "03",
    emoji: "🛍️",
    title: "E-commerce Solutions",
    price: "Starting from $399",
    desc: "Complete online selling solutions with product management, order processing, inventory control, and customer-focused shopping experiences.",
    tags: ["Online Stores", "Payments", "Inventory", "Orders", "Analytics"],
    color: "#fff7ed",
    iconColor: "#ea580c",
  },
  {
    num: "04",
    emoji: "🤖",
    title: "AI & Automation Solutions",
    price: "Starting from $299",
    desc: "Practical AI solutions that automate repetitive tasks, improve customer experiences, and help businesses make smarter decisions.",
    tags: ["AI Integration", "Chatbots", "OpenAI API", "Automation"],
    color: "#fdf4ff",
    iconColor: "#d946ef",
  },
  {
    num: "05",
    emoji: "⚙️",
    title: "ERP & Business Systems",
    price: "Custom Quote",
    desc: "Powerful business management systems including ERP, CRM, and workflow automation solutions designed around your unique operations.",
    tags: ["ERP", "CRM", "Automation", "Cloud Systems", "Scalable"],
    color: "#f0fdf4",
    iconColor: "#059669",
  },
  {
    num: "06",
    emoji: "✦",
    title: "UI/UX & Product Design",
    price: "Custom Quote",
    desc: "User-focused digital experiences designed to improve usability, engagement, and conversions through thoughtful product design.",
    tags: ["Figma", "Prototypes", "Design Systems", "UX Research"],
    color: "#f8fafc",
    iconColor: "#475569",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
