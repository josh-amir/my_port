"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typeRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "AI & ML Researcher.",
        "CS Student.",
        "Civic Tech Builder.",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="pt-20">
      <div className="grid gap-8 md:gap-16 md:grid-cols-3 md:items-start">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 md:mb-6 text-gray-900 leading-tight">Prince Joshua Ngojo</h1>
          <p className="text-xl md:text-2xl font-serif text-gray-700 mb-6 md:mb-8 font-light">
            <span ref={typeRef} />
          </p>
          <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed mb-2 max-w-lg">
            Hey! I'm <strong className="text-blue-600">Joshua</strong>, an AI/ML researcher and CS student building ethical, human-centered tech in <strong className="text-blue-600">Davao, Philippines</strong>.
          </p>
          <p className="text-sm md:text-base font-serif text-gray-600 leading-relaxed mb-8 max-w-lg">
            Check out my work below or download my CV to learn more.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap items-center">
            <a
              href="https://github.com/josh-amir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded hover:bg-gray-700 transition-colors font-serif text-sm md:text-base font-medium"
            >
              View on GitHub
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 border-2 border-gray-900 text-gray-900 rounded hover:bg-gray-50 transition-colors font-serif text-sm md:text-base font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/josh.png"
            alt="Prince Joshua Ngojo"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}





