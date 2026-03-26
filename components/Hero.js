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
    <div>
      <div className="grid gap-16 md:grid-cols-3 md:items-start">
        <div className="md:col-span-2">
          <h1 className="text-6xl font-serif font-light mb-6 text-gray-900 leading-tight">Prince Joshua Ngojo</h1>
          <p className="text-2xl font-serif text-gray-700 mb-8 font-light">
            <span ref={typeRef} />
          </p>
          <p className="text-lg font-serif text-gray-700 leading-relaxed mb-8 max-w-lg">
            Hey, I'm <strong className="text-blue-600">Joshua</strong>. I'm an <strong className="text-blue-600">AI/ML researcher</strong> and <strong className="text-blue-600">computer science student</strong> from <strong className="text-blue-600">the Philippines</strong> exploring how technology can drive meaningful social change. I believe in building solutions that are <strong className="text-blue-600">not just technically sound, but ethically grounded</strong> and accessible to everyone.
          </p>
          <p className="text-lg font-serif text-gray-700 leading-relaxed mb-8 max-w-lg">
            Right now, I'm working on my thesis about <strong className="text-blue-600">indoor positioning systems</strong> using <strong className="text-blue-600">transfer learning</strong>. Beyond research, I'm passionate about <strong className="text-blue-600">AI ethics</strong>, <strong className="text-blue-600">digital governance</strong>, and how <strong className="text-blue-600">law and philosophy</strong> shape responsible technology. When I'm not coding, you'll find me reading, writing, podcasting, or engaging in good debates.
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center md:justify-end">
          <img
            src="/images/josh.png"
            alt="Prince Joshua Ngojo"
            className="w-56 h-56 rounded-full object-cover border-2 border-gray-300 shadow-md"
          />
        </div>
      </div>
    </div>
  );
}





