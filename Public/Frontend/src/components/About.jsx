import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [stats, setStats] = useState({
    webDev: 0,
    coding: 0,
    projects: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateNumber = (target, key, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setStats(prev => ({ ...prev, [key]: target }));
            clearInterval(timer);
          } else {
            setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 16);
      };

      animateNumber(2, 'webDev');
      animateNumber(3, 'coding');
      animateNumber(50, 'projects');
    }
  }, [isVisible]);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-description">
              <p className="about-intro">
                Hi! I'm a passionate <span className="highlight">Full Stack Developer</span> currently pursuing BTech from Delhi College. 
                I'm in my first year and have been coding since class 10!
              </p>
              <p>
                With <span className="highlight">2 years of web development experience</span> and a strong foundation in programming, 
                I specialize in building scalable applications with clean, maintainable code. I love creating 
                innovative solutions and bringing ideas to life through technology.
              </p>
              <p>
                I'm passionate about writing efficient code and building amazing projects, 
                constantly learning new technologies and frameworks to improve my skills while balancing my studies.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.webDev}</span>
                <span className="stat-label">Years Web Dev</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.coding}</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.projects}+</span>
                <span className="stat-label">Projects Built</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
