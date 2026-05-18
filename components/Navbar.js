import Link from "next/link";

const navLinks = [
	{ label: "Profile", href: "/about" },
	{ label: "Skills", href: "/skills" },
	{ label: "Experience", href: "/experience" },
	{ label: "Projects", href: "/projects" },
	{ label: "Labs", href: "/labs" },
	{ label: "Connect", href: "/contact" },
	{ label: "CV", href: "/Josh_CV3.pdf", download: true },
];

export default function Navbar() {
	return (
		<header className="site-header">
			<div className="container">
				<div className="header-row">
					<div className="header-brand">
						<Link className="brand" href="/">
							ngojo
						</Link>
						<span className="brand-sep">/</span>
						<Link className="brand-secondary" href="/about">
							profile
						</Link>
					</div>

					<nav aria-label="primary">
						<ul className="nav-inline">
							{navLinks.map((link) => (
								<li key={link.label}>
									{link.download ? (
										<a
											className="nav-link"
											href={link.href}
											download="Josh_CV3.pdf"
										>
											{link.label}
										</a>
									) : (
										<Link className="nav-link" href={link.href}>
											{link.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
