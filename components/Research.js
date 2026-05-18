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
            <h3>Current research</h3>
            <p style={{ marginBottom: '24px' }}>
              <strong>Filipino Sign Language Recognition</strong> utilizing <em>MediaPipe Holistic</em> and a <em>Transformer model</em>.
            </p>

            <h3>Education</h3>

            <div className="edu-item">
              <strong>BS Computer Science</strong>
              <span>Cor Jesu College &bull; <em>3rd Year</em></span>
            </div>

            <div className="edu-item">
              <strong>STEM Strand</strong>
              <span>University of Mindanao, Digos &bull; <em>SHS GPA: 4.00 / 4.00</em></span>
            </div>

            <div className="edu-item">
              <strong>SPFL – Mandarin</strong>
              <span>Digos City National High School &bull; <em>With Honors</em></span>
            </div>
          </div>
        </div>
      </div>
  );
}