"use client";

const experiences = [
  {
    role: "Research Assistant - AI/ML",
    organization: "University of Davao",
    period: "2023 - Present",
    description: "Conducting research on indoor positioning systems using transfer learning. Developed WiFi RSSI-based models achieving 95% accuracy across multiple environments.",
    highlights: ["Transfer Learning", "Python", "TensorFlow", "Research"]
  },
  {
    role: "Deputy Academic Secretary",
    organization: "College of Computer and Information Sciences",
    period: "2022 - Present",
    description: "Led academic planning and coordination for CS department. Organized seminars, managed student affairs, and facilitated departmental advocacy.",
    highlights: ["Leadership", "Coordination", "CS Advocacy", "Planning"]
  },
  {
    role: "Volunteer - Red Cross Youth Philippines",
    organization: "Philippine Red Cross",
    period: "2021 - Present",
    description: "Active volunteer in disaster risk reduction and community outreach. Conducted health and safety education workshops reaching 500+ community members.",
    highlights: ["Community Service", "Health Education", "DRR", "Outreach"]
  }
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 md:mb-10 text-gray-900">Experience</h2>
      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-l-4 border-blue-600 pl-6 md:pl-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-2">
              <div>
                <h3 className="text-lg md:text-xl font-serif font-light text-gray-900">
                  <strong className="text-blue-600">{exp.role}</strong>
                </h3>
                <p className="text-base md:text-lg font-serif text-gray-600">{exp.organization}</p>
              </div>
              <p className="text-sm md:text-base font-serif text-gray-500 whitespace-nowrap">{exp.period}</p>
            </div>
            <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed mb-3 md:mb-4">
              {exp.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {exp.highlights.map((tag) => (
                <span key={tag} className="text-xs md:text-sm font-serif bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
