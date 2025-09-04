import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/images/main_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');



  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
                   const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };



  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <a href="#home" onClick={closeMenu}>
            <span className="brand-text">Portfolio</span>
          </a>
        </div>

        <ul className="navbar-menu">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="navbar-item">
              <a
                href={`#${item.toLowerCase()}`}
                className={`navbar-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>


      <div className={`navbar-mobile ${isOpen ? 'active' : ''}`}>
        {/* Close Button */}
        <div className="navbar-mobile-close" onClick={closeMenu}>
          <span className="close-icon">×</span>
        </div>
        
        {/* Mobile Menu Header */}
        <div className="navbar-mobile-header">
          <div className="navbar-mobile-brand">
            <div className="mobile-logo">
              <img src={logo} alt="logo" />
            </div>
            <span className="mobile-brand-text">Portfolio</span>
          </div>
        </div>
        
        {/* Mobile Menu Navigation */}
        <nav className="navbar-mobile-nav">
          <ul className="navbar-mobile-menu">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <li key={item} className="navbar-mobile-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`navbar-mobile-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="link-text">{item}</span>
                  <span className="link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
