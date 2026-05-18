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
              I'm deeply interested in the intersection of technology, ethics,
              policy, and philosophy and to integrate technology with humanities and law.
            </p>

            <p>
              My thesis explores Filipino Sign Language Recognition with a core question:
              How do we design AI systems that are fair, transparent, and beneficial to communities?
            </p>

            <p>
              I'm passionate about building rigorous AI research that tackles
              real-world challenges in the Philippines while contributing to
              global conversations on equitable, human-centered technology.
            </p>

            <p>
              Outside of research, I enjoy reading philosophy and policy papers,
              writing about tech and society, podcasting, and debating ideas.
            </p>
          </div>

          <div className="panel">
            <h3>Education</h3>

            <p className="edu-item">
              <strong>Cor Jesu College</strong><br />
              BS Computer Science<br />
              3rd Year
            </p>

            <p className="edu-item">
              <strong>University of Mindanao – Digos College</strong><br />
              Science, Technology, Engineering, and Mathematics (STEM)<br />
              Senior High School<br />
              SHS GPA: 4.00 / 4.00
            </p>

            <p className="edu-item">
              <strong>Digos City National High School</strong><br />
              Special Program in Foreign Language – Mandarin<br />
              Junior High School<br />
              With Honors
            </p>

            <h3>Current research</h3>
            <p>
              Filipino Sign Language Recognition using MediaPipe Holistic and a
              transformer model.
            </p>
          </div>
        </div>
      </div>
  );
}