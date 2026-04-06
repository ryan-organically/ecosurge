'use client'

import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import type { TaxonomicRank } from '@/data/taxonomy'
import { getRankColor } from '@/data/helpers'
import type { CladeDiagramNode } from '@/lib/cladeUtils'

export interface CladeDiagramProps {
  data: CladeDiagramNode
  activeNodeId?: string
  size?: number
  showLegend?: boolean
  onNodeClick?: (nodeId: string, path: string[]) => void
}

interface TooltipState {
  visible: boolean
  x: number
  y: number
  node: CladeDiagramNode | null
}

const RANKS: TaxonomicRank[] = ['domain', 'kingdom', 'phylum', 'class', 'order', 'family', 'genus', 'species']

export function CladeDiagram({
  data,
  activeNodeId,
  size = 600,
  showLegend = true,
  onNodeClick,
}: CladeDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, x: 0, y: 0, node: null })

  useEffect(() => {
    if (!svgRef.current || !data) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    const margin = 140
    const radius = (size - margin * 2) / 2

    // Build hierarchy
    const root = d3.hierarchy(data)

    // Apply cluster layout
    const cluster = d3.cluster<CladeDiagramNode>()
      .size([2 * Math.PI, radius])
      .separation((a, b) => (a.parent === b.parent ? 1 : 2) / (a.depth || 1))

    cluster(root)

    // Center the diagram
    const g = svg
      .attr('viewBox', `${-size / 2} ${-size / 2} ${size} ${size}`)
      .append('g')

    // Determine active ancestor set
    let activeAncestorIds: Set<string> | null = null
    if (activeNodeId) {
      const activeHierNode = root.descendants().find(d => d.data.id === activeNodeId)
      if (activeHierNode) {
        activeAncestorIds = new Set(activeHierNode.ancestors().map(d => d.data.id))
      }
    }

    // Render links
    const linkGenerator = d3.linkRadial<
      d3.HierarchyPointLink<CladeDiagramNode>,
      d3.HierarchyPointNode<CladeDiagramNode>
    >()
      .angle((d) => (d as any).x)
      .radius((d) => (d as any).y)

    const links = g.selectAll('.clade-link')
      .data(root.links())
      .join('path')
      .attr('class', 'clade-link')
      .attr('d', linkGenerator as any)
      .attr('fill', 'none')
      .attr('stroke', d => getRankColor(d.target.data.rank))
      .attr('stroke-opacity', d => {
        if (!activeAncestorIds) return 0.5
        const onPath = activeAncestorIds.has(d.source.data.id) && activeAncestorIds.has(d.target.data.id)
        return onPath ? 1 : 0.15
      })
      .attr('stroke-width', d => {
        if (!activeAncestorIds) return 1.5
        const onPath = activeAncestorIds.has(d.source.data.id) && activeAncestorIds.has(d.target.data.id)
        return onPath ? 2.5 : 1
      })

    // Render nodes
    const nodes = g.selectAll('.clade-node')
      .data(root.descendants())
      .join('g')
      .attr('class', 'clade-node')
      .attr('transform', d => `rotate(${(d as any).x * 180 / Math.PI - 90}) translate(${(d as any).y}, 0)`)

    nodes.append('circle')
      .attr('r', d => {
        if (d.data.id === activeNodeId) return 6
        const count = d.data.speciesCount || 1
        return Math.max(2.5, Math.min(5, Math.log10(count + 1) * 1.5))
      })
      .attr('fill', d => getRankColor(d.data.rank))
      .attr('stroke', d => d.data.id === activeNodeId ? '#ffffff' : 'none')
      .attr('stroke-width', d => d.data.id === activeNodeId ? 2.5 : 0)
      .attr('opacity', d => {
        if (!activeAncestorIds) return 0.9
        return activeAncestorIds.has(d.data.id) ? 1 : 0.3
      })

    // Labels
    nodes.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => ((d as any).x < Math.PI) === !d.children ? 8 : -8)
      .attr('text-anchor', d => ((d as any).x < Math.PI) === !d.children ? 'start' : 'end')
      .attr('transform', d => (d as any).x >= Math.PI ? 'rotate(180)' : null)
      .text(d => d.depth === 0 ? '' : d.data.name)
      .attr('fill', d => {
        if (d.data.id === activeNodeId) return '#ffffff'
        if (!activeAncestorIds) return '#9aa0a6'
        return activeAncestorIds.has(d.data.id) ? '#e8eaed' : '#5f6368'
      })
      .attr('font-size', d => {
        if (d.data.id === activeNodeId) return '11px'
        if (d.depth <= 1) return '11px'
        return '9px'
      })
      .attr('font-weight', d => {
        if (d.data.id === activeNodeId) return '700'
        if (d.depth <= 1) return '600'
        return '400'
      })

    // Hover interactivity
    const resetHighlighting = () => {
      links
        .transition().duration(300)
        .attr('stroke-opacity', (d: any) => {
          if (!activeAncestorIds) return 0.5
          const onPath = activeAncestorIds!.has(d.source.data.id) && activeAncestorIds!.has(d.target.data.id)
          return onPath ? 1 : 0.15
        })
        .attr('stroke-width', (d: any) => {
          if (!activeAncestorIds) return 1.5
          const onPath = activeAncestorIds!.has(d.source.data.id) && activeAncestorIds!.has(d.target.data.id)
          return onPath ? 2.5 : 1
        })

      nodes.selectAll<SVGCircleElement, d3.HierarchyPointNode<CladeDiagramNode>>('circle')
        .transition().duration(300)
        .attr('opacity', (d) => {
          if (!activeAncestorIds) return 0.9
          return activeAncestorIds!.has(d.data.id) ? 1 : 0.3
        })

      nodes.selectAll<SVGTextElement, d3.HierarchyPointNode<CladeDiagramNode>>('text')
        .transition().duration(300)
        .attr('fill', (d) => {
          if (d.data.id === activeNodeId) return '#ffffff'
          if (!activeAncestorIds) return '#9aa0a6'
          return activeAncestorIds!.has(d.data.id) ? '#e8eaed' : '#5f6368'
        })
    }

    nodes
      .on('mouseenter', function (event, d) {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setTooltip({
          visible: true,
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          node: d.data,
        })

        // Highlight ancestor chain
        const hoverAncestors = new Set(d.ancestors().map(a => a.data.id))

        links
          .transition().duration(200)
          .attr('stroke-opacity', (l: any) =>
            hoverAncestors.has(l.source.data.id) && hoverAncestors.has(l.target.data.id) ? 1 : 0.06
          )
          .attr('stroke-width', (l: any) =>
            hoverAncestors.has(l.source.data.id) && hoverAncestors.has(l.target.data.id) ? 2.5 : 0.8
          )

        nodes.selectAll<SVGCircleElement, d3.HierarchyPointNode<CladeDiagramNode>>('circle')
          .transition().duration(200)
          .attr('opacity', (n) => hoverAncestors.has(n.data.id) ? 1 : 0.12)

        nodes.selectAll<SVGTextElement, d3.HierarchyPointNode<CladeDiagramNode>>('text')
          .transition().duration(200)
          .attr('fill', (n) => hoverAncestors.has(n.data.id) ? '#e8eaed' : '#3a3f44')
      })
      .on('mouseleave', function () {
        setTooltip(prev => ({ ...prev, visible: false }))
        resetHighlighting()
      })
      .on('click', function (event, d) {
        if (onNodeClick && d.data.path.length > 0) {
          onNodeClick(d.data.id, d.data.path)
        }
      })
      .style('cursor', d => d.data.path.length > 0 ? 'pointer' : 'default')

  }, [data, size, activeNodeId, onNodeClick])

  // Determine which ranks are present in the data
  const presentRanks = new Set<TaxonomicRank>()
  function collectRanks(node: CladeDiagramNode) {
    presentRanks.add(node.rank)
    node.children?.forEach(collectRanks)
  }
  collectRanks(data)

  return (
    <div className="clade-container" ref={containerRef}>
      <svg ref={svgRef} className="clade-svg" />

      {tooltip.visible && tooltip.node && (
        <div
          className="clade-tooltip"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 16,
          }}
        >
          <div className="clade-tooltip-rank" style={{ color: getRankColor(tooltip.node.rank) }}>
            {tooltip.node.rank}
          </div>
          <div className="clade-tooltip-name">{tooltip.node.name}</div>
          <div className="clade-tooltip-scientific">{tooltip.node.scientificName}</div>
          {tooltip.node.speciesCount != null && (
            <div className="clade-tooltip-count">
              {tooltip.node.speciesCount.toLocaleString()} species
            </div>
          )}
        </div>
      )}

      {showLegend && (
        <div className="clade-legend">
          {RANKS.filter(r => presentRanks.has(r)).map(rank => (
            <div key={rank} className="clade-legend-item">
              <div className="clade-legend-dot" style={{ background: getRankColor(rank) }} />
              <span>{rank}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
