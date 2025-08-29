import '../css/contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">Feel free to reach out!</p>

      
      <div className="social-mini-container" aria-label="LinkedIn mini card">
        <a
          href="https://www.linkedin.com/in/brenae-b-9b7652294"
          target="_blank"
          rel="noopener noreferrer"
          className="mini-link-btn"
          aria-label="Open LinkedIn profile"
        >
          LinkedIn
        </a>
      </div>

      <div className="social-mini-container" aria-label="GitHub mini card">
        <a
          href="https://github.com/BrenaeB"
          target="_blank"
          rel="noopener noreferrer"
          className="mini-link-btn"
          aria-label="Open GitHub profile"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}