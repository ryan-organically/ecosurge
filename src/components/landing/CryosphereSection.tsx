'use client';

export default function CryosphereSection() {
  return (
    <div className="landing-section section-cryosphere" id="cryosphere">
      <div className="section-inner">
        <span className="section-label">CRYOSPHERE INTERVENTION</span>
        <h2 className="section-headline">Polar Ice Scaffolds</h2>
        <p className="section-body">
          Bio-mineralized lattice structures deployed at glacier grounding
          lines. Engineered calcifying organisms secrete aragonite
          microstructures that slow melt rates 18-23% at treated sites.
        </p>
        <div className="cryo-timeline">
          <div className="cryo-step">
            <span className="step-marker">01</span>
            <h4>Seeding</h4>
            <p>
              Autonomous underwater vehicles deploy calcifying cultures.
              Organisms attach and begin secreting within 48 hours.
            </p>
          </div>
          <div className="cryo-step">
            <span className="step-marker">02</span>
            <h4>Lattice Growth</h4>
            <p>
              6-12 weeks: interlocking calcium carbonate columns form thermal
              barriers and physical buttressing.
            </p>
          </div>
          <div className="cryo-step">
            <span className="step-marker">03</span>
            <h4>Stabilization</h4>
            <p>
              Mature scaffolds shield ice from warm currents. Winter months:
              lattice nucleates new ice crystal formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
