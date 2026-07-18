'use client';

export default function MissionSection() {
  return (
    <div className="landing-section section-mission" id="mission">
      <div className="section-inner">
        <span className="section-label">OUR MANDATE</span>
        <h2 className="section-headline">
          The planet does not need another promise. It needs an engineering
          response.
        </h2>
        <p className="section-body">
          We build the technologies, nurture the ecosystems, and deploy the
          capital to reverse climate collapse. No fragmented efforts — one
          centralized engine of change.
        </p>
        <div className="stat-row">
          <div className="stat-item">
            <span className="stat-value">1.5&deg;C</span>
            <span className="stat-desc">temperature rise</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">68%</span>
            <span className="stat-desc">wildlife decline since 1970</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">1.6T</span>
            <span className="stat-desc">tonnes carbon in thawing permafrost</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">$2.7T</span>
            <span className="stat-desc">
              annual cost of environmental degradation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
