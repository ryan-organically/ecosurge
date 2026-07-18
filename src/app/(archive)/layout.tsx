import { Sidebar } from '@/components/Sidebar'
import { NavBar } from '@/components/NavBar'
import { ArchiveHotkeys } from '@/components/ArchiveHotkeys'

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArchiveHotkeys />
      <NavBar />
      <div className="sidebar-backdrop" />
      <div className="archive-layout">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  )
}
