const researchSkills = [
  "Machine Learning",
  "Transfer Learning",
  "Natural Language Processing",
  "AI Ethics & Responsible AI",
  "Data Analysis",
  "Research Writing"
];

const engineeringSkills = [
  "Python",
  "TensorFlow",
  "Kotlin",
  "Next.js",
  "SQL & Data Modeling",
  "API Design"
];

const volunteeringExperience = [
  "Red Cross Youth Philippines",
  "Disaster Risk Reduction",
  "Community Outreach",
  "Emergency Response",
  "Health & Safety Education",
  "Youth Leadership"
];

const leadershipExperience = [
  "CCIS Deputy Academic Secretary",
  "Academic Planning & Coordination",
  "Student Leadership",
  "Department Advocacy",
  "Event Organization",
  "Stakeholder Communication"
];

export default function Skills() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Competencies</p>
        <h2>Skills</h2>
        <p className="section-lead">Research, engineering, and leadership.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">Research & AI</h3>
          <ul className="tag-list">
            {researchSkills.map((skill) => (
              <li className="tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">Engineering</h3>
          <ul className="tag-list">
            {engineeringSkills.map((skill) => (
              <li className="tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">Volunteering</h3>
          <ul className="tag-list">
            {volunteeringExperience.map((experience) => (
              <li className="tag" key={experience}>
                {experience}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">Leadership</h3>
          <ul className="tag-list">
            {leadershipExperience.map((experience) => (
              <li className="tag" key={experience}>
                {experience}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
