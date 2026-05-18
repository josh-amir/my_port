import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-header">
        <img
          className="hero-avatar"
          src="/images/josh_new.png"
          alt="Portrait of Prince Joshua Ngojo"
        />

        <div>
          <p className="section-kicker">Data Science</p>
          <h1 className="hero-title">Prince Joshua Ngojo</h1>
          <p className="hero-subtitle">
            Third Year Computer Science Student.
          </p>
        </div>
      </div>

      <p className="hero-lead">
        Hi, I'm Josh, a passionate computer science student focused on data science, machine learning, and
        AI research. I love building projects that solve real-world problems and exploring the ethical implications
        of technology. I'm currently working on my thesis on Filipino Sign Language recognition using Media Pipe Holistic and
        transformer model.
      </p>

      <div className="hero-actions">
        <Link className="button" href="/projects">
          View projects
        </Link>
        <Link className="button button-secondary" href="/about">
          Research
        </Link>
        <a
          className="button button-ghost"
          href="/Josh_CV3.pdf"
          download="Josh_CV3.pdf"
        >
          CV
        </a>
      </div>

      <div className="link-row">
        <a
          className="icon-link"
          href="mailto:princengojo@g.cjc.edu.ph"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          className="icon-link"
          href="https://github.com/josh-amir"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          className="icon-link"
          href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}