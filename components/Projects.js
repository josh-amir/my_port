"use client";

const projects = [
  {
    title: "Indoor Positioning System using Transfer Learning & WiFi RSSI (Thesis)",
    description: "How do you locate someone indoors when GPS doesn't work? My thesis explores using transfer learning to adapt models across different WiFi environments—making indoor localization more robust and practical with minimal retraining.",
    tags: ["Python", "TensorFlow", "WiFi RSSI", "Transfer Learning"],
    github: "https://github.com/josh-amir/indoor-positioning-system",
    demo: null
  },
  {
    title: "Coin Identifier Android App — Kotlin + Computer Vision",
    description: "Built an Android app that identifies Philippine coins in real-time using on-device computer vision. Designed for accessibility and learning—useful for people with visual impairments or kids learning currency.",
    tags: ["Kotlin", "Android", "Computer Vision"],
    github: "https://github.com/josh-amir/coin-identifier",
    demo: null
  },
  {
    title: "TaxEase Philippines — BIR Tax Automation SaaS",
    description: "Tax filing in the Philippines is complicated. TaxEase simplifies BIR compliance for small and medium enterprises through workflow automation, reducing errors and saving hours of administrative work.",
    tags: ["SaaS", "Automation", "FinTech"],
    github: "https://github.com/josh-amir/taxease",
    demo: "https://taxease.ph"
  },
  {
    title: "Legal Aid Chatbot — NLP for Underserved Communities",
    description: "Access to legal information shouldn't be a privilege. This NLP-powered chatbot provides free legal guidance in plain language for communities that can't afford traditional legal services.",
    tags: ["NLP", "Chatbot", "Social Impact"],
    github: "https://github.com/josh-amir/legal-aid-chatbot",
    demo: null
  },
  {
    title: "AR Campus Navigator — Unity + AR Foundation",
    description: "Campus navigation should be intuitive. Built an AR experience that helps students find buildings, rooms, and directions on campus—turning wayfinding into something more engaging and accessible.",
    tags: ["Unity", "AR Foundation", "C#", "Mobile"],
    github: "https://github.com/josh-amir/ar-campus-navigator",
    demo: null
  }
];

export default function Projects() {
  return (
    <div>
      <h2 className="text-5xl md:text-6xl font-black mb-12 md:mb-16 text-black tracking-tighter">PROJECTS</h2>
      <ul className="space-y-8 md:space-y-12">
        {projects.map((project) => (
          <li key={project.title} className="border-l-8 border-black pl-6 md:pl-8 py-4">
            <h3 className="font-black text-2xl md:text-3xl text-black mb-4 leading-tight">
              {project.title}
            </h3>
            <p className="text-lg md:text-xl font-semibold text-black leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm md:text-base font-bold bg-black text-white px-3 md:px-4 py-1.5 border-2 border-black">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-black border-b-4 border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  → CODE
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-black border-b-4 border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  → DEMO
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

