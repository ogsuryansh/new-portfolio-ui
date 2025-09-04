import React, { useState, useEffect } from 'react';
import './Hero.css';
import NotificationBanner from './NotificationBanner';

const Hero = () => {
  const [clickEffects, setClickEffects] = useState([]);
  const [konamiCode, setKonamiCode] = useState([]);
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'DSA Learner', 
    'Problem Solver',
    'Code Architect',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const shouldDelete = isDeleting;
    
    if (!shouldDelete && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 3000);
      return;
    }
    
    if (shouldDelete && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setDisplayText(prev => {
        if (shouldDelete) {
          return currentRole.substring(0, prev.length - 1);
        }
        return currentRole.substring(0, prev.length + 1);
      });
    }, shouldDelete ? 80 : 150);
    
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  // Easter egg - Konami code
  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...konamiCode, e.code].slice(-10);
      setKonamiCode(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiSequence)) {
        // Activate easter egg
        document.body.classList.add('matrix-mode');
        setTimeout(() => document.body.classList.remove('matrix-mode'), 5000);
        setKonamiCode([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode, konamiSequence]);

  // Click effects
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newEffect = {
      id: Date.now(),
      x,
      y,
    };
    
    setClickEffects(prev => [...prev, newEffect]);
    
    setTimeout(() => {
      setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
    }, 1000);
  };




  return (
    <section id="home" className="hero" onClick={handleClick}>
      {/* Notification Banner */}
      <NotificationBanner />
      
      {/* Animated Background */}
      <div className="hero-background">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`shape shape-${i + 1}`}></div>
          ))}
        </div>
        <div className="grid-overlay"></div>
      </div>

      {/* Click Effects */}
      {clickEffects.map(effect => (
        <div
          key={effect.id}
          className="click-effect"
          style={{
            left: effect.x,
            top: effect.y,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm a
          <span className="hero-highlight">
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </span>
        </h1>
        
        <p className="hero-subtitle">
          Building the future with <span className="highlight-text">modern web technologies</span> and 
          clean, efficient code. Currently mastering <span className="highlight-text">Data Structures & Algorithms with C++</span> 
          to strengthen my problem-solving foundation.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary">
            <span>View Projects</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
          
          <button className="btn btn-secondary">
            <span>Contact Me</span>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 8.5l-9 5.5-9-5.5V7l9 5.5L21 7v1.5z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
