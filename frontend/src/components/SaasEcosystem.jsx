import React from "react";
import { useNavigate } from "react-router-dom";

const saasProducts = [
  {
    emoji: "",
    name: "Small Business  Multitenant Order Management System",
    tagline: "Order Management System for Small Businesses",
    desc: "Manage orders ,customers,Products,inventory,and reports.",
    status: "live",
    statusLabel: "Live",
    color: "#eff6ff",
    href: "/erp",
  },
];

const statusClass = {
  live: "badge-live",
  beta: "badge-beta",
  soon: "badge-soon",
};

const SaasEcosystem = () => {
  return (
    <section id="saas" className="section-wrapper-soft">
      <div className="section-inner">
        {/* Section header */}
        <div className="section-head">
          <div className="section-label">Our SaaS Ecosystem</div>
          <h2 className="section-title">
            Built In-House.{" "}
            <span className="gradient-text">Used Worldwide.</span>
          </h2>
          <p className="section-desc">
            Beyond client work, we build our own suite of developer and
            productivity tools. Thoughtfully crafted, obsessively refined — and
            ready for you to try today.
          </p>
        </div>

        {/* Cards grid */}
        <div className="saas-grid">
          {saasProducts.map((product) => (
            <div key={product.name} className="saas-card">
              {/* Icon */}
              <div
                className="saas-card-icon"
                style={{ background: product.color, fontSize: "24px" }}
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
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#9ba3b4",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {product.tagline}
              </p>

              {/* Description */}
              <p className="saas-card-desc">{product.desc}</p>

              {/* Footer */}
              <div className="saas-card-footer">
                <button
                  className="saas-try-btn"
                  disabled={product.status === "soon"}
                  style={{
                    opacity: product.status === "soon" ? 0.45 : 1,
                    cursor:
                      product.status === "soon" ? "not-allowed" : "pointer",
                  }}
                >
                  {product.status === "soon" ? "Coming Soon" : "Try Now"}
                  {product.status !== "soon" && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
