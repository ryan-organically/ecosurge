'use client'

import { useRouter } from 'next/navigation'
import { CladeDiagram } from './CladeDiagram'
import type { CladeDiagramNode } from '@/lib/cladeUtils'

interface CladeDiagramWrapperProps {
  data: CladeDiagramNode
  activeNodeId?: string
  size?: number
  showLegend?: boolean
}

export function CladeDiagramWrapper({ data, activeNodeId, size, showLegend }: CladeDiagramWrapperProps) {
  const router = useRouter()

  const handleNodeClick = (nodeId: string, path: string[]) => {
    if (path.length > 0) {
      router.push(`/taxon/${path.join('/')}`)
    }
  }

  return (
    <CladeDiagram
      data={data}
      activeNodeId={activeNodeId}
      size={size}
      showLegend={showLegend}
      onNodeClick={handleNodeClick}
    />
  )
}
