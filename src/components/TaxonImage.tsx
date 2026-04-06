'use client'

import { useState } from 'react'

export function TaxonImage({ taxonId, name }: { taxonId: string; name: string }) {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <div className="taxon-hero-image">
      <img
        src={`/species-images/${taxonId}/medium.webp`}
        alt={name}
        loading="eager"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
