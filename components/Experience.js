const experiences = [
  {
    role: "Deputy Academic Secretary",
    organization: "CJC - College of Computing and Information Sciences",
    period: "2025 - Present",
    description:
      "Lead academic planning, curriculum compliance monitoring, and departmental coordination for computing students.",
    highlights: [
      "Coordinate academic seminars and technical symposiums.",
      "Advocate for student-driven tech policies and welfare initiatives.",
      "Align stakeholders across faculty, staff, and student groups.",
    ],
  },
  {
    role: "College Red Cross Youth Volunteer",
    organization: "Cor Jesu College",
    period: "2025 - Present",
    description:
      "Coordinate community outreach, public health campaigns, and disaster response support with tight timelines.",
    highlights: [
      "Manage field communications during regional response efforts.",
      "Support logistics and resource distribution in critical operations.",
    ],
  },
  {
    role: "ICT Student Assistant",
    organization: "Cor Jesu College",
    period: "2023 - 2024",
    description:
      "Provided front-line technical support and hardware diagnostics for campus infrastructure.",
    highlights: [
      "Configured systems, resolved network issues, and reduced downtime.",
      "Maintained lab hardware readiness for classes and events.",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Experience</p>
        <h2>Academic & leadership roles</h2>
        <p className="section-lead">
          Primary roles in departmental governance, technical support, and
          community operations.
        </p>
      </div>

      <ul className="stacked-list">
        {experiences.map((experience) => (
          <li
            className="stacked-item"
            key={`${experience.role}-${experience.organization}`}
          >
            <div className="item-head">
              <span className="item-title">{experience.role}</span>
              <span className="item-meta">
                {experience.organization} · {experience.period}
              </span>
            </div>
            <p className="item-description">{experience.description}</p>
            {experience.highlights?.length > 0 && (
              <ul className="item-highlights">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}