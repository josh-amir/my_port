"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-gray-900">Get in Touch</h2>
      <p className="text-base md:text-lg font-serif text-gray-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
        I'm always interested in discussing <strong className="text-blue-600">research collaborations</strong>, <strong className="text-blue-600">meaningful projects</strong>, and conversations about AI, ethics, and social impact. Feel free to reach out!
      </p>

      <div className="mb-8 md:mb-12">
        <p className="text-sm md:text-base font-serif text-gray-600 mb-3">Email me directly</p>
        <a
          href="mailto:princengojo@g.cjc.edu.ph"
          className="inline-block text-base md:text-lg font-serif text-blue-600 hover:text-blue-800 font-medium break-all"
        >
          princengojo@g.cjc.edu.ph
        </a>
      </div>

      <div>
        <p className="text-sm md:text-base font-serif text-gray-600 mb-6">Or connect with me on</p>
        <div className="flex justify-center gap-8 md:gap-12 flex-wrap items-center">
          <a
            href="https://github.com/josh-amir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://linktr.ee/pjngojo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Linktree"
          >
            <SiLinktree size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
