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
    <div className="pt-32">
      <div className="grid gap-12 md:gap-16 md:grid-cols-3 md:items-start">
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-7xl font-black mb-6 md:mb-8 text-black leading-tight tracking-tighter">
            PRINCE JOSHUA NGOJO
          </h1>
          <div className="border-l-8 border-black pl-6 md:pl-8 mb-8 md:mb-12">
            <p className="text-3xl md:text-4xl font-black text-black mb-6 tracking-tight">
              <span ref={typeRef} />
            </p>
          </div>
          <p className="text-lg md:text-xl font-bold text-black leading-relaxed mb-6 max-w-lg">
            Hey! I'm <span className="border-b-4 border-black">Joshua</span>, an AI/ML researcher and CS student building ethical, human-centered tech in <span className="border-b-4 border-black">Davao, Philippines</span>.
          </p>
          <p className="text-base md:text-lg font-semibold text-black leading-relaxed mb-12 max-w-lg">
            Check out my work below or download my CV to learn more.
          </p>
          <div className="flex gap-4 md:gap-6 flex-wrap items-center">
            <a
              href="https://github.com/josh-amir"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutalist-solid"
            >
              GitHub
            </a>
            <a
              href="/cv.pdf"
              download
              className="btn-brutalist"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="border-4 border-black">
            <img
              src="/images/josh.png"
              alt="Prince Joshua Ngojo"
              className="w-40 h-40 md:w-56 md:h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}





