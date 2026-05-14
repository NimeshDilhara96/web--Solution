import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <div className="logo" onClick={() => scrollToSection('home')}>
          MOMMENTX<span className="logo-dot"></span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <span
              key={link.id}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              data-section={link.id}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </span>
          ))}
          <button
            className="btn btn-primary btn-sm"
            onClick={() => scrollToSection('contact')}
          >
            Start a Project
          </button>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <span
              key={link.id}
              className="nav-link"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </span>
          ))}
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;