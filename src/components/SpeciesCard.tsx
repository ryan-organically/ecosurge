import Link from 'next/link'
import type { Species } from '@/lib/taxonomy'
import { conservationStatusColors } from '@/lib/taxonomy'

export function SpeciesCard({ species }: { species: Species }) {
  const statusColor = conservationStatusColors[species.conservationStatus]
  // Prefer local WebP images over remote URLs
  const localImage = `/species-images/${species.id}/medium.webp`
  const imageUrl = localImage || species.images?.[0] || null

  return (
    <Link href={`/species/${species.id}`} className="species-card">
      <div className="species-card-image" style={{ background: `linear-gradient(135deg, ${statusColor}22, ${statusColor}44)` }}>
        {imageUrl ? (
          <img src={imageUrl} alt={species.commonName} loading="lazy" />
        ) : (
          <span className="species-icon">&#x1F9AC;</span>
        )}
      </div>
      <div className="species-card-content">
        <h4>{species.commonName}</h4>
        <p className="species-scientific">{species.scientificName}</p>
        <div className="species-card-footer">
          <span className="conservation-badge" style={{ background: statusColor }}>
            {species.conservationStatus}
          </span>
          <span className="habitat-tag">{species.habitat.split(',')[0]}</span>
        </div>
      </div>
    </Link>
  )
}
