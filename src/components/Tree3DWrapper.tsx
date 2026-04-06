'use client'

import { useRouter } from 'next/navigation'
import { Tree3D } from './Tree3D'
import type { CladeDiagramNode } from '@/lib/cladeUtils'

interface Tree3DWrapperProps {
  data: CladeDiagramNode
  activeNodeId?: string
}

export function Tree3DWrapper({ data, activeNodeId }: Tree3DWrapperProps) {
  const router = useRouter()

  const handleNodeClick = (nodeId: string, path: string[]) => {
    if (path.length > 0) {
      router.push(`/taxon/${path.join('/')}`)
    }
  }

  return (
    <div className="tree3d-container">
      <Tree3D
        data={data}
        activeNodeId={activeNodeId}
        onNodeClick={handleNodeClick}
      />
    </div>
  )
}
