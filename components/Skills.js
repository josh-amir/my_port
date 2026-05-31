const researchSkills = [
  "Machine Learning",
  "Transfer Learning",
  "Natural Language Processing",
  "AI Ethics & Responsible AI",
  "Data Analysis",
  "Research Writing",
  "Experiment Design"
];

const engineeringSkills = [
  "Python",
  "TensorFlow",
  "Kotlin",
  "Next.js",
  "SQL & Data Modeling",
  "API Design",
  "Java",
  "JavaFX",
  "HTML/CSS/JS"
];

const workflowSkills = [
  "Project Planning",
  "User-centered Design",
  "Documentation",
  "Team Collaboration",
  "Mentoring & Support",
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
          <h3 className="card-title">Workflow & leadership</h3>
          <ul className="tag-list">
            {workflowSkills.map((skill) => (
              <li className="tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
