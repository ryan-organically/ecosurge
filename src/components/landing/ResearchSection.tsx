'use client';

import Link from 'next/link';
import { studies, featuredStudy } from '@/data/studies';

export default function ResearchSection() {
  // Feature the lead whitepaper; show the next several studies beneath it.
  const stack = studies.filter((s) => s.slug !== featuredStudy.slug).slice(0, 4);

  return (
    <div className="landing-section section-research" id="research">
      <div className="section-inner">
        <span className="section-label">OPEN SCIENCE</span>
        <h2 className="section-headline">Our Research</h2>
        <div className="research-layout">
          <div className="research-featured">
            <span className="research-tag">PRIMARY WHITEPAPER</span>
            <h3>{featuredStudy.title}</h3>
            <p>{featuredStudy.subtitle}</p>
            <Link className="text-cta" href={`/blog/${featuredStudy.slug}`}>
              Read the whitepaper &rarr;
            </Link>
          </div>
          <div className="research-stack">
            {stack.map((s) => (
              <div className="research-item" key={s.slug}>
                <h4>{s.title}</h4>
                <p>{s.subtitle}</p>
                <Link className="text-cta" href={`/blog/${s.slug}`}>
                  Read &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="research-all">
          <Link className="text-cta" href="/blog">
            View all research &amp; whitepapers &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
