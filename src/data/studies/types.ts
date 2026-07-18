/**
 * The EcoSurge studies engine — a typed content model for whitepapers, research
 * notes, lab procedures, and strategy briefs. Content is authored as an ordered
 * list of structured blocks so it renders deterministically in the static export
 * and stays decoupled from presentation.
 */

export type StudyTag =
  | 'Whitepaper'
  | 'Research'
  | 'Strategy'
  | 'Lab Note'
  | 'Field Study'
  | 'Robotics'

export type StudyBlock =
  | { type: 'lead'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; title?: string; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'figure'; viz: string; caption?: string }
  | { type: 'equation'; display: string; note?: string; where?: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'table'; columns: string[]; rows: string[][]; caption?: string }
  | { type: 'divider' }

export interface Study {
  slug: string
  title: string
  subtitle: string
  tag: StudyTag
  date: string // ISO yyyy-mm-dd
  authors: string[]
  abstract: string
  keywords: string[]
  blocks: StudyBlock[]
  featured?: boolean
}

/** Rough reading time from the text carried by a study's blocks. */
export function readingMinutes(study: Study): number {
  let words = (study.abstract + ' ' + study.title + ' ' + study.subtitle).split(/\s+/).length
  for (const b of study.blocks) {
    switch (b.type) {
      case 'lead':
      case 'heading':
      case 'paragraph':
        words += b.text.split(/\s+/).length
        break
      case 'callout':
        words += b.text.split(/\s+/).length + (b.title?.split(/\s+/).length ?? 0)
        break
      case 'quote':
        words += b.text.split(/\s+/).length
        break
      case 'list':
        words += b.items.join(' ').split(/\s+/).length
        break
      case 'steps':
        words += b.items.map((i) => i.title + ' ' + i.text).join(' ').split(/\s+/).length
        break
      case 'table':
        words += b.rows.flat().join(' ').split(/\s+/).length
        break
    }
  }
  return Math.max(1, Math.round(words / 220))
}
