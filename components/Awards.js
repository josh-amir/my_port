"use client";

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
      <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 md:mb-10 text-gray-900">Awards & Recognition</h2>
      <div className="grid gap-6 md:gap-8">
        {awards.map((award, idx) => (
          <div key={idx} className="p-4 md:p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 md:gap-4 mb-2">
              <div>
                <h3 className="text-base md:text-lg font-serif font-light text-gray-900">
                  <strong className="text-blue-600">{award.title}</strong>
                </h3>
                <p className="text-sm md:text-base font-serif text-gray-600">{award.issuer}</p>
              </div>
              <p className="text-xs md:text-sm font-serif text-gray-500 whitespace-nowrap">{award.year}</p>
            </div>
            <p className="text-sm md:text-base font-serif text-gray-700">{award.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
