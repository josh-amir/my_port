"use client";

import { useState } from "react";

const projects = [
  {
    title: "Indoor Positioning System using Transfer Learning & WiFi RSSI (Thesis)",
    description: "How do you locate someone indoors when GPS doesn't work? My thesis explores using transfer learning to adapt models across different WiFi environments—making indoor localization more robust and practical with minimal retraining.",
    tags: ["Python", "TensorFlow", "WiFi RSSI", "Transfer Learning"],
    github: "https://github.com/josh-amir/indoor-positioning-system",
    demo: null,
    status: "in-development"
  },
  {
    title: "Coin Identifier Android App — Kotlin + Computer Vision",
    description: "Built an Android app that identifies Philippine coins in real-time using on-device computer vision. Designed for accessibility and learning—useful for people with visual impairments or kids learning currency.",
    tags: ["Kotlin", "Android", "Computer Vision"],
    github: "https://github.com/josh-amir/coin-identifier",
    demo: null,
    status: "done"
  },
  {
    title: "TaxEase Philippines — BIR Tax Automation SaaS",
    description: "Tax filing in the Philippines is complicated. TaxEase simplifies BIR compliance for small and medium enterprises through workflow automation, reducing errors and saving hours of administrative work.",
    tags: ["SaaS", "Automation", "FinTech"],
    github: "https://github.com/josh-amir/taxease",
    demo: "https://taxease.ph",
    status: "in-development"
  },
  {
    title: "Legal Aid Chatbot — NLP for Underserved Communities",
    description: "Access to legal information shouldn't be a privilege. This NLP-powered chatbot provides free legal guidance in plain language for communities that can't afford traditional legal services.",
    tags: ["NLP", "Chatbot", "Social Impact"],
    github: "https://github.com/josh-amir/legal-aid-chatbot",
    demo: null,
    status: "done"
  },
  {
    title: "AR Campus Navigator — Unity + AR Foundation",
    description: "Campus navigation should be intuitive. Built an AR experience that helps students find buildings, rooms, and directions on campus—turning wayfinding into something more engaging and accessible.",
    tags: ["Unity", "AR Foundation", "C#", "Mobile"],
    github: "https://github.com/josh-amir/ar-campus-navigator",
    demo: null,
    status: "done"
  }
];

const filters = [
  { id: "all", label: "ALL PROJECTS" },
  { id: "in-development", label: "IN DEVELOPMENT" },
  { id: "done", label: "COMPLETED" }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.status === activeFilter);

  return (
    <div>
      <h2 className="text-5xl md:text-7xl font-black mb-14 md:mb-20 text-black tracking-tighter border-b-4 border-[#A31F34] pb-6">PROJECTS</h2>

      {/* Filter Navigation */}
      <div className="mb-12 md:mb-16 flex flex-wrap gap-4 border-b-2 border-black pb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`font-black text-sm md:text-base uppercase tracking-wider border-2 px-4 py-2 md:px-6 md:py-3 transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black hover:bg-gray-100"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      {filteredProjects.length > 0 ? (
        <ul className="space-y-12 md:space-y-16">
          {filteredProjects.map((project) => (
            <li key={project.title} className="border-l-8 border-[#A31F34] pl-6 md:pl-10 py-4 border-b-2 border-black pb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-black text-2xl md:text-4xl text-black leading-tight tracking-tight">
                  {project.title}
                </h3>
                <span className={`font-black text-xs md:text-sm uppercase tracking-wide px-3 py-1 border-2 flex-shrink-0 ${
                  project.status === "in-development"
                    ? "bg-yellow-100 border-black text-black"
                    : "bg-green-100 border-black text-black"
                }`}>
                  {project.status === "in-development" ? "IN DEV" : "DONE"}
                </span>
              </div>
              <p className="text-lg md:text-xl font-bold text-black leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs md:text-sm font-black bg-[#A31F34] text-white px-3 py-2 border-2 border-black uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-8 flex-wrap text-base md:text-lg font-black">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A31F34] border-b-4 border-[#A31F34] pb-1 hover:bg-[#A31F34] hover:text-white hover:border-black transition-all duration-500 ease-in-out px-2"
                  >
                    → CODE
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A31F34] border-b-4 border-[#A31F34] pb-1 hover:bg-[#A31F34] hover:text-white hover:border-black transition-all duration-500 ease-in-out px-2"
                  >
                    → DEMO
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl md:text-2xl font-black text-black">NO PROJECTS FOUND</p>
        </div>
      )}
    </div>
  );
}

