import { Sidebar } from '@/components/Sidebar'
import { NavBar } from '@/components/NavBar'

export default function ArchiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="archive-layout">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  )
}
