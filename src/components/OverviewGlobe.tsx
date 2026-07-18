'use client'

import { Globe, GlobeMarker } from './Globe'

const defaultMarkers: GlobeMarker[] = [
  { lat: -2, lng: 34, label: 'African Lion', color: '#FFA500' },
  { lat: -35, lng: -60, label: 'Blue Whale', color: '#2dd4bf' },
  { lat: 45, lng: 10, label: 'Honey Bee', color: '#FFD700' },
  { lat: 21, lng: 78, label: 'Bengal Tiger', color: '#FF4500' },
  { lat: -8, lng: -75, label: 'Harpy Eagle', color: '#8BC34A' },
]

export function OverviewGlobe() {
  return (
    <div className="overview-globe-container">
      <Globe markers={defaultMarkers} height={320} />
    </div>
  )
}

export default OverviewGlobe
