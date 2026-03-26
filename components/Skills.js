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
      <h2 className="text-5xl md:text-7xl font-black mb-16 md:mb-20 text-black tracking-tighter border-b-4 border-[#A31F34] pb-6">SKILLS</h2>
      <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="border-l-8 border-[#A31F34] pl-6">
          <h3 className="font-black text-2xl text-black mb-8 tracking-wider uppercase border-b-4 border-[#A31F34] pb-3">Research & AI</h3>
          <ul className="space-y-3 text-base font-bold text-black">
            {researchSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-[#A31F34] pl-6">
          <h3 className="font-black text-2xl text-black mb-8 tracking-wider uppercase border-b-4 border-[#A31F34] pb-3">Engineering</h3>
          <ul className="space-y-3 text-base font-bold text-black">
            {engineeringSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-[#A31F34] pl-6">
          <h3 className="font-black text-2xl text-black mb-8 tracking-wider uppercase border-b-4 border-[#A31F34] pb-3">Volunteering</h3>
          <ul className="space-y-3 text-base font-bold text-black">
            {volunteeringExperience.map((experience) => (
              <li key={experience}>{experience}</li>
            ))}
          </ul>
        </div>
        <div className="border-l-8 border-[#A31F34] pl-6">
          <h3 className="font-black text-2xl text-black mb-8 tracking-wider uppercase border-b-4 border-[#A31F34] pb-3">Leadership</h3>
          <ul className="space-y-3 text-base font-bold text-black">
            {leadershipExperience.map((experience) => (
              <li key={experience}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

