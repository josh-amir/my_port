"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-6xl md:text-7xl font-black mb-8 md:mb-12 text-black tracking-tighter border-b-4 border-[#A31F34] pb-8">GET IN <span className="text-[#A31F34]">TOUCH</span></h2>
      <p className="text-xl md:text-2xl font-bold text-black mb-16 md:mb-28 max-w-3xl mx-auto leading-tight">
        I'm interested in discussing <span className="text-[#A31F34] font-black">research collaborations</span>, <span className="text-[#A31F34] font-black">meaningful projects</span>, and conversations about AI, ethics, and social impact.
      </p>

      <div className="mb-20 md:mb-32 border-l-8 border-[#A31F34] pl-8">
        <p className="text-sm font-black text-black mb-6 tracking-widest uppercase">Email</p>
        <a
          href="mailto:princengojo@g.cjc.edu.ph"
          className="inline-block text-lg md:text-5xl font-black text-black border-b-4 border-[#A31F34] pb-3 md:pb-5 hover:text-[#A31F34] transition-all duration-300 ease-in-out tracking-tight break-all uppercase transform hover:scale-105"
        >
          PRINCENGOJO@G.CJC.EDU.PH
        </a>
      </div>

      <div className="border-l-8 border-[#A31F34] pl-8">
        <p className="text-sm font-black text-black mb-10 tracking-widest uppercase">Connect</p>
        <div className="flex justify-center gap-12 md:gap-16 flex-wrap items-center">
          <a
            href="https://github.com/josh-amir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A31F34] hover:text-black transition-all duration-300 ease-in-out border-4 border-[#A31F34] p-3 hover:border-black transform hover:scale-125 hover:shadow-lg"
            aria-label="GitHub"
          >
            <FaGithub size={56} />
          </a>
          <a
            href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A31F34] hover:text-black transition-all duration-300 ease-in-out border-4 border-[#A31F34] p-3 hover:border-black transform hover:scale-125 hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={56} />
          </a>
          <a
            href="https://linktr.ee/pjngojo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A31F34] hover:text-black transition-all duration-300 ease-in-out border-4 border-[#A31F34] p-3 hover:border-black transform hover:scale-125 hover:shadow-lg"
            aria-label="Linktree"
          >
            <SiLinktree size={56} />
          </a>
        </div>
      </div>
    </div>
  );
}
