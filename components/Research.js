export default function Research() {
  return (
      <div>
        <div className="section-header">
          <p className="section-kicker">Profile</p>
          <h2>Research profile</h2>
          <p className="section-lead">
            Focused on the intersection of AI, ethics, policy, and human-centered
            systems.
          </p>
        </div>

        <div className="split-grid">
          <div>
            <p>
              I explore the intersection of <strong>technology, ethics, policy, and philosophy</strong>, aiming to bridge the gap between AI, the humanities, and law.
            </p>

            <p>
              My thesis focuses on <strong>Filipino Sign Language (FSL) Recognition</strong>. It asks a core question: <em>How do we design AI systems that are fair, transparent, and beneficial to local communities?</em>
            </p>

            <p>
              My goal is to build rigorous research that solves <strong>real-world challenges in the Philippines</strong> while advancing global conversations on <em>equitable, human-centered technology</em>.
            </p>

            <p>
              Outside of research, I read policy papers, write about tech and society, podcast, and debate ideas.
            </p>
          </div>

          <div className="panel">
            <h3>Education</h3>

            <div className="edu-item">
              <strong>BS Computer Science</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                Cor Jesu College &bull; <em>3rd Year</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Specialized coursework in data science, machine learning, and AI systems. Active participation in research projects focused on real-world applications and ethical considerations in technology.
              </p>
            </div>

            <div className="edu-item">
              <strong>STEM Strand</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                University of Mindanao, Digos &bull; <em>SHS GPA: 4.00 / 4.00</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Completed senior high school with distinction in STEM track. Developed foundational knowledge in advanced mathematics, physics, and chemistry with emphasis on research methodologies and scientific inquiry.
              </p>
            </div>

            <div className="edu-item">
              <strong>SPFL – Mandarin</strong>
              <div style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '4px', marginBottom: '12px' }}>
                Digos City National High School &bull; <em>With Honors</em>
              </div>
              <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                Graduated with honors. Studied Mandarin Chinese alongside core academic subjects. Strong foundation in language learning and cultural understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}