'use client';

export default function TerrestrialSection() {
  return (
    <div className="landing-section section-terrestrial" id="terrestrial">
      <div className="section-inner">
        <span className="section-label">TERRESTRIAL SYSTEMS</span>
        <h2 className="section-headline">Food. Soil. Waste. Reimagined.</h2>
        <p className="section-body text-center">
          Three interconnected initiatives closing the loop between production,
          consumption, and restoration.
        </p>
        <div className="tri-grid">
          <div className="tri-card">
            <span className="tri-number">01</span>
            <h3>Bio-Dome Initiative</h3>
            <p>
              Modular vertical farming with AI-controlled nutrient film,
              programmable LED spectra, and micro-robotic pollinators. Year-round
              harvest from indeterminate cultivars. 40% faster growth cycles.
            </p>
          </div>
          <div className="tri-card">
            <span className="tri-number">02</span>
            <h3>Regenerative Agriculture</h3>
            <p>
              Mycorrhizal network integration reducing fertilizer 60%. Pollinator
              corridor design. Biochar-enhanced tillage sequestering 3.2 tonnes
              CO&#x2082;/hectare/year.
            </p>
          </div>
          <div className="tri-card">
            <span className="tri-number">03</span>
            <h3>Zero-Waste Nexus</h3>
            <p>
              Waste-avoidance AI for households. Industrial upcycling hubs
              converting organic waste into biofuel, bio-fertilizer, and
              biodegradable plastics. 1 billion meals wasted daily — we end that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
