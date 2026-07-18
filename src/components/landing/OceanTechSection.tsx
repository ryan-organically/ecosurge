'use client';

export default function OceanTechSection() {
  return (
    <div className="landing-section section-ocean-tech" id="ocean-tech">
      <div className="section-inner">
        <span className="section-label">OCEAN TECHNOLOGY</span>
        <h2 className="section-headline">
          Harnessing the Continuous Motion of the Sea
        </h2>
        <p className="section-body">
          Two converging platforms: Bio-Integrated Wave Energy Converters that
          power coastal communities while building artificial reefs, and
          Hydrokinetic Rebirth Pods — self-sustaining underwater farms that
          generate energy through piezoelectric nanogenerators embedded in their
          structural frames.
        </p>
        <div className="tech-cards">
          <div className="tech-card">
            <h3>Bio-WEC Arrays</h3>
            <p>
              Point absorber WECs with hydraulic power take-off, optimized for
              high-energy coastlines. Submerged structures engineered as
              artificial reefs for bivalves and marine organisms. Each array
              powers 12,000+ homes.
            </p>
            <div className="tech-phases">
              <span className="phase">Research &rarr; </span>
              <span className="phase">Prototype &rarr; </span>
              <span className="phase phase-active">Pilot Deployment</span>
            </div>
          </div>
          <div className="tech-card">
            <h3>Rebirth Pods</h3>
            <p>
              Modular underwater farms with integrated aquaculture. Coral and
              kelp colonization surfaces, hydroponic sea vegetable production,
              and controlled aquaponic systems — all powered by wave motion.
            </p>
            <div className="tech-phases">
              <span className="phase">Research &rarr; </span>
              <span className="phase phase-active">Prototype &rarr; </span>
              <span className="phase">Deployment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
