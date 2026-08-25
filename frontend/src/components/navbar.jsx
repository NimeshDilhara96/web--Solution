"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = ["home", "expertise", "saas", "why-us", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to handle scrolling if coming from another page
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const scrollTo = (id) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setIsMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Services", path: "/services" },
    { 
      label: "Products", 
      type: "dropdown",
      items: [
        { label: "OrderFlow ERP ↗", path: "https://www.mommentx.space/erp", external: true }
      ]
    },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Technologies", path: "/technologies" },
    { label: "Discover", path: "/discover" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo — Blanka font, preserved exactly as original */}
        <div
          onClick={() => {
            if (pathname !== '/') router.push('/');
            else scrollTo("home");
          }}
          style={{
            fontFamily: "'Blanka', sans-serif",
            fontWeight: 400,
            fontSize: "26px",
            letterSpacing: "-0.02em",
            cursor: "pointer",
            color: "#0a0d14",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          MOMMENT<span className="fire-text">X</span>
          <span
            style={{
              display: "inline-block",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#0a0d14",
              verticalAlign: "super",
              marginLeft: "2px",
            }}
          />
        </div>

        {/* Desktop links */}
        <div className="nav-links">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              return (
                <div key={link.label} className="nav-dropdown" style={{ position: 'relative' }}>
                  <span className="nav-link">{link.label} ▾</span>
                  <div className="nav-dropdown-menu">
                    {link.items.map(item => (
                      <a 
                        key={item.label}
                        href={item.path} 
                        target={item.external ? "_blank" : "_self"} 
                        rel={item.external ? "noopener noreferrer" : ""} 
                        className="nav-dropdown-item"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            if (link.hash) {
              return (
                <span
                  key={link.label}
                  className={`nav-link ${activeSection === link.hash && pathname === '/' ? "active" : ""}`}
                  onClick={() => scrollTo(link.hash)}
                >
                  {link.label}
                </span>
              );
            }
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname.startsWith(link.path) && link.path !== '/' ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn btn-primary btn-sm"
            style={{ textDecoration: 'none', display: 'inline-block', lineHeight: 'normal' }}
          >
            Start a Project
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => {
            if (link.type === "dropdown") {
              return link.items.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className="nav-link"
                  style={{ textDecoration: 'none', paddingLeft: '16px' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label} / {item.label}
                </a>
              ));
            }
            if (link.hash) {
              return (
                <span
                  key={link.label}
                  className="nav-link"
                  onClick={() => scrollTo(link.hash)}
                >
                  {link.label}
                </span>
              );
            }
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link ${pathname.startsWith(link.path) && link.path !== '/' ? "active" : ""}`}
                onClick={() => setIsMenuOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
            onClick={() => setIsMenuOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
