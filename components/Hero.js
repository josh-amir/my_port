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
    <div className="pt-20 md:pt-28 px-4 md:px-0">
      <div className="grid gap-8 md:gap-20 md:grid-cols-3 md:items-start">
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-8xl font-black mb-4 md:mb-8 text-black leading-tight tracking-tighter">
            PRINCE<br className="hidden md:block" /> <span className="text-[#A31F34] block md:inline">JOSHUA</span><br className="md:hidden" /> NGOJO
          </h1>
          <div className="border-l-8 border-[#A31F34] pl-4 md:pl-8 mb-6 md:mb-12 py-2">
            <p className="text-2xl md:text-4xl font-black text-black mb-2 md:mb-4 tracking-tighter">
              <span ref={typeRef} />
            </p>
          </div>
          <p className="text-base md:text-xl font-bold text-black leading-relaxed mb-4 md:mb-6">
            I'm an <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">AI/ML researcher</span> and <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">CS student</span> building ethical, human-centered technology in <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">Davao, Philippines</span>.
          </p>
          <p className="text-sm md:text-lg font-bold text-black leading-relaxed mb-8 md:mb-10">
            Explore my work below or download my CV.
          </p>
          <div className="flex gap-3 md:gap-6 flex-wrap items-center">
            <a
              href="https://github.com/josh-amir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-3 border-3 border-[#A31F34] bg-[#A31F34] text-white font-black text-xs md:text-sm tracking-wider uppercase hover:bg-black hover:border-black transition-all"
            >
              GITHUB
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-4 md:px-6 py-2 md:py-3 border-3 border-black text-black font-black text-xs md:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all"
            >
              CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="border-4 border-[#A31F34] p-1">
            <div className="border-2 border-black">
              <img
                src="/images/josh.png"
                alt="Prince Joshua Ngojo"
                className="w-40 h-40 md:w-64 md:h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





