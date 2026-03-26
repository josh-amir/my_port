"use client";

const labsContent = [
  {
    category: "SUBSTACKS & BLOGS",
    items: [
      {
        title: "Latest Blog Post",
        description: "Recent insights and explorations on technology, research, and digital innovation.",
        link: "https://substack.com/@amirstoic/p-154195873",
        cta: "READ"
      },
      {
        title: "All Notes & Articles",
        description: "Browse all my Substack notes, research insights, and technical write-ups.",
        link: "https://substack.com/@amirstoic/notes",
        cta: "READ"
      }
    ]
  },
  {
    category: "PODCAST",
    items: [
      {
        title: "Latest Episode",
        description: "Tech & Society conversations exploring AI, ethics, policy, and technology's impact on communities.",
        link: "https://open.spotify.com/episode/6RufqmFBDQ7uL8Rozys22T?si=yCYB1OmaRmua6eh0gf1J0w",
        cta: "LISTEN"
      }
    ]
  },
  {
    category: "SHORT FILMS",
    items: [
      {
        title: "Coming Soon",
        description: "Visual storytelling exploring technology's impact on communities in the Global South.",
        link: "#",
        cta: "WATCH"
      }
    ]
  }
];

export default function Labs() {
  return (
    <div>
      <h2 className="text-5xl md:text-8xl font-black mb-12 md:mb-20 text-black tracking-tighter border-b-8 border-[#A31F34] pb-6 md:pb-8 uppercase">LABS</h2>
      <p className="text-base md:text-xl font-bold text-black mb-12 md:mb-20 max-w-3xl">
        Exploring ideas through writing, conversations, and visual storytelling. A collection of my substacks, podcast episodes, and short films where I share research, insights, and creative work.
      </p>

      <div className="space-y-16 md:space-y-24">
        {labsContent.map((lab, idx) => (
          <div key={idx}>
            <h3 className="text-3xl md:text-5xl font-black text-black mb-8 md:mb-12 tracking-tighter uppercase border-b-8 border-[#A31F34] pb-4 md:pb-6">
              {lab.category}
            </h3>

            <div className="grid gap-8 md:gap-12 border-l-8 border-[#A31F34] pl-6 md:pl-10">
              {lab.items.map((item, itemIdx) => (
                <div key={itemIdx} className="border-2 border-black p-6 md:p-8 hover:border-4 hover:border-[#A31F34] transition-all duration-500 ease-in-out hover:shadow-xl">
                  <h4 className="text-xl md:text-2xl font-black text-black mb-3 tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg font-bold text-black mb-6">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 md:px-6 py-2 md:py-3 border-3 border-[#A31F34] text-[#A31F34] font-black text-xs md:text-sm tracking-widest uppercase transition-all duration-500 ease-in-out hover:bg-[#A31F34] hover:text-white hover:border-[#A31F34]"
                  >
                    {item.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


