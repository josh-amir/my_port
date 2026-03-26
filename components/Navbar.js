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
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl md:text-3xl font-black text-black hover:opacity-70 transition-opacity">
          PRINCE JOSHUA NGOJO
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-1.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
          <span className={`w-6 h-1.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg font-black">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`border-b-4 pb-2 transition-all ${
                pathname === link.href
                  ? "border-b-4 border-black text-black"
                  : "border-b-4 border-transparent hover:border-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b-4 border-black md:hidden">
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-lg font-black border-b-4 pb-2 ${
                    pathname === link.href
                      ? "border-b-4 border-black text-black"
                      : "border-b-4 border-transparent"
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


