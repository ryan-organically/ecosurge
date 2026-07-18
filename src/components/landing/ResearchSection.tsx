'use client';

export default function ResearchSection() {
  return (
    <div className="landing-section section-research" id="research">
      <div className="section-inner">
        <span className="section-label">OPEN SCIENCE</span>
        <h2 className="section-headline">Our Research</h2>
        <div className="research-layout">
          <div className="research-featured">
            <span className="research-tag">PRIMARY WHITEPAPER</span>
            <h3>The Age of Embodiment</h3>
            <p>
              A reckoning with systems broken by design. On the failure of
              fragmented climate action and the case for a centralized engine of
              planetary restoration.
            </p>
            <a className="text-cta" href="#">
              Read the whitepaper &rarr;
            </a>
          </div>
          <div className="research-stack">
            <div className="research-item">
              <h4>Ocean Dynamics for Sustainable Solutions</h4>
              <p>Bio-WEC feasibility and Polar Ice Scaffold roadmap.</p>
              <a className="text-cta" href="#">
                Read &rarr;
              </a>
            </div>
            <div className="research-item">
              <h4>Operational Blueprint: Initial Initiatives</h4>
              <p>Bio-Dome, Ocean Rebirth, Zero-Waste deployment.</p>
              <a className="text-cta" href="#">
                Read &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
