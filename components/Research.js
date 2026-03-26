"use client";

export default function Research() {
  return (
    <div>
      <div id="research" />
      <div className="grid gap-12 md:gap-16 grid-cols-1 md:grid-cols-2">
        <div className="border-l-8 border-black pl-6 md:pl-8">
          <h2 className="text-5xl md:text-6xl font-black mb-8 md:mb-12 text-black tracking-tighter">ABOUT</h2>
          <div className="space-y-6 md:space-y-8 text-lg md:text-xl font-semibold text-black leading-relaxed">
            <p>
              I'm deeply interested in the intersection of <span className="border-b-4 border-black">technology</span>, <span className="border-b-4 border-black">ethics</span>, <span className="border-b-4 border-black">law</span>, and <span className="border-b-4 border-black">philosophy</span>. My work focuses on AI ethics, responsible AI design, and building transparent, trustworthy systems that respect human rights and dignity.
            </p>
            <p>
              My thesis explores <span className="border-b-4 border-black">indoor positioning systems</span> using <span className="border-b-4 border-black">transfer learning</span>—making location tracking more robust and practical. But the deeper questions drive me: How do we design AI that's fair? How do we create digital governance tools that empower rather than surveil?
            </p>
            <p>
              My passion is building <span className="border-b-4 border-black">rigorous AI research</span> that tackles real challenges in the <span className="border-b-4 border-black">Philippines</span> while contributing to global conversations on equitable technology and inclusive design.
            </p>
            <p>
              Outside of research, I love reading philosophy and policy, writing about tech and society, podcasting, and debating ideas. Feel free to reach out via the contact page to connect!
            </p>
          </div>
        </div>
        <div className="border-l-8 border-black pl-6 md:pl-8 pt-6 md:pt-0">
          <h3 className="font-black text-3xl md:text-4xl mb-8 md:mb-12 text-black tracking-tighter">EDUCATION</h3>
          <div className="space-y-6">
            <div>
              <p className="text-2xl md:text-3xl font-black text-black mb-3">BS COMPUTER SCIENCE</p>
              <p className="text-lg font-bold text-black">3rd Year</p>
            </div>
            <div className="border-t-4 border-black pt-6">
              <p className="text-xl md:text-2xl font-black text-black">DAVAO, PHILIPPINES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


