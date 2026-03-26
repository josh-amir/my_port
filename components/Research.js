"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

export default function Research() {
  return (
    <div>
      <div id="research" />
      <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 md:mb-6 text-gray-900">About</h2>
          <div className="space-y-4 md:space-y-6 text-base md:text-lg font-serif text-gray-700 leading-relaxed">
            <p>
              I'm deeply interested in the intersection of <strong className="text-blue-600">technology</strong>, <strong className="text-blue-600">ethics</strong>, <strong className="text-blue-600">law</strong>, and <strong className="text-blue-600">philosophy</strong>. My work focuses on <strong className="text-blue-600">AI ethics</strong>, <strong className="text-blue-600">responsible AI design</strong>, and building <strong className="text-blue-600">transparent, trustworthy systems</strong> that respect human rights and dignity.
            </p>
            <p>
              My thesis explores <strong className="text-blue-600">indoor positioning systems</strong> using <strong className="text-blue-600">transfer learning</strong>—making location tracking more robust and practical. But the deeper questions drive me: How do we design AI that's fair? How do we create <strong className="text-blue-600">digital governance tools</strong> that empower rather than surveil? What does responsible technology look like in the Global South?
            </p>
            <p>
              My passion is building <strong className="text-blue-600">rigorous AI research</strong> that tackles real challenges in the <strong className="text-blue-600">Philippines</strong> while contributing to global conversations on <strong className="text-blue-600">equitable technology</strong> and <strong className="text-blue-600">inclusive design</strong>.
            </p>
            <p>
              Outside of research, I love <strong className="text-blue-600">reading</strong> philosophy and policy, <strong className="text-blue-600">writing</strong> about tech and society, <strong className="text-blue-600">podcasting</strong>, and <strong className="text-blue-600">debating</strong> ideas. Check out my work on <a href="https://linktr.ee/pjngojo" className="text-blue-600 hover:text-blue-800 underline">Linktree</a> to see what I'm exploring.
            </p>
          </div>
          <div className="flex gap-4 md:gap-6 mt-6 md:mt-8">
            <a
              href="https://github.com/josh-amir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} className="md:w-7 md:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-joshua-ngojo-8737b2314/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} className="md:w-7 md:h-7" />
            </a>
            <a
              href="https://linktr.ee/pjngojo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Linktree"
            >
              <SiLinktree size={24} className="md:w-7 md:h-7" />
            </a>
          </div>
        </div>
        <div className="border-l-2 border-gray-300 pl-4 md:pl-8 pt-4 md:pt-0">
          <h3 className="font-serif font-light text-xl md:text-2xl mb-4 md:mb-6 text-gray-900">Education</h3>
          <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed mb-3"><strong className="text-blue-600">BS Computer Science</strong>, 3rd Year</p>
          <p className="text-sm md:text-base font-serif text-gray-500 mt-3">Davao, Philippines</p>
        </div>
      </div>
    </div>
  );
}


