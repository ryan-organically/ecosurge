import Link from 'next/link'

export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/archive" className="navbar-brand">
          <span className="navbar-logo">&#127793;</span>
          <span className="navbar-title">The Species Archive</span>
        </Link>
        <div className="navbar-links">
          <Link href="/archive" className="navbar-link">Home</Link>
          <Link href="/taxon/eukaryota/animalia" className="navbar-link">Animals</Link>
          <Link href="/taxon/eukaryota/plantae" className="navbar-link">Plants</Link>
          <Link href="/taxon/eukaryota/fungi" className="navbar-link">Fungi</Link>
          <Link href="/taxon/bacteria" className="navbar-link">Bacteria</Link>
          <Link href="/taxon/archaea" className="navbar-link">Archaea</Link>
        </div>
      </div>
    </nav>
  )
}
