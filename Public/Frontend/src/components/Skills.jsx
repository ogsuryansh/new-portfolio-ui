import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "./src/assets/images/react.png" },
        { name: "JavaScript", level: 88, icon: "./src/assets/images/js.png" },
        { name: "HTML5", level: 95, icon: "./src/assets/images/html.png" },
        { name: "CSS3", level: 92, icon: "./src/assets/images/css.png" }
      ]
    },
    {
      title: "Backend & Languages",
      skills: [
        { name: "Node.js", level: 85, icon: "./src/assets/images/node js.png" },
        { name: "Express.js", level: 80, icon: "./src/assets/images/Express.png" },
        { name: "Python", level: 82, icon: "./src/assets/images/python.png" },
        { name: "C++", level: 10, icon: "⚡" }
      ]
    }
  ];

  const currentlyLearning = [
    { name: "Data Structures & Algorithms", language: "C++", progress: 70, icon: "🔧" },
    { name: "UI/UX Designing", language: "Design", progress: 50, icon: "🎨" },
    { name: "GSAP", language: "Animation", progress: 60, icon: "✨" },
    { name: "Bot Development using Python", language: "Python", progress: 80, icon: "🤖" },
    { name: "Problem Solving", language: "Programming", progress: 55, icon: "🎯" }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item" data-tooltip={`${skill.level}% proficiency in ${skill.name}`}>
                    <div className="skill-icon">
                      {skill.icon.includes('.') ? (
                        <img src={skill.icon} alt={skill.name} />
                      ) : (
                        <span className="skill-emoji">{skill.icon}</span>
                      )}
                    </div>
                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="learning-section">
          <h3 className="learning-title">
            <span className="learning-icon">📚</span>
            Currently Learning
          </h3>
          <div className="learning-grid">
            {currentlyLearning.map((item, index) => (
              <div key={index} className="learning-item">
                <div className="learning-header">
                  <span className="learning-emoji">{item.icon}</span>
                  <div className="learning-info">
                    <h4 className="learning-name">{item.name}</h4>
                    <span className="learning-lang">with {item.language}</span>
                  </div>
                  <span className="learning-progress-text">{item.progress}%</span>
                </div>
                <div className="learning-progress-bar">
                  <div 
                    className="learning-progress-fill" 
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-showcase">
          <h3 className="tech-showcase-title">
            <span className="tech-icon">🛠️</span>
            Technologies & Tools I Know
          </h3>
          <div className="tech-categories-grid">
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">🌐</span>
                Web Technologies
              </h4>
              <div className="tech-items">
                {["GSAP", "MUI", "React", "Tailwind CSS", "Bootstrap", "Vite"].map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">🔧</span>
                Development Tools
              </h4>
              <div className="tech-items">
                {["Git", "GitHub", "Docker", "Cursor", "Postman", "GSAP"].map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">☁️</span>
                Cloud & Database
              </h4>
              <div className="tech-items">
                {["AWS", "Netlify", "MongoDB", "PythonAnywhere", "Vercel"].map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">🔐</span>
                APIs & Authentication
              </h4>
              <div className="tech-items">
                {["REST APIs", "JWT", "Google OAuth"].map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">⚡</span>
                DSA & Problem Solving
              </h4>
              <div className="tech-items">
                {["C++", "Algorithms", "Data Structures", "Competitive Programming", "Problem Solving", "Time Complexity"].map((tech, index) => (
                  <span key={index} className="tech-item dsa-tech">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category-card">
              <h4 className="tech-card-title">
                <span className="category-icon">⚙️</span>
                DevOps & Others
              </h4>
              <div className="tech-items">
                {["Nginx", "Testing", "JSON", "REST", "HTTP/HTTPS", "API Integration"].map((tech, index) => (
                  <span key={index} className="tech-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
