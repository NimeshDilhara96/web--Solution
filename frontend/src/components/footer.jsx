import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const columns = [
    {
      label: "Services",
      links: [
        { text: "Full-Stack Development", id: "expertise" },
        { text: "AI Solutions", id: "expertise" },
        { text: "UI/UX Design", id: "expertise" },
        { text: "Enterprise Systems", id: "expertise" },
      ],
    },
    {
      label: "SaaS Products",
      links: [
        { text: "FaviconForge", id: "saas" },
        { text: "PixelShrink", id: "saas" },
        { text: "FormCraft", id: "saas" },
        { text: "CodeSnap", id: "saas" },
        { text: "LinkVault", id: "saas" },
      ],
    },
    {
      label: "Company",
      links: [
        { text: "About Us", id: "why-us" },
        { text: "Our Work", id: "expertise" },
        { text: "Contact", id: "contact" },
      ],
    },
  ];

  const socials = [
    { label: "Li", title: "LinkedIn", href: "#" },
    { label: "Gh", title: "GitHub", href: "#" },
    { label: "Be", title: "Behance", href: "#" },
    { label: "In", title: "Instagram", href: "#" },
  ];

  return (
    <footer>
      <div className="footer-inner">
        {/* Top grid */}
        <div className="footer-top">
          {/* Brand column */}
          <div>
            {/* Logo — Blanka font, preserved exactly as original */}
            <div
              style={{
                fontFamily: "'Blanka', sans-serif",
                fontWeight: 400,
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                marginBottom: "14px",
                userSelect: "none",
              }}
            >
              MOMMENTX
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#ffffff",
                  verticalAlign: "super",
                  marginLeft: "2px",
                }}
              />
            </div>
            <p className="footer-tagline">
              Software solutions and SaaS products for forward-thinking
              businesses. Engineering excellence from Colombo, Sri Lanka.
            </p>
            {/* Socials */}
            <div className="footer-social">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  className="footer-social-btn"
                  title={s.title}
                  aria-label={s.title}
                >
                  <span style={{ fontSize: "11px", fontWeight: 700 }}>
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.label}>
              <div className="footer-col-label">{col.label}</div>
              {col.links.map((link) => (
                <a
                  key={link.text}
                  className="footer-link"
                  onClick={() => scrollTo(link.id)}
                  style={{ cursor: "pointer" }}
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 MommentX. All rights reserved.
          </span>
          <span className="footer-copy">
            Crafted with precision in Colombo, Sri Lanka 🇱🇰
          </span>
          <span
            className="footer-copy"
            style={{ display: "flex", gap: "20px" }}
          >
            <Link to="/privacy-policy" style={{ color: "#3d4555", transition: "color 0.2s", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" style={{ color: "#3d4555", transition: "color 0.2s", textDecoration: "none" }}>
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
