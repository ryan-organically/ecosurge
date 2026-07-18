import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment, type ReactNode } from 'react'
import { getDoc, docSlugs } from '@/lib/docs'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return docSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) return { title: 'Runbook not found — EcoSurge' }
  return { title: `${doc.title} — EcoSurge`, description: doc.description }
}

/** Inline formatting: **bold**, `code`, and [text](url) links. */
function renderInline(text: string, keyBase: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const regex = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g
  let last = 0
  let match: RegExpExecArray | null
  let i = 0
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index))
    if (match[2] !== undefined) {
      nodes.push(<strong key={`${keyBase}-b${i}`}>{match[2]}</strong>)
    } else if (match[3] !== undefined) {
      nodes.push(<code key={`${keyBase}-c${i}`}>{match[3]}</code>)
    } else if (match[4] !== undefined) {
      const href = match[5]
      const internal = href.startsWith('/')
      nodes.push(
        internal ? (
          <Link key={`${keyBase}-l${i}`} href={href}>{match[4]}</Link>
        ) : (
          <a key={`${keyBase}-l${i}`} href={href} rel="noopener noreferrer">{match[4]}</a>
        )
      )
    }
    last = match.index + match[0].length
    i++
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

/** Minimal, dependency-free markdown → React for the runbook subset we author. */
function renderMarkdown(md: string): ReactNode[] {
  const lines = md.split('\n')
  const out: ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code fence
    if (line.trim().startsWith('```')) {
      const buf: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        buf.push(lines[i])
        i++
      }
      i++ // closing fence
      out.push(
        <pre key={key++} className="doc-code"><code>{buf.join('\n')}</code></pre>
      )
      continue
    }

    // Heading
    const h = line.match(/^(#{1,6})\s+(.*)$/)
    if (h) {
      const level = h[1].length
      const content = renderInline(h[2], `h${key}`)
      const Tag = (`h${Math.min(level, 6)}`) as 'h1'
      out.push(<Tag key={key++}>{content}</Tag>)
      i++
      continue
    }

    // Horizontal rule
    if (/^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
      out.push(<hr key={key++} />)
      i++
      continue
    }

    // Blockquote
    if (line.trim().startsWith('>')) {
      const buf: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        buf.push(lines[i].replace(/^\s*>\s?/, ''))
        i++
      }
      out.push(
        <blockquote key={key++}>{renderInline(buf.join(' '), `q${key}`)}</blockquote>
      )
      continue
    }

    // Table
    if (line.trim().startsWith('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i + 1])) {
      const parseRow = (r: string) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim())
      const header = parseRow(line)
      i += 2 // header + separator
      const rows: string[][] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push(parseRow(lines[i]))
        i++
      }
      out.push(
        <div key={key++} className="doc-table-wrap">
          <table>
            <thead>
              <tr>{header.map((c, ci) => <th key={ci}>{renderInline(c, `th${key}-${ci}`)}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>{row.map((c, ci) => <td key={ci}>{renderInline(c, `td${key}-${ri}-${ci}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    // Unordered list
    if (/^\s*[-*]\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ''))
        i++
      }
      out.push(
        <ul key={key++}>
          {items.map((it, ii) => <li key={ii}>{renderInline(it, `ul${key}-${ii}`)}</li>)}
        </ul>
      )
      continue
    }

    // Ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items: string[] = []
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ''))
        i++
      }
      out.push(
        <ol key={key++}>
          {items.map((it, ii) => <li key={ii}>{renderInline(it, `ol${key}-${ii}`)}</li>)}
        </ol>
      )
      continue
    }

    // Blank line
    if (line.trim() === '') {
      i++
      continue
    }

    // Paragraph (gather until blank / block start)
    const buf: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^(#{1,6})\s/.test(lines[i]) &&
      !lines[i].trim().startsWith('```') &&
      !lines[i].trim().startsWith('>') &&
      !lines[i].trim().startsWith('|') &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i])
    ) {
      buf.push(lines[i])
      i++
    }
    out.push(<p key={key++}>{renderInline(buf.join(' '), `p${key}`)}</p>)
  }

  return out.map((n, idx) => <Fragment key={idx}>{n}</Fragment>)
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params
  const doc = getDoc(slug)
  if (!doc) notFound()

  return (
    <article className="doc">
      <Link href="/docs" className="study-back">&larr; All docs</Link>
      <div className="doc-body">{renderMarkdown(doc.content)}</div>
      <div className="study-footer">
        <Link href="/docs" className="text-cta">&larr; Back to all docs</Link>
        <Link href="/blog" className="text-cta">Read the research &rarr;</Link>
      </div>
    </article>
  )
}
