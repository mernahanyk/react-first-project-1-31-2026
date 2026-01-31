import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navbarHeight = scrolled ? '70px' : '100px';

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <h2>START FRAMEWORK</h2>
          </Link>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul 
          className={`nav-links ${menuOpen ? 'active' : ''}`}
          style={{ top: navbarHeight }}
        >
          <li>
            <NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
