import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const location = useLocation();
  const navigate = useNavigate();

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
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
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
    { label: "Services", id: "expertise" },
    { label: "SaaS Products", id: "saas" },
    { label: "About", id: "why-us" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        {/* Logo — Blanka font, preserved exactly as original */}
        <div
          onClick={() => {
            if (location.pathname !== '/') navigate('/');
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
          {navLinks.map((link) => (
            <span
              key={link.id}
              className={`nav-link ${activeSection === link.id && location.pathname === '/' ? "active" : ""}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </span>
          ))}
          <Link
            to="/erp"
            className={`nav-link ${location.pathname === '/erp' ? "active" : ""}`}
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none' }}
          >
            ERP
          </Link>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => scrollTo("contact")}
          >
            Start a Project
          </button>
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
          {navLinks.map((link) => (
            <span
              key={link.id}
              className="nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </span>
          ))}
          <Link
            to="/erp"
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
            style={{ textDecoration: 'none' }}
          >
            ERP
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => scrollTo("contact")}
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
