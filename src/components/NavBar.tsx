'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavBar() {
  const pathname = usePathname()

  function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar')
    const backdrop = document.querySelector('.sidebar-backdrop')
    sidebar?.classList.toggle('open')
    backdrop?.classList.toggle('visible')
  }

  function closeSidebar() {
    document.querySelector('.sidebar')?.classList.remove('open')
    document.querySelector('.sidebar-backdrop')?.classList.remove('visible')
  }

  const links = [
    { href: '/archive', label: 'Home' },
    { href: '/taxon/eukaryota/animalia', label: 'Animals' },
    { href: '/taxon/eukaryota/plantae', label: 'Plants' },
    { href: '/taxon/eukaryota/fungi', label: 'Fungi' },
    { href: '/taxon/bacteria', label: 'Bacteria' },
    { href: '/taxon/archaea', label: 'Archaea' },
    { href: '/blog', label: 'Research' },
    { href: '/docs', label: 'Docs' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
            &#9776;
          </button>
          <Link href="/archive" className="navbar-brand" onClick={closeSidebar}>
            <span className="navbar-logo">&#127793;</span>
            <span className="navbar-title">The Species Archive</span>
          </Link>
        </div>
        <div className="navbar-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-link"
              aria-current={pathname === link.href || pathname?.startsWith(link.href + '/') ? 'page' : undefined}
              onClick={closeSidebar}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
