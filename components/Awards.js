const awards = [
  {
    title: "Dean's List",
    issuer: "University of Davao",
    year: "2022 - Present",
    description: "Recognized for academic excellence with GPA above 3.8"
  },
  {
    title: "Best Research Paper",
    issuer: "CS Department Symposium",
    year: "2024",
    description: "Awarded for research on transfer learning in indoor positioning systems"
  },
  {
    title: "Google Cloud Skills Boost Certification",
    issuer: "Google Cloud",
    year: "2023",
    description: "Completed advanced training in machine learning and cloud infrastructure"
  },
  {
    title: "AI/ML Hackathon Winner",
    issuer: "TechPH 2023",
    year: "2023",
    description: "Won 1st place for innovative AI solution addressing accessibility"
  }
];

export default function Awards() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Recognition</p>
        <h2>Awards</h2>
        <p className="section-lead">Academic and professional highlights.</p>
      </div>

      <ul className="stacked-list">
        {awards.map((award) => (
          <li className="stacked-item" key={`${award.title}-${award.year}`}>
            <div className="item-head">
              <span className="item-title">{award.title}</span>
              <span className="item-meta">
                {award.issuer} · {award.year}
              </span>
            </div>
            <p>{award.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
