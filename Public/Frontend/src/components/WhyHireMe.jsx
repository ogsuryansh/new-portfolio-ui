import React, { useState } from 'react';
import './WhyHireMe.css';

const WhyHireMe = () => {
  const [activeCard, setActiveCard] = useState(null);

  const benefits = [
    {
      icon: "⚡",
      title: "Lightning Fast Response",
      description: "24/7 availability with responses within 2-4 hours. Your project never sleeps, and neither do I.",
      features: ["Instant communication", "Quick turnaround", "Always available"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "🎯",
      title: "Real-Time Demo & Progress",
      description: "Live demos, daily progress reports, and real-time project tracking. You see exactly what you're getting.",
      features: ["Live project demos", "Daily progress updates", "Real-time tracking"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "👨‍💻",
      title: "All-in-One Developer",
      description: "Full-stack expertise means no team dependencies. Frontend, backend, database, deployment - I handle it all.",
      features: ["No team coordination", "Single point of contact", "Complete ownership"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "🚀",
      title: "Faster Than Others",
      description: "Efficient development with modern tools and automation. Deliver 3x faster without compromising quality.",
      features: ["Modern tooling", "Smart automation", "Rapid prototyping"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      icon: "🛡️",
      title: "Secure & Professional",
      description: "Your code stays in YOUR Git account. Full transparency, complete security, and professional documentation.",
      features: ["Your own repositories", "Complete code ownership", "Professional docs"],
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: "🌐",
      title: "Free Hosting & Deployment (limited to free tier)",
      description: "Just buy the domain - I handle everything else. Free hosting, SSL, CI/CD, and maintenance included.",
      features: ["Free hosting setup", "SSL certificates", "Automated deployments"],
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const stats = [
    { number: "2-4h", label: "Response Time", icon: "⏱️" },
    { number: "3x", label: "Faster Delivery", icon: "🚀" },
    { number: "100%", label: "Code Ownership", icon: "🔒" },
    { number: "24/7", label: "Availability", icon: "🌟" }
  ];

  return (
    <section id="why-hire-me" className="why-hire-me">
      <div className="why-hire-me-container">
        {/* Header */}
        <div className="why-hire-me-header">
          <h2 className="section-title">
            <span className="title-icon">💼</span>
            Why Hire Me?
          </h2>
          <p className="section-subtitle">
            Get more than just a developer - get a <span className="highlight">complete solution</span> with 
            unmatched speed, transparency, and value
          </p>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card ${activeCard === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ '--gradient': benefit.gradient }}
            >
              <div className="benefit-header">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
              </div>
              
              <p className="benefit-description">{benefit.description}</p>
              
              <div className="benefit-features">
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="benefit-glow"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="hire-me-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-subtitle">
              Let's discuss your vision and turn it into reality - faster, better, and more secure than ever before.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary cta-btn">
                <span>Let's Talk Business</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 8.5l-9 5.5-9-5.5V7l9 5.5L21 7v1.5z"/>
                </svg>
              </a>
              <a href="#projects" className="btn btn-secondary cta-btn">
                <span>See My Work</span>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="cta-visual">
            <div className="floating-elements">
              <div className="float-element">💡</div>
              <div className="float-element">🚀</div>
              <div className="float-element">⚡</div>
              <div className="float-element">🎯</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
