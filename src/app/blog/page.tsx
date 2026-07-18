import Link from 'next/link'

const posts = [
  {
    slug: 'age-of-embodiment',
    title: 'The Age of Embodiment',
    subtitle: 'On the global climate crisis, the failure of fragmented action, and the rise of a new model for planetary stewardship.',
    date: '2025-07-01',
    tag: 'Whitepaper',
  },
  {
    slug: 'ocean-dynamics',
    title: 'On the Plausibility of Harnessing Ocean Dynamics',
    subtitle: 'Bio-WEC feasibility assessment and Polar Ice Scaffold strategic roadmap.',
    date: '2025-07-17',
    tag: 'Research',
  },
  {
    slug: 'operational-blueprint',
    title: 'Operational Blueprint: Initial Initiatives',
    subtitle: 'Bio-Dome, Ocean Rebirth, and Zero-Waste Nexus — a generative roadmap for planetary restoration.',
    date: '2025-08-01',
    tag: 'Strategy',
  },
]

export default function BlogIndex() {
  return (
    <div className="blog-index">
      <div className="blog-intro">
        <h1>EcoSurge Blog</h1>
        <p>Research, whitepapers, and operational updates from the frontier of climate technology.</p>
      </div>
      <div className="blog-posts">
        {posts.map((post) => (
          <article key={post.slug} className="blog-post-card">
            <span className="post-tag">{post.tag}</span>
            <h2>{post.title}</h2>
            <p>{post.subtitle}</p>
            <div className="post-meta">
              <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
