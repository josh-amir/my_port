const labsContent = [
	{
		category: "Substack",
		items: [
			{
				title: "Latest blog post",
				description:
					"Recent insights and explorations on technology, research, and digital innovation.",
				link: "https://substack.com/@amirstoic/p-154195873",
			},
			{
				title: "All notes & articles",
				description: "All notes, research insights, and technical write-ups.",
				link: "https://substack.com/@amirstoic/notes",
			},
		],
	},
	{
		category: "Podcast",
		items: [
			{
				title: "Latest episode",
				description:
					"Tech & Society conversations exploring AI, ethics, policy, and technology's impact on communities.",
				link: "https://open.spotify.com/episode/6RufqmFBDQ7uL8Rozys22T?si=yCYB1OmaRmua6eh0gf1J0w",
			},
		],
	},
	{
		category: "Short films",
		items: [
			{
				title: "The Session",
				description:
					"A psychological thriller following Dr. Eli, a couples therapist with a sinister double life.",
				link: "https://www.facebook.com/share/v/1BADyRURb3/",
				poster: "/images/thesession.jpg",
			},
			{
				title: "The Four-saken Truths",
				description: "Short film project (in progress).",
				link: null,
				poster: "/images/forsakentruths.jpg",
			},
		],
	},
];

export default function Labs() {
	return (
		<div>
			<div className="section-header">
				<p className="section-kicker">Side work</p>
				<h2>Labs</h2>
				<p className="section-lead">Writing, conversations, and short films.</p>
			</div>

			<div className="card-grid">
				{labsContent.map((section) => (
					<div className="card" key={section.category}>
						<h3 className="card-title">{section.category}</h3>
						{section.category === "Short films" ? (
							<ul className="stacked-list">
								{section.items.map((item) => (
									<li className="stacked-item" key={item.title}>
										{item.poster && (
											<img
												src={item.poster}
												alt={item.title}
												className="image-hover"
												style={{
													width: "100%",
													borderRadius: "8px",
													marginBottom: "12px",
													aspectRatio: "2/3",
													objectFit: "cover",
													display: "block",
												}}
											/>
										)}
										<div className="item-head">
											<span className="item-title">{item.title}</span>
											{item.link ? (
												<span className="item-meta">
													<a
														href={item.link}
														target="_blank"
														rel="noopener noreferrer"
													>
														View
													</a>
												</span>
											) : (
												<span className="item-meta">Coming soon</span>
											)}
										</div>
										<p>{item.description}</p>
									</li>
								))}
							</ul>
						) : (
							<ul className="stacked-list">
								{section.items.map((item) => (
									<li className="stacked-item" key={item.title}>
										<div className="item-head">
											<span className="item-title">{item.title}</span>
											{item.link ? (
												<span className="item-meta">
													<a
														href={item.link}
														target="_blank"
														rel="noopener noreferrer"
													>
														View
													</a>
												</span>
											) : (
												<span className="item-meta">Coming soon</span>
											)}
										</div>
										<p>{item.description}</p>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
