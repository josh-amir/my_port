"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black mb-8 md:mb-12 text-black tracking-tighter">GET IN TOUCH</h2>
      <p className="text-xl md:text-2xl font-bold text-black mb-12 md:mb-20 max-w-3xl mx-auto leading-tight">
        I'm interested in discussing <span className="border-b-4 border-black">research collaborations</span>, <span className="border-b-4 border-black">meaningful projects</span>, and conversations about AI, ethics, and social impact. Let's connect.
      </p>

      <div className="mb-16 md:mb-24">
        <p className="text-xl font-black text-black mb-6 tracking-widest">EMAIL</p>
        <a
          href="mailto:princengojo@g.cjc.edu.ph"
          className="inline-block text-2xl md:text-3xl font-black text-black border-b-4 border-black pb-2 hover:opacity-70 transition-opacity"
        >
          PRINCENGOJO@G.CJC.EDU.PH
        </a>
      </div>

      <div>
        <p className="text-xl font-black text-black mb-8 tracking-widest">CONNECT ON</p>
        <div className="flex justify-center gap-12 md:gap-16 flex-wrap items-center">
          <a
            href="https://github.com/josh-amir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="GitHub"
          >
            <FaGithub size={48} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={48} />
          </a>
          <a
            href="https://linktr.ee/pjngojo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
            aria-label="Linktree"
          >
            <SiLinktree size={48} />
          </a>
        </div>
      </div>
    </div>
  );
}
