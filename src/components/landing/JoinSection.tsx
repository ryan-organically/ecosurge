'use client';

import Link from 'next/link';

export default function JoinSection() {
  return (
    <div className="landing-section section-join" id="join">
      <div className="section-inner">
        <h2 className="section-headline">
          The future is not inherited. It is engineered.
        </h2>
        <p className="section-body">
          If your discipline can reverse planetary degradation — as an engineer,
          scientist, investor, or citizen — this is where your leverage
          multiplies.
        </p>
        <div className="join-grid">
          <div className="join-col">
            <h3>Build With Us</h3>
            <p>
              Marine biologists. Polymer engineers. Climate modelers. Data
              architects.
            </p>
            <div className="role-tags">
              <span className="role-tag">Biofilm Systems Engineer</span>
              <span className="role-tag">Glacial Deployment Lead</span>
              <span className="role-tag">Species Data Architect</span>
            </div>
            <a className="text-cta" href="#">
              View positions &rarr;
            </a>
          </div>
          <div className="join-col">
            <h3>Invest in the Transition</h3>
            <p>
              $130 trillion capital reallocation over three decades. Energy,
              agriculture, biodiversity — the defining sectors.
            </p>
            <div className="join-metrics">
              <span>Series C &middot; $1.8B valuation</span>
              <span>TAM: $4.2T by 2035</span>
            </div>
            <a className="text-cta" href="#">
              Request investor deck &rarr;
            </a>
          </div>
        </div>
        <div className="join-footer">
          <Link href="/archive" className="join-cta">
            Explore the Species Archive
          </Link>
          <span className="join-tagline">Emboldened by challenge.</span>
        </div>
      </div>
    </div>
  );
}
