"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-3 md:px-6 py-4 md:py-6 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-3xl font-black text-black hover:text-[#A31F34] transition-colors no-underline tracking-tighter">
          PRINCE JOSHUA
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-1 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-1 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-sm md:text-base font-black tracking-wider uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`pb-1 transition-all border-b-4 no-underline ${
                pathname === link.href
                  ? "border-b-4 border-[#A31F34] text-[#A31F34]"
                  : "border-b-4 border-transparent text-black hover:text-[#A31F34] hover:border-[#A31F34]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-2 border-black md:hidden">
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-base font-bold pb-1 border-b-2 no-underline ${
                    pathname === link.href
                      ? "border-b-3 border-[#A31F34] text-[#A31F34]"
                      : "border-b-2 border-transparent text-black"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


