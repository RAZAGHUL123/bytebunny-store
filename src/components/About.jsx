// src/components/About.jsx
import './About.css';

export default function About() {
  return (
    <div className="container py-5 text-light">
      <h1 className="display-5 text-danger text-center glitch-title mb-4">
        BYTEBUNNY ARCHIVES: ABOUT
      </h1>

      <div className="about-intro text-center mb-5">
        <p className="lead">
          Not all timelines play fair. BYTEBUNNY is the unofficial catalog of
          cross-dimensional artifacts that <em>shouldn’t have made it here</em>.
          What began as a low-clearance side project by anomaly specialists has become
          a full containment archive of curiosities recovered from adjacent realities.
        </p>
      </div>

      <div className="multiverse-files">
        <h3 className="text-danger">⛔ Declassified Archive Fragments</h3>
        <ul className="list-group bg-dark border border-danger mt-3">
          <li className="list-group-item bg-black text-muted border-bottom border-danger">
            File #047-B: A Happy Meal toy from a universe where Ronald McDonald became a war criminal.
          </li>
          <li className="list-group-item bg-black text-muted border-bottom border-danger">
            File #123-F: TV guide page describing an episode of "Courage" where Muriel is played by static.
          </li>
          <li className="list-group-item bg-black text-muted border-bottom border-danger">
            File #212-G: VCR tape labeled "Looney Surveillance 1999" showing bugs not in cartoon but in camera feed.
          </li>
          <li className="list-group-item bg-black text-muted border-bottom border-danger">
            File #388-K: A Bandai Digivice that powers up near thunder, then shuts off when observed.
          </li>
          <li className="list-group-item bg-black text-muted border-danger">
            File #666-Z: USB drive named "Prophet.mp4". Appears empty. Audio log recovered says only: "He watches in bytes."
          </li>
        </ul>
      </div>

      <div className="mt-5 text-center">
        <p className="text-muted">
          All recovered data is sealed under █████ Clearance. If you're seeing this page,
          containment has either failed or you're part of the testing cohort.
          Proceed with caution. BYTEBUNNY is not responsible for mental corruption,
          glitch hallucinations, or nostalgic bleedthrough.
        </p>
      </div>
    </div>
  );
}
