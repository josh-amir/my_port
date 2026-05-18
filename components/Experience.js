const experiences = [
  // first experience
  {
    role: "Deputy Academic Secretary",
    organization: "College of Computer and Information Sciences",
    period: "2025 - Present",
    description:
      "Academic planning and coordination; organized seminars; supported departmental advocacy and student affairs.",
  },
    // second
  {
    role: "College Red Cross Youth Volunteer",
    organization: "Cor Jesu College",
    period: "2025 - Present",
    description:
        "Community outreach and disaster response.",
  },

    // third experience
  {
    role: "ICT Student Assistant",
    organization: "Cor Jesu College",
    period: "2023 - 2024",
    description:
        "Provided technical support for campus IT infastructure.",
  },
    
];

export default function Experience() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2>Academic & research roles</h2>
        <p className="section-lead">Primary roles in research and leadership.</p>
      </div>

      <ul className="stacked-list">
        {experiences.map((experience) => (
          <li className="stacked-item" key={`${experience.role}-${experience.organization}`}>
            <div className="item-head">
              <span className="item-title">{experience.role}</span>
              <span className="item-meta">
                {experience.organization} · {experience.period}
              </span>
            </div>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
