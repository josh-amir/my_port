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
      <h2 className="text-5xl md:text-6xl font-black mb-12 md:mb-16 text-black tracking-tighter">SKILLS</h2>
      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-l-8 border-black pl-6">
          <h3 className="font-black text-2xl text-black mb-6">RESEARCH & AI</h3>
          <ul className="space-y-3 text-lg font-bold text-black">
            {researchSkills.map((skill) => (
              <li key={skill}>■ {skill}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-black pl-6">
          <h3 className="font-black text-2xl text-black mb-6">ENGINEERING</h3>
          <ul className="space-y-3 text-lg font-bold text-black">
            {engineeringSkills.map((skill) => (
              <li key={skill}>■ {skill}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-black pl-6">
          <h3 className="font-black text-2xl text-black mb-6">VOLUNTEERING</h3>
          <ul className="space-y-3 text-lg font-bold text-black">
            {volunteeringExperience.map((experience) => (
              <li key={experience}>■ {experience}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-black pl-6">
          <h3 className="font-black text-2xl text-black mb-6">LEADERSHIP</h3>
          <ul className="space-y-3 text-lg font-bold text-black">
            {leadershipExperience.map((experience) => (
              <li key={experience}>■ {experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

