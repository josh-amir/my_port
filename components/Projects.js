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
    <div className="px-4 md:px-0">
      <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-20 text-black tracking-tighter border-b-4 border-[#A31F34] pb-4 md:pb-6">PROJECTS</h2>
      <ul className="space-y-8 md:space-y-16">
        {projects.map((project) => (
          <li key={project.title} className="border-l-8 border-[#A31F34] pl-4 md:pl-10 py-2 md:py-4 border-b-2 border-black pb-6 md:pb-8">
            <h3 className="font-black text-lg md:text-4xl text-black mb-3 md:mb-4 leading-tight tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-xl font-bold text-black leading-relaxed mb-4 md:mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-black bg-[#A31F34] text-white px-2 md:px-3 py-1 md:py-2 border-2 border-black uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 md:gap-8 flex-wrap text-xs md:text-lg font-black">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A31F34] border-b-4 border-[#A31F34] pb-1 hover:bg-[#A31F34] hover:text-white hover:border-black transition-all px-1 md:px-2"
                >
                  → CODE
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A31F34] border-b-4 border-[#A31F34] pb-1 hover:bg-[#A31F34] hover:text-white hover:border-black transition-all px-1 md:px-2"
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

