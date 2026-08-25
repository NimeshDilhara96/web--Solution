"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const columns = [
    {
      label: "Services",
      links: [
        { text: "MVP Development", path: "/services" },
        { text: "SaaS Platforms", path: "/services" },
        { text: "AI Prototyping", path: "/services" },
        { text: "Web Applications", path: "/services" },
      ],
    },
    {
      label: "Portfolio",
      links: [
        { text: "OrderFlow Engine", path: "/portfolio" },
        { text: "HR Connect MVP", path: "/portfolio" },
        { text: "NutriCare AI", path: "/portfolio" },
      ],
    },
    {
      label: "Company",
      links: [
        { text: "About Us", path: "/about" },
        { text: "Discover", path: "/discover" },
        { text: "Contact", path: "/contact" },
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
              Custom software solutions and scalable SaaS products for global enterprises. 
              Engineering excellence delivering real business value worldwide.
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
                <Link
                  key={link.text}
                  href={link.path}
                  className="footer-link"
                  style={{ textDecoration: 'none' }}
                >
                  {link.text}
                </Link>
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
            Empowering businesses globally 🌎
          </span>
          <span
            className="footer-copy"
            style={{ display: "flex", gap: "20px" }}
          >
            <Link href="/privacy-policy" style={{ color: "#3d4555", transition: "color 0.2s", textDecoration: "none" }}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" style={{ color: "#3d4555", transition: "color 0.2s", textDecoration: "none" }}>
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
