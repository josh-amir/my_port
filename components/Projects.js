"use client";

const projects = [
  {
    title: "Indoor Positioning System using Transfer Learning & WiFi RSSI (Thesis)",
    description: "How do you locate someone indoors when GPS doesn't work? My thesis explores using transfer learning to adapt models across different WiFi environments—making indoor localization more robust and practical with minimal retraining.",
    tags: ["Python", "TensorFlow", "WiFi RSSI", "Transfer Learning"],
    href: "#"
  },
  {
    title: "Coin Identifier Android App — Kotlin + Computer Vision",
    description: "Built an Android app that identifies Philippine coins in real-time using on-device computer vision. Designed for accessibility and learning—useful for people with visual impairments or kids learning currency.",
    tags: ["Kotlin", "Android", "Computer Vision"],
    href: "#"
  },
  {
    title: "TaxEase Philippines — BIR Tax Automation SaaS",
    description: "Tax filing in the Philippines is complicated. TaxEase simplifies BIR compliance for small and medium enterprises through workflow automation, reducing errors and saving hours of administrative work.",
    tags: ["SaaS", "Automation", "FinTech"],
    href: "#"
  },
  {
    title: "Legal Aid Chatbot — NLP for Underserved Communities",
    description: "Access to legal information shouldn't be a privilege. This NLP-powered chatbot provides free legal guidance in plain language for communities that can't afford traditional legal services.",
    tags: ["NLP", "Chatbot", "Social Impact"],
    href: "#"
  },
  {
    title: "AR Campus Navigator — Unity + AR Foundation",
    description: "Campus navigation should be intuitive. Built an AR experience that helps students find buildings, rooms, and directions on campus—turning wayfinding into something more engaging and accessible.",
    tags: ["Unity", "AR Foundation", "C#", "Mobile"],
    href: "#"
  }
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 md:mb-10 text-gray-900">Projects</h2>
      <ul className="space-y-6 md:space-y-8">
        {projects.map((project) => (
          <li key={project.title} className="border-b border-gray-200 pb-6 md:pb-8">
            <h3 className="font-serif text-lg md:text-xl font-light text-gray-900 mb-2 md:mb-3"><strong className="text-blue-600">{project.title}</strong></h3>
            <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed mb-3 md:mb-4">{project.description}</p>
            <p className="text-sm md:text-base font-serif text-gray-600 flex flex-wrap gap-2">{project.tags.join(" • ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

