import Link from 'next/link'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout">
      <header className="blog-header">
        <div className="blog-header-inner">
          <Link href="/" className="blog-brand">EcoSurge</Link>
          <nav className="blog-nav">
            <Link href="/blog">Blog</Link>
            <Link href="/archive">Species Archive</Link>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>
      <main className="blog-main">
        {children}
      </main>
      <footer className="blog-footer">
        <p>&copy; 2025 EcoSurge. Emboldened by challenge.</p>
      </footer>
    </div>
  )
}
