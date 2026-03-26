"use client";

export default function Research() {
  return (
    <div>
      <div id="research" />
      <div className="grid gap-10 md:gap-16 grid-cols-1 md:grid-cols-2 px-4 md:px-0">
        <div className="border-l-8 border-[#A31F34] pl-4 md:pl-8">
          <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-10 text-black tracking-tighter border-b-4 border-[#A31F34] pb-4 md:pb-6">ABOUT</h2>
          <div className="space-y-4 md:space-y-8 text-base md:text-lg font-bold text-black leading-relaxed">
            <p>
              I'm deeply interested in the intersection of <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">technology</span>, <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">ethics</span>, <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">law</span>, and <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">philosophy</span>. My work focuses on AI ethics, responsible AI design, and building transparent, trustworthy systems.
            </p>
            <p>
              My thesis explores <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">indoor positioning systems</span> using <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">transfer learning</span>. How do we design AI that's fair? How do we create digital governance tools that empower?
            </p>
            <p>
              My passion is building <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">rigorous AI research</span> that tackles real challenges in the <span className="text-[#A31F34] font-black border-b-4 border-[#A31F34]">Philippines</span> while contributing to global conversations on equitable technology.
            </p>
            <p>
              Outside of research, I love reading philosophy and policy, writing about tech and society, podcasting, and debating ideas.
            </p>
          </div>
        </div>
        <div className="border-l-8 border-[#A31F34] pl-4 md:pl-8 pt-8 md:pt-0">
          <h3 className="font-black text-4xl md:text-6xl mb-6 md:mb-10 text-black tracking-tighter border-b-4 border-[#A31F34] pb-4 md:pb-6">EDUCATION</h3>
          <div className="space-y-6 md:space-y-8">
            <div>
              <p className="text-lg md:text-3xl font-black text-black mb-2">BS COMPUTER SCIENCE</p>
              <p className="text-base md:text-xl font-black text-[#A31F34]">3RD YEAR</p>
            </div>
            <div className="border-t-4 border-[#A31F34] pt-6 md:pt-8">
              <p className="text-xl md:text-4xl font-black text-[#A31F34] tracking-tighter">DAVAO, PHILIPPINES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


