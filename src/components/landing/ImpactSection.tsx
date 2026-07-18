'use client';

export default function ImpactSection() {
  return (
    <div className="landing-section section-impact" id="impact">
      <div className="section-inner">
        <span className="section-label">MEASURABLE OUTCOMES</span>
        <h2 className="section-headline text-center">Impact Is a Dataset</h2>
        <div className="impact-grid">
          <div className="impact-metrics">
            <div className="metric-row">
              <span className="metric-value">12.4 MW</span>
              <span className="metric-label">clean energy capacity</span>
            </div>
            <div className="metric-row">
              <span className="metric-value">2.1M tonnes</span>
              <span className="metric-label">CO&#x2082; sequestered annually</span>
            </div>
            <div className="metric-row">
              <span className="metric-value">340K hectares</span>
              <span className="metric-label">habitat under restoration</span>
            </div>
            <div className="metric-row">
              <span className="metric-value">85K hectares</span>
              <span className="metric-label">regenerative farmland</span>
            </div>
            <div className="metric-row">
              <span className="metric-value">23 countries</span>
              <span className="metric-label">active deployments</span>
            </div>
            <div className="metric-row">
              <span className="metric-value">$2.3B</span>
              <span className="metric-label">capital deployed</span>
            </div>
          </div>
          <div className="impact-chart">
            <svg
              className="bar-chart"
              viewBox="0 0 300 220"
              width="100%"
              preserveAspectRatio="xMidYMid meet"
            >
              <text x="0" y="15" fontSize="11" fill="#888" fontWeight="600">
                DEPLOYMENT BY REGION
              </text>

              <text x="0" y="45" fontSize="10" fill="#666">North Atlantic</text>
              <rect x="100" y="35" width="180" height="14" rx="2" fill="#e0e0e0" />
              <rect className="bar-fill" x="100" y="35" width="144" height="14" rx="2" fill="#059669" />

              <text x="0" y="80" fontSize="10" fill="#666">Southeast Asia</text>
              <rect x="100" y="70" width="180" height="14" rx="2" fill="#e0e0e0" />
              <rect className="bar-fill" x="100" y="70" width="108" height="14" rx="2" fill="#059669" />

              <text x="0" y="115" fontSize="10" fill="#666">East Africa</text>
              <rect x="100" y="105" width="180" height="14" rx="2" fill="#e0e0e0" />
              <rect className="bar-fill" x="100" y="105" width="90" height="14" rx="2" fill="#059669" />

              <text x="0" y="150" fontSize="10" fill="#666">South Pacific</text>
              <rect x="100" y="140" width="180" height="14" rx="2" fill="#e0e0e0" />
              <rect className="bar-fill" x="100" y="140" width="72" height="14" rx="2" fill="#059669" />

              <text x="0" y="185" fontSize="10" fill="#666">Arctic</text>
              <rect x="100" y="175" width="180" height="14" rx="2" fill="#e0e0e0" />
              <rect className="bar-fill" x="100" y="175" width="54" height="14" rx="2" fill="#059669" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
