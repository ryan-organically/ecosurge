import fs from 'node:fs'
import path from 'node:path'

/**
 * Build-time reader for the operational runbooks in the repo's top-level
 * `docs/` directory. These are plain markdown files (no frontmatter); the title
 * is the first `# ` heading and the description is the first prose paragraph.
 * Everything here runs at build time under the static export — no runtime fs.
 */

const DOCS_DIR = path.join(process.cwd(), 'docs')

export interface DocMeta {
  slug: string
  title: string
  description: string
}

export interface Doc extends DocMeta {
  content: string
}

function listFiles(): string[] {
  try {
    return fs
      .readdirSync(DOCS_DIR)
      .filter((f) => f.endsWith('.md'))
      .sort()
  } catch {
    return []
  }
}

function parseMeta(slug: string, raw: string): DocMeta {
  const lines = raw.split('\n')
  let title = slug
  let description = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!title.startsWith('#') && line.startsWith('# ') && title === slug) {
      title = line.replace(/^#\s+/, '').trim()
      // First non-empty, non-heading, non-quote line after the title is the blurb.
      for (let j = i + 1; j < lines.length; j++) {
        const p = lines[j].trim()
        if (!p) continue
        if (p.startsWith('#') || p.startsWith('>') || p.startsWith('|')) continue
        description = p.replace(/[*_`]/g, '')
        break
      }
      break
    }
  }

  return { slug, title, description }
}

/** Slugs (filenames without `.md`) for every runbook, sorted. */
export function docSlugs(): string[] {
  return listFiles().map((f) => f.replace(/\.md$/, ''))
}

/** Title + description for every runbook, for the `/docs` index. */
export function getDocsMeta(): DocMeta[] {
  return listFiles().map((f) => {
    const slug = f.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(DOCS_DIR, f), 'utf8')
    return parseMeta(slug, raw)
  })
}

/** Full doc (metadata + raw markdown) for a single runbook, or null. */
export function getDoc(slug: string): Doc | null {
  const file = path.join(DOCS_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  const raw = fs.readFileSync(file, 'utf8')
  return { ...parseMeta(slug, raw), content: raw }
}
