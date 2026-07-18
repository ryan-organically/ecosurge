'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { studies, featuredStudy, readingMinutes, type StudyTag } from '@/data/studies'

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

const TAGS: (StudyTag | 'All')[] = [
  'All',
  'Whitepaper',
  'Research',
  'Robotics',
  'Field Study',
  'Lab Note',
  'Strategy',
]

export default function BlogIndex() {
  const [active, setActive] = useState<StudyTag | 'All'>('All')

  const visible = useMemo(
    () => studies.filter((s) => active === 'All' || s.tag === active),
    [active]
  )

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'EcoSurge Research & Whitepapers',
    url: 'https://ecosurge.co/blog',
    publisher: { '@type': 'Organization', name: 'EcoSurge' },
    blogPost: studies.map((s) => ({
      '@type': 'BlogPosting',
      headline: s.title,
      description: s.subtitle,
      datePublished: s.date,
      url: `https://ecosurge.co/blog/${s.slug}`,
      author: s.authors.map((name) => ({ '@type': 'Person', name })),
    })),
  }

  return (
    <div className="blog-index">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <div className="blog-intro">
        <span className="blog-eyebrow">OPEN SCIENCE</span>
        <h1>Research &amp; Whitepapers</h1>
        <p>
          Procedures, equations, and deployment plans from the frontier of climate technology. Every
          study is an engineering response — measured, reproducible, and built to scale.
        </p>
      </div>

      <Link href={`/blog/${featuredStudy.slug}`} className="blog-featured">
        <div className="blog-featured-body">
          <span className="post-tag">{featuredStudy.tag}</span>
          <h2>{featuredStudy.title}</h2>
          <p>{featuredStudy.subtitle}</p>
          <div className="post-meta">
            <time>{fmtDate(featuredStudy.date)}</time>
            <span className="dot">·</span>
            <span>{readingMinutes(featuredStudy)} min read</span>
          </div>
          <span className="blog-featured-cta">Read the whitepaper &rarr;</span>
        </div>
      </Link>

      <div className="blog-filters" role="tablist" aria-label="Filter studies by type">
        {TAGS.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={active === t}
            className={`blog-filter ${active === t ? 'active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="blog-posts">
        {visible.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-card">
            <span className="post-tag">{post.tag}</span>
            <h2>{post.title}</h2>
            <p>{post.subtitle}</p>
            <div className="post-meta">
              <time>{fmtDate(post.date)}</time>
              <span className="dot">·</span>
              <span>{readingMinutes(post)} min read</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
