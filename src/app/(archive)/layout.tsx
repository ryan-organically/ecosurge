import { Sidebar } from '@/components/Sidebar'
import { NavBar } from '@/components/NavBar'

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="archive-layout">
        <Sidebar />
        <div className="sidebar-backdrop" />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  )
}
