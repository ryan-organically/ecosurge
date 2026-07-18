import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getStudy, studySlugs, readingMinutes } from '@/data/studies'
import { StudyBody } from '@/components/studies/StudyBody'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return studySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const study = getStudy(slug)
  if (!study) return { title: 'Study not found — EcoSurge' }
  return {
    title: `${study.title} — EcoSurge`,
    description: study.subtitle,
  }
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function StudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getStudy(slug)
  if (!study) notFound()

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: study.title,
    description: study.subtitle,
    abstract: study.abstract,
    datePublished: study.date,
    keywords: study.keywords.join(', '),
    author: study.authors.map((name) => ({ '@type': 'Person', name })),
    publisher: { '@type': 'Organization', name: 'EcoSurge' },
    mainEntityOfPage: `https://ecosurge.co/blog/${study.slug}`,
    url: `https://ecosurge.co/blog/${study.slug}`,
  }

  return (
    <article className="study">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <div className="study-header">
        <Link href="/blog" className="study-back">
          &larr; All studies
        </Link>
        <span className="post-tag">{study.tag}</span>
        <h1>{study.title}</h1>
        <p className="study-subtitle">{study.subtitle}</p>
        <div className="study-meta">
          <span>{study.authors.join(', ')}</span>
          <span className="dot">·</span>
          <time>{fmtDate(study.date)}</time>
          <span className="dot">·</span>
          <span>{readingMinutes(study)} min read</span>
        </div>
      </div>

      <div className="study-abstract">
        <span className="abstract-label">Abstract</span>
        <p>{study.abstract}</p>
      </div>

      <StudyBody blocks={study.blocks} />

      <div className="study-keywords">
        {study.keywords.map((k) => (
          <span key={k} className="study-keyword">
            {k}
          </span>
        ))}
      </div>

      <div className="study-footer">
        <Link href="/blog" className="text-cta">
          &larr; Back to all research
        </Link>
        <Link href="/archive" className="text-cta">
          Enter the Species Archive &rarr;
        </Link>
      </div>
    </article>
  )
}
