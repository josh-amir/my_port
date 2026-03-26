"use client";

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
      <h2 className="text-4xl font-serif font-light mb-10 text-gray-900">Skills</h2>
      <div className="grid gap-16 md:grid-cols-4">
        <div>
          <h3 className="font-serif font-light text-2xl text-gray-900 mb-6">Research & AI</h3>
          <ul className="space-y-3 text-lg font-serif text-gray-700">
            {researchSkills.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif font-light text-2xl text-gray-900 mb-6">Engineering</h3>
          <ul className="space-y-3 text-lg font-serif text-gray-700">
            {engineeringSkills.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif font-light text-2xl text-gray-900 mb-6">Volunteering</h3>
          <ul className="space-y-3 text-lg font-serif text-gray-700">
            {volunteeringExperience.map((experience) => (
              <li key={experience}>• {experience}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif font-light text-2xl text-gray-900 mb-6">Leadership</h3>
          <ul className="space-y-3 text-lg font-serif text-gray-700">
            {leadershipExperience.map((experience) => (
              <li key={experience}>• {experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

