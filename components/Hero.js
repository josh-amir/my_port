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
          <p className="text-base md:text-lg font-serif text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-lg">
            I'm an <strong className="text-blue-600">AI/ML researcher</strong> and <strong className="text-blue-600">computer science student</strong> from <strong className="text-blue-600">Davao, Philippines</strong>. I build ethical, human-centered technology solutions. Explore my work to learn more about my research, projects, and vision.
          </p>
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





