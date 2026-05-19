const projects = [
	{
		title: "Filipino Sign Language Interpreter — CS Thesis",
		period: "Jan 2026 – Present",
		tech: "Python, MediaPipe, Pose Transformers",
		description:
			"Developing a real-time gesture recognition system to help bridge communication gaps for deaf learners in classroom settings. Exploring Pose Transformer architectures to improve recognition accuracy for dynamic sign language translation.",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/josh-amir",
			},
		],
		featured: true,
	},
	{
		title: "School Clinic Patient Management System",
		period: "Jan 2026 – Present",
		tech: "Java, JavaFX, SQLite",
		description:
			"Built a desktop application for the CJC Clinic to streamline medical record-keeping with a strong focus on usability. Designed a relational SQLite database schema to manage patient history and inventory more efficiently.",
		links: [],
		featured: true,
	},
	{
		title: "Sinsilyo: Philippine Coin Identifier",
		period: "Jul 2025 – Dec 2025",
		tech: "Kotlin, Jetpack Compose, CNN, TensorFlow Lite",
		description:
			"Served as Project Manager and Lead Front-End Engineer for an accessibility-focused mobile application. Trained a convolutional neural network to identify Philippine coins and coordinated a five-member team to integrate the machine learning model into a seamless Android interface.",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/josh-amir/sinsilyo",
			},
		],
		featured: true,
	},
	{
		title: "Hidden Secrets: Steganography Tool",
		period: "Oct 2025 – Dec 2025",
		tech: "Python, HTML, CSS, JavaScript",
		description:
			"Led the implementation of Least Significant Bit (LSB) steganography to securely embed encrypted data within image files. Designed a modular software architecture for handling multiple image formats and encryption workflows while minimizing visible distortion.",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/josh-amir",
			},
		],
	},
	{
		title: "Luksong Baka: Cultural Tech Revival",
		period: "Aug 2025 – Oct 2025",
		tech: "Unity, C#",
		description:
			"Developed a 3D simulation of the traditional Filipino game Luksong Baka to help preserve cultural heritage through interactive media. Built custom character controls, jump mechanics, and an adaptive difficulty system based on player performance.",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/josh-amir",
			},
		],
	},
	{
		title: "Hashing Simulation Animation",
		period: "Dec 2024 – Jan 2025",
		tech: "HTML, CSS, JavaScript",
		description:
			"Created an interactive web-based animation to visualize hashing processes for a Discrete Structures project. Designed dynamic demonstrations of hash functions and collision handling strategies to make core algorithmic concepts easier to understand.",
		links: [
			{
				label: "GitHub",
				href: "https://github.com/josh-amir",
			},
		],
	},
];

export default function Projects() {
	return (
		<div>
			<div className="section-header">
				<p className="section-kicker">Selected work</p>
				<h2>Projects</h2>
				<p className="section-lead">
					Research prototypes and applied software builds.
				</p>
			</div>

			<div className="projects-list">
				{projects.map((project) => (
					<article className="project-item" key={project.title}>
						{project.featured && (
							<div
								style={{
									width: "100%",
									height: "240px",
									borderRadius: "8px",
									marginBottom: "16px",
									background: "linear-gradient(135deg, #E8F0FE 0%, #F3F3F3 100%)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#5F6368",
									fontSize: "14px",
									fontWeight: "500",
									overflow: "hidden",
									cursor: "pointer",
									transition: "all 0.3s cubic-bezier(0.2, 0, 0, 1)",
								}}
								className="image-hover"
								title={project.title}
							>
								{project.title}
							</div>
						)}
						<div className="project-header">
							<h3 className="project-title">{project.title}</h3>
							<span className="project-period">{project.period}</span>
						</div>

						<p className="project-tech">{project.tech}</p>
						<p className="project-description">{project.description}</p>

						{project.links?.length > 0 && (
							<div className="project-links">
								{project.links.map((link) => (
									<a
										key={link.href}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="project-link"
									>
										{link.label}
									</a>
								))}
							</div>
						)}
					</article>
				))}
			</div>
		</div>
	);
}