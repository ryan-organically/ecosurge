import Link from 'next/link'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout">
      <header className="blog-header">
        <div className="blog-header-inner">
          <Link href="/" className="blog-brand">EcoSurge</Link>
          <nav className="blog-nav">
            <Link href="/blog">Blog</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/archive">Species Archive</Link>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>
      <main className="blog-main">
        {children}
      </main>
      <footer className="blog-footer">
        <p>
          <Link href="/terms">Terms of Use</Link> &middot;{' '}
          <Link href="/privacy">Privacy Policy</Link>
        </p>
        <p>
          &copy; 2026 EcoSurge — a conceptual climate-technology project.
          Studies, figures, and projections are illustrative and
          forward-looking; not deployed or independently verified. Nothing here
          is investment advice or an offer of securities.
        </p>
      </footer>
    </div>
  )
}
