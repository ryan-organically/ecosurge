'use client';

import Link from 'next/link';

export default function LivingRecordSection() {
  return (
    <div className="landing-section section-living-record" id="living-record">
      <div className="section-inner">
        <div className="record-grid">
          <div className="record-text">
            <span className="section-label">BIODIVERSITY INTELLIGENCE</span>
            <h2 className="section-headline">
              41,000 Species Threatened. We Track Every One.
            </h2>
            <p>
              Species vanish at 1,000x the natural rate. The Species Archive is
              our answer: an interactive atlas of Earth&apos;s biodiversity with
              3D phylogenetic trees, biome dashboards, and real-time
              conservation data across 14 biomes.
            </p>
            <Link href="/archive" className="text-cta">
              Enter the Species Archive &rarr;
            </Link>
          </div>
          <div className="record-chart">
            <svg
              className="donut-chart"
              viewBox="0 0 200 200"
              width="280"
              height="280"
            >
              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#eee"
                strokeWidth="24"
              />
              {/* LC segment: 60% of 502.65 = 301.6 */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="24"
                strokeDasharray="301.6 201.05"
                strokeDashoffset="0"
                transform="rotate(-90 100 100)"
              />
              {/* NT segment: 12% of 502.65 = 60.3 */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#FFC107"
                strokeWidth="24"
                strokeDasharray="60.3 442.35"
                strokeDashoffset="-301.6"
                transform="rotate(-90 100 100)"
              />
              {/* VU segment: 10% of 502.65 = 50.3 */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#FF9800"
                strokeWidth="24"
                strokeDasharray="50.3 452.35"
                strokeDashoffset="-361.9"
                transform="rotate(-90 100 100)"
              />
              {/* EN + CR segment: 13% of 502.65 = 65.3 */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#f44336"
                strokeWidth="24"
                strokeDasharray="65.3 437.35"
                strokeDashoffset="-412.2"
                transform="rotate(-90 100 100)"
              />
              {/* Center text */}
              <text
                x="100"
                y="92"
                textAnchor="middle"
                fontSize="28"
                fontWeight="800"
                fill="#2c3e50"
              >
                8.7M+
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                fontSize="11"
                fill="#888"
              >
                estimated species
              </text>
            </svg>
            <div className="chart-legend">
              <span className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: '#4CAF50' }}
                />
                Least Concern
              </span>
              <span className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: '#FFC107' }}
                />
                Near Threatened
              </span>
              <span className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: '#FF9800' }}
                />
                Vulnerable
              </span>
              <span className="legend-item">
                <span
                  className="legend-dot"
                  style={{ backgroundColor: '#f44336' }}
                />
                Endangered / Critical
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
