const awards = [

  {
    title: "Champion- Short Film for The Session",
    issuer: "CJC Intramurals 2024 Short Film Competition",
    year: "2024",
    description: "Won Champion award for 'The Session' - showcasing creative storytelling and production excellence"
  },
  {
    title: "Best Actor",
    issuer: "SIP Short Film Festival",
    year: "2023",
    description: "Won Best Actor award for standout performance in 'Four-Saken Truth'"
  },
  {
    title: "Best Short Film",
    issuer: "SIP Short Film Festival",
    year: "2023",
    description: "Won Best Short Film award for 'Four-saken Truth' - a compelling narrative exploring complex human relationships"
  },
];

export default function Awards() {
  return (
    <div>
      <div className="section-header">
        <p className="section-kicker">Recognition</p>
        <h2>Awards</h2>
        <p className="section-lead">Academic and professional highlights.</p>
      </div>

      <ul className="stacked-list">
        {awards.map((award) => (
          <li className="stacked-item" key={`${award.title}-${award.year}`}>
            <div className="item-head">
              <span className="item-title">{award.title}</span>
              <span className="item-meta">
                {award.issuer} · {award.year}
              </span>
            </div>
            <p>{award.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
