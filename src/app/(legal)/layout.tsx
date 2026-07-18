import Link from 'next/link'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout">
      <header className="blog-header">
        <div className="blog-header-inner">
          <Link href="/" className="blog-brand">
            EcoSurge
          </Link>
          <nav className="blog-nav">
            <Link href="/">Home</Link>
            <Link href="/blog">Research</Link>
            <Link href="/archive">Species Archive</Link>
          </nav>
        </div>
      </header>
      <main className="blog-main">{children}</main>
      <footer className="blog-footer">
        <p>
          <Link href="/terms">Terms of Use</Link> &middot;{' '}
          <Link href="/privacy">Privacy Policy</Link>
        </p>
        <p>
          &copy; 2026 EcoSurge — a conceptual climate-technology project. Content
          is illustrative and forward-looking.
        </p>
      </footer>
    </div>
  )
}
