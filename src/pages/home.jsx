import React from 'react';
import '../css/home.css';
import '../css/projects.css';

export default function Home() {
  const highlights = [
    {
      id: 1,
      title: 'Client Page',
      description: 'This personalized page highlights the unique style, interest, and personal hobbies of the client',
      link: 'https://splendid-licorice-e508f6.netlify.app/'
    },
    {
      id: 2,
      title: 'Browse The Universe',
      description: 'Browse the Universe is a user friendly application that allows you to search for date specific photos of the solar system.',
      link: 'https://browsetheuniverse.netlify.app/'
    },
    {
      id: 3,
      title: 'The G-List',
      description: 'The G-List is a collaborative platform for curating and sharing lists of resources.',
      link: 'https://g-list.vercel.app/'
    }
  ];

  return (
    <div className="home">
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home/Landing Section */}
      <section id="home"> 
        <h1 className="greeting">Hey! I'm</h1>
        <h1 className="name">Brenae</h1>
        <p>An enthusiastic front-end developer passionate about crafting clean, accessible, and responsive web experiences.</p>
      </section>

      <div className="blob-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate front-end developer with a keen eye for design and user experience. 
              I love creating digital experiences that are both beautiful and functional.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying the great outdoors.
            </p>
          </div>
          <div className="skills">
            <h3 className="skills-subtitle">Skills</h3>
            <ul>
              <li><span>JavaScript</span></li>
              <li><span>React</span></li>
              <li><span>CSS</span></li>
              <li><span>Node.js</span></li>
              <li><span>HTML5</span></li>
              <li><span>Git</span></li>
              <li><span>Responsive Design</span></li>
              <li><span>UI/UX</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-container">
          <p className="projects-description">
            I design and build full-stack web applications with a focus on delivering polished, accessible user experiences. 
            My work spans frontend development, backend logic, and JavaScript-driven tooling, emphasizing performance, 
            scalability, and maintainability.
          </p>
          
          <div className="projects-grid">
            {highlights.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <a
                    href={project.link}
                    className="project-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 3.5H12.5V12.5H11.5V5.20711L3.5 13.2071L2.79289 12.5L10.7929 4.5H3.5V3.5Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="contact-section">
  <h1 className="contact-title">Contact Me</h1>
  <div className="contact-container">
    <p className="contact-description">
      Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing.
    </p>
    
    <div className="contact-content">
      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div className="contact-details">
            <h3>Email</h3>
            <a href="mailto:brenae.brooks@example.com" className="contact-link">
              brenae.brooks@example.com
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">💼</div>
          <div className="contact-details">
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/brenae-b-9b7652294" 
              className="contact-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/brenae-b-9b7652294
            </a>
          </div>
        </div>
        
        <div className="contact-item">
          <div className="contact-icon">🐙</div>
          <div className="contact-details">
            <h3>GitHub</h3>
            <a 
              href="https://github.com/BrenaeB" 
              className="contact-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/BrenaeB
            </a>
          </div>
        </div>
      </div>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            placeholder="Your name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            required 
            placeholder="Tell me about your project..."
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn">
          Send Message
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1.5 1.5H14.5V14.5H13.5V3.20711L1.5 15.2071L0.792893 14.5L12.7929 2.5H1.5V1.5Z" fill="currentColor"/>
          </svg>
        </button>
      </form>
    </div>
  </div>
</section>

    </div>
  );
}