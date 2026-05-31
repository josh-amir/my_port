export default function Research() {
  return (
      <div>
        <div className="section-header">
          <p className="section-kicker">About</p>
          <h2>Research profile</h2>
          <p className="section-lead">
            AI/ML student focused on human-centered, ethical, and useful systems.
          </p>
        </div>

        <div className="split-grid">
          <div>
            <p>
              I explore the intersection of <strong>technology, ethics, policy, and philosophy</strong>,
              aiming to bridge AI research with real community needs.
            </p>

            <p>
              My thesis focuses on <strong>Filipino Sign Language (FSL) recognition</strong> and asks a
              core question: <em>How do we design AI systems that are fair, transparent, and beneficial?</em>
            </p>

            <p>
              I build ML prototypes, data-driven apps, and research summaries that turn complex problems
              into clear, testable solutions.
            </p>

            <div className="panel" style={{ marginTop: "16px" }}>
              <h3>What I can help with</h3>
              <ul className="item-highlights">
                <li>Applied ML prototypes and model evaluation.</li>
                <li>Data preparation, analysis, and documentation.</li>
                <li>Accessible, user-centered software delivery.</li>
              </ul>
            </div>
          </div>

          <div className="panel">
            <h3>Education</h3>

            <div className="edu-item">
              <strong>BS Computer Science</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                Cor Jesu College &bull; <em>3rd Year</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Specialized coursework in data science, machine learning, and AI systems. Active participation in
                research projects focused on real-world applications and ethical considerations in technology.
              </p>
            </div>

            <div className="edu-item">
              <strong>STEM Strand</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                University of Mindanao, Digos &bull; <em>SHS GPA: 4.00 / 4.00</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Completed senior high school with distinction in STEM track. Developed foundational knowledge in
                advanced mathematics, physics, and chemistry with emphasis on research methodologies and scientific inquiry.
              </p>
            </div>

            <div className="edu-item">
              <strong>SPFL – Mandarin</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                Digos City National High School &bull; <em>With Honors</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Graduated with honors. Studied Mandarin Chinese alongside core academic subjects. Strong foundation in
                language learning and cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}