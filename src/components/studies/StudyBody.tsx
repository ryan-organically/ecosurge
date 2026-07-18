import { Fragment, type ReactNode } from 'react'
import { type StudyBlock } from '@/data/studies/types'
import { StudyFigure } from './figures'

// Lightweight inline formatter: **bold**, *italic*, `code`. Deterministic and
// dependency-free so it is safe inside the static export.
function inline(text: string): ReactNode {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g)
  return tokens.map((tok, i) => {
    if (tok.startsWith('**') && tok.endsWith('**')) return <strong key={i}>{tok.slice(2, -2)}</strong>
    if (tok.startsWith('*') && tok.endsWith('*')) return <em key={i}>{tok.slice(1, -1)}</em>
    if (tok.startsWith('`') && tok.endsWith('`')) return <code key={i}>{tok.slice(1, -1)}</code>
    return <Fragment key={i}>{tok}</Fragment>
  })
}

export function StudyBody({ blocks }: { blocks: StudyBlock[] }) {
  return (
    <div className="study-body">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'lead':
            return (
              <p key={i} className="study-lead">
                {inline(b.text)}
              </p>
            )
          case 'heading':
            return <h2 key={i}>{inline(b.text)}</h2>
          case 'paragraph':
            return <p key={i}>{inline(b.text)}</p>
          case 'list':
            return b.ordered ? (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            ) : (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            )
          case 'callout':
            return (
              <aside key={i} className="study-callout">
                {b.title && <span className="callout-title">{b.title}</span>}
                <p>{inline(b.text)}</p>
              </aside>
            )
          case 'quote':
            return (
              <blockquote key={i} className="study-quote">
                <p>{inline(b.text)}</p>
                {b.attribution && <cite>{b.attribution}</cite>}
              </blockquote>
            )
          case 'stats':
            return (
              <div key={i} className="study-stats">
                {b.items.map((s, j) => (
                  <div key={j} className="study-stat">
                    <span className="study-stat-value">{s.value}</span>
                    <span className="study-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )
          case 'figure':
            return <StudyFigure key={i} viz={b.viz} caption={b.caption} />
          case 'equation':
            return (
              <div key={i} className="study-equation">
                <div className="equation-display">{b.display}</div>
                {b.where && b.where.length > 0 && (
                  <ul className="equation-where">
                    {b.where.map((wdef, j) => (
                      <li key={j}>{inline(wdef)}</li>
                    ))}
                  </ul>
                )}
                {b.note && <p className="equation-note">{inline(b.note)}</p>}
              </div>
            )
          case 'steps':
            return (
              <ol key={i} className="study-steps">
                {b.items.map((s, j) => (
                  <li key={j}>
                    <span className="step-title">{inline(s.title)}</span>
                    <span className="step-text">{inline(s.text)}</span>
                  </li>
                ))}
              </ol>
            )
          case 'table':
            return (
              <div key={i} className="study-table-wrap">
                <table className="study-table">
                  <thead>
                    <tr>
                      {b.columns.map((c, j) => (
                        <th key={j}>{inline(c)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>{inline(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && <p className="study-table-caption">{b.caption}</p>}
              </div>
            )
          case 'divider':
            return <hr key={i} className="study-divider" />
          default:
            return null
        }
      })}
    </div>
  )
}
