import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const highlights = [
	{
		label: "Thesis",
		value: "FSL recognition with MediaPipe Holistic + transformers",
	},
	{
		label: "Recent build",
		value: "Clinic patient management system (JavaFX, SQLite)",
	},
	{
		label: "Leadership",
		value: "Deputy Academic Secretary, CCIS",
	},
];

export default function Hero() {
	return (
		<div className="hero">
			<div className="hero-header">
				<div className="hero-avatar-container">
					<div className="avatar-glow"></div>
					<img
						className="hero-avatar"
						src="/images/josh_new.png"
						alt="Portrait of Prince Joshua Ngojo"
					/>
				</div>

				<div className="hero-text-content">
					<p className="section-kicker">Data Science + ML</p>
					<h1 className="hero-title">Prince Joshua Ngojo</h1>
					<p className="hero-subtitle">
						Computer Science student · AI/ML research · Open to internships
					</p>
					<div className="hero-badges">
						<span className="badge">Human-centered AI</span>
						<span className="badge">Research-driven builds</span>
						<span className="badge">Team leadership</span>
					</div>
				</div>
			</div>

			<p className="hero-lead">
				I build ML prototypes and data-driven apps that improve access and
				understanding. My current thesis explores Filipino Sign Language
				recognition using MediaPipe Holistic and transformer models, with a focus
				on ethical, reliable AI for real communities.
			</p>

			<div className="hero-highlights">
				{highlights.map((highlight) => (
					<div className="highlight-card" key={highlight.label}>
						<span className="highlight-label">{highlight.label}</span>
						<span className="highlight-value">{highlight.value}</span>
					</div>
				))}
			</div>

			<div className="hero-actions">
				<a
					className="button button-primary"
					href="mailto:princengojo@g.cjc.edu.ph"
				>
					Email me
				</a>
				<Link className="button button-secondary" href="/projects">
					View projects
				</Link>
				<a
					className="button button-ghost"
					href="/Josh_CV3.pdf"
					download="Josh_CV3.pdf"
				>
					Download CV
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