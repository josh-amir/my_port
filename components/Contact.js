import { FaEnvelope, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Connect</p>
        <h2>Get in touch</h2>
        <p className="section-lead">
          Reach me directly via email or connect on social platforms.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-label">Email</div>
          <a href="mailto:princengojo@g.cjc.edu.ph" className="contact-link">
            princengojo@g.cjc.edu.ph
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-label">Social</div>
          <div className="social-links">
            <a
              href="https://github.com/josh-amir"
              title="GitHub"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
              title="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://linktr.ee/pjngojo"
              title="Linktree"
              className="social-icon"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
