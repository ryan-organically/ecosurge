'use client'

import { useEffect } from 'react'

/**
 * Keyboard-driven quick navigation for the Species Archive.
 *   /  or  Cmd/Ctrl+K  → open the sidebar and focus taxonomy search
 *   Esc               → clear search and close the sidebar
 * Makes deep taxonomic navigation reachable in one keystroke from anywhere.
 */
export function ArchiveHotkeys() {
  useEffect(() => {
    function openSearch() {
      const sidebar = document.querySelector('.sidebar')
      const backdrop = document.querySelector('.sidebar-backdrop')
      sidebar?.classList.add('open')
      backdrop?.classList.add('visible')
      const input = document.querySelector<HTMLInputElement>('.search-input')
      if (input) {
        input.focus()
        input.select()
      }
    }

    function closeSearch() {
      document.querySelector('.sidebar')?.classList.remove('open')
      document.querySelector('.sidebar-backdrop')?.classList.remove('visible')
    }

    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null
      const typing =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)

      // Cmd/Ctrl+K — universal quick-jump
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        openSearch()
        return
      }

      // "/" — focus search when not already typing
      if (e.key === '/' && !typing) {
        e.preventDefault()
        openSearch()
        return
      }

      // Escape — clear + close from within the search field
      if (e.key === 'Escape' && typing && target?.classList.contains('search-input')) {
        const input = target as HTMLInputElement
        if (input.value) {
          input.value = ''
          input.dispatchEvent(new Event('input', { bubbles: true }))
        } else {
          input.blur()
          closeSearch()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return null
}
