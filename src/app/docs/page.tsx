import Link from 'next/link'
import type { Metadata } from 'next'
import { getDocsMeta } from '@/lib/docs'

export const metadata: Metadata = {
  title: 'Runbooks & Docs — EcoSurge',
  description: 'Operational runbooks and build specifications from the EcoSurge lab.',
}

export default function DocsIndex() {
  const docs = getDocsMeta()

  return (
    <div className="blog-index">
      <div className="blog-intro">
        <span className="blog-eyebrow">OPERATIONS</span>
        <h1>Runbooks &amp; Docs</h1>
        <p>
          Build specifications and operational runbooks from the EcoSurge lab — the procedural
          companions to our research. Reproducible, hardware-specific, and written to be followed.
        </p>
      </div>

      <div className="blog-posts">
        {docs.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`} className="blog-post-card">
            <span className="post-tag">Runbook</span>
            <h2>{doc.title}</h2>
            <p>{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
