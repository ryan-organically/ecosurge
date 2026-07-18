'use client'

import FireTrackerMap from './FireTrackerMap'

export default function FireWatchSection() {
  return (
    <div className="landing-section section-firewatch" id="firewatch">
      <div className="section-inner">
        <span className="section-label">EARTH OBSERVATION</span>
        <h2 className="section-headline">North America, Under Fire</h2>
        <p className="section-body">
          Boreal and temperate forests are burning longer and hotter each year,
          venting stored carbon and choking whole regions in smoke. EcoSurge
          Fire Watch maps active wildfires across North America in near-real
          time — pulled straight from NASA satellites — so the continent&apos;s
          fire season is visible the moment it ignites.
        </p>
        <FireTrackerMap />
      </div>
    </div>
  )
}
