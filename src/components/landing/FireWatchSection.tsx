'use client'

import FireTrackerGlobe from './FireTrackerGlobe'

export default function FireWatchSection() {
  return (
    <div className="landing-section section-firewatch" id="firewatch">
      <div className="section-inner">
        <span className="section-label">EARTH OBSERVATION</span>
        <h2 className="section-headline">A Living Map of the World on Fire</h2>
        <p className="section-body">
          Boreal and temperate forests are burning longer and hotter each year,
          venting stored carbon and choking whole continents in smoke. EcoSurge
          Fire Watch renders active wildfires in near-real time — pulled straight
          from NASA satellites — so the Northern Hemisphere&apos;s fire season is
          visible the moment it ignites.
        </p>
        <FireTrackerGlobe />
      </div>
    </div>
  )
}
