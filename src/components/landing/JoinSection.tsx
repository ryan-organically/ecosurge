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
            <h3>Back the Transition</h3>
            <p>
              The climate transition is the defining capital reallocation of our
              era — energy, agriculture, and biodiversity among its central
              sectors. EcoSurge is an early-stage, mission-driven climate
              venture. If you support bold, science-led restoration, we&rsquo;d
              welcome a conversation.
            </p>
            <p className="join-disclaimer">
              EcoSurge is a conceptual, pre-commercial project. Nothing here is
              an offer or solicitation to buy or sell securities, or investment
              advice.
            </p>
            <Link className="text-cta" href="/terms">
              How we work &rarr;
            </Link>
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
