import Link from "next/link";

const navLinks = [
	{ label: "About", href: "/about" },
	{ label: "Skills", href: "/skills" },
	{ label: "Experience", href: "/experience" },
	{ label: "Projects", href: "/projects" },
	{ label: "Labs", href: "/labs" },
	{ label: "Contact", href: "/contact" },
];

export default function Navbar() {
	return (
		<header className="site-header">
			<div className="container">
				<div className="header-row">
					<div className="header-brand">
						<Link className="brand" href="/">
							Prince Ngojo
						</Link>
						<span className="brand-sep">·</span>
						<span className="brand-secondary">AI/ML + Full-Stack</span>
					</div>

					<nav aria-label="primary" className="nav-shell">
						<ul className="nav-inline">
							{navLinks.map((link) => (
								<li key={link.label}>
									<Link className="nav-link" href={link.href}>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
						<div className="nav-cta-group">
							<a className="nav-cta" href="/Josh_CV3.pdf" download="Josh_CV3.pdf">
								Download CV
							</a>
							<Link className="button nav-cta-primary" href="/contact">
								Hire me
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
