import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Key Selling Ecommerce Site",
      description: "Admin panel with key management full stack web developed in 3 days. Complete e-commerce solution with modern UI and secure key management system.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Admin Panel"],
      image: "./src/assets/images/gamingGarage.png",
      liveUrl: "https://gaminggarage.store/",
      githubUrl: "https://github.com/ogsuryansh/manyhack-pannel",
      featured: true
    },
    {
      title: "Glass Music",
      description: "A personal website to listen free music without any ads or anything made using YouTube API with fallback as Spotify with clean and modern UI.",
      technologies: ["React", "YouTube API", "Spotify API", "JavaScript", "Modern UI"],
      image: "./src/assets/images/glassmusic.png",
      liveUrl: "https://glassmusic.fun/",
      githubUrl: "https://github.com/ogsuryansh/web-music-player",
      featured: false
    },
    {
      title: "Acadmix",
      description: "A web platform for selling book notes and tests via online server including admin panel to manage all books, tests, payments, and users. Features manual admin approval payment method with dynamic payment QR and link generation.",
      technologies: ["MERN Stack", "JWT Auth", "Google OAuth", "UPI Payment", "Admin Panel"],
      image: "./src/assets/images/acadmix.png",
      liveUrl: "https://acadmix.shop/",
      githubUrl: "https://github.com/ogsuryansh/acadmix",
      featured: false
    },
    {
      title: "OTP Selling Platform",
      description: "A comprehensive web platform for selling OTP services with integrated Telegram bot functionality. Features both web interface and bot integration for seamless OTP management and sales.",
      technologies: ["Python", "Telegram Bot", "EJS", "JavaScript", "Web Integration"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      liveUrl: "/not-available",
      githubUrl: "https://github.com/ogsuryansh/otpSellingMain",
      featured: false
    },
    {
      title: "Video Downloader Bot",
      description: "A Telegram bot that can download videos from YouTube, Instagram, TikTok, and Twitter. Features automatic file size management, auto-deletion after 30 minutes, and user statistics tracking.",
      technologies: ["Python", "Telegram Bot", "YouTube API", "Video Processing", "Multi-Platform"],
      image: "https://media.istockphoto.com/id/2224925817/photo/smartphone-e-learning-and-webinar-concept.jpg?b=1&s=612x612&w=0&k=20&c=e7K4AtuIsNXCG7vKmYBYwiWmEUYOVJBtUZ7aLDBxvPA=",
      liveUrl: "/not-available",
      githubUrl: "https://github.com/ogsuryansh/Video_downloader",
      featured: false
    },
    {
      title: "And Many More...",
      description: "I've built numerous other projects including web applications, mobile apps, automation tools, and various utilities. Each project showcases different aspects of my development skills and problem-solving abilities.",
      technologies: ["React", "Node.js", "Python", "JavaScript", "Various APIs"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&crop=center",
      liveUrl: "/not-available",
      githubUrl: "https://github.com/ogsuryansh",
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.featured ? 'featured' : ''} ${project.inProgress ? 'in-progress' : ''}`}>
              {project.featured && (
                <div className="featured-badge">
                  <span>🏆 Featured Project</span>
                </div>
              )}
              {project.inProgress && (
                <div className="progress-badge">
                  <span>🚧 In Development</span>
                </div>
              )}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl.startsWith('/') ? (
                      <Link to={project.liveUrl} className="project-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        {project.inProgress ? 'Preview' : 'Live Demo'}
                      </Link>
                    ) : (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15,3 21,3 21,9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        {project.inProgress ? 'Preview' : 'Live Demo'}
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`tech-badge ${['C++', 'Algorithms', 'Data Structures', 'Performance Analysis'].includes(tech) ? 'dsa-tech' : ''}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
