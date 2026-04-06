'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Html, Line } from '@react-three/drei'
import { useRef, useMemo, useState, useCallback } from 'react'
import * as THREE from 'three'
import type { CladeDiagramNode } from '@/lib/cladeUtils'
import { getRankColor } from '@/data/helpers'
import type { TaxonomicRank } from '@/data/taxonomy'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface LayoutNode {
  id: string
  name: string
  scientificName: string
  rank: TaxonomicRank
  speciesCount: number
  path: string[]
  position: THREE.Vector3
  color: string
  radius: number
  children: LayoutNode[]
  parentPosition: THREE.Vector3 | null
  depth: number
}

export interface Tree3DProps {
  data: CladeDiagramNode
  activeNodeId?: string
  onNodeClick?: (nodeId: string, path: string[]) => void
}

/* ------------------------------------------------------------------ */
/*  Layout algorithm: 3D spherical / golden angle distribution         */
/* ------------------------------------------------------------------ */

const DEPTH_RADIUS_STEP = 2.8
const MIN_NODE_RADIUS = 0.08
const MAX_NODE_RADIUS = 0.35

function layoutTree(
  node: CladeDiagramNode,
  depth: number,
  parentPos: THREE.Vector3 | null,
  angleOffset: number,
  arcSpan: number,
  elevationCenter: number,
  elevationSpan: number,
): LayoutNode {
  const speciesCount = node.speciesCount ?? 1
  const logScale = Math.log2(Math.max(speciesCount, 1) + 1)
  const radius = Math.min(MAX_NODE_RADIUS, Math.max(MIN_NODE_RADIUS, logScale * 0.025))
  const color = getRankColor(node.rank)

  // Root at origin
  let position: THREE.Vector3
  if (depth === 0) {
    position = new THREE.Vector3(0, 0, 0)
  } else {
    const r = depth * DEPTH_RADIUS_STEP
    // Use spherical coordinates: theta is azimuthal, phi is polar
    const theta = angleOffset + arcSpan * 0.5
    const phi = elevationCenter
    position = new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta),
    )
  }

  const children: LayoutNode[] = []
  if (node.children && node.children.length > 0) {
    const childCount = node.children.length
    const childArcSpan = arcSpan / Math.max(childCount, 1)
    // For elevation, distribute children with some spread
    const childElevSpan = elevationSpan / Math.max(childCount, 1)

    node.children.forEach((child, i) => {
      // Golden angle based distribution for nice spacing
      const childAngleOffset = angleOffset + (i / childCount) * arcSpan
      const childElevCenter = elevationCenter - elevationSpan * 0.5 + childElevSpan * (i + 0.5)

      children.push(
        layoutTree(
          child,
          depth + 1,
          position,
          childAngleOffset,
          childArcSpan,
          childElevCenter,
          childElevSpan,
        ),
      )
    })
  }

  return {
    id: node.id,
    name: node.name,
    scientificName: node.scientificName,
    rank: node.rank,
    speciesCount,
    path: node.path,
    position,
    color,
    radius,
    children,
    parentPosition: parentPos,
    depth,
  }
}

/** Collect all nodes from the layout tree into a flat array */
function flattenLayoutTree(node: LayoutNode): LayoutNode[] {
  const result: LayoutNode[] = [node]
  for (const child of node.children) {
    result.push(...flattenLayoutTree(child))
  }
  return result
}

/** Collect ancestor IDs from activeNodeId up to root */
function collectAncestorIds(
  node: CladeDiagramNode,
  targetId: string,
  path: string[] = [],
): string[] | null {
  if (node.id === targetId) return [...path, node.id]
  if (node.children) {
    for (const child of node.children) {
      const result = collectAncestorIds(child, targetId, [...path, node.id])
      if (result) return result
    }
  }
  return null
}

/* ------------------------------------------------------------------ */
/*  Sub-components inside R3F Canvas                                   */
/* ------------------------------------------------------------------ */

/** Setup camera at a nice initial position */
function CameraSetup({ nodeCount }: { nodeCount: number }) {
  const { camera } = useThree()
  useMemo(() => {
    const dist = Math.max(8, Math.sqrt(nodeCount) * 1.5)
    camera.position.set(dist * 0.6, dist * 0.4, dist * 0.7)
    camera.lookAt(0, 0, 0)
  }, [camera, nodeCount])
  return null
}

/** Slow ambient rotation for visual interest */
function AmbientRotation({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.03
    }
  })

  return <group ref={groupRef}>{children}</group>
}

/** A single 3D node sphere */
function TreeNode({
  node,
  isActive,
  isAncestor,
  dimmed,
  onHover,
  onUnhover,
  onClick,
}: {
  node: LayoutNode
  isActive: boolean
  isAncestor: boolean
  dimmed: boolean
  onHover: (node: LayoutNode) => void
  onUnhover: () => void
  onClick: (node: LayoutNode) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const baseScale = useRef(1)

  useFrame((_state, delta) => {
    if (!meshRef.current) return
    // Smooth scale animation on hover
    const targetScale = hovered ? 1.4 : 1
    baseScale.current = THREE.MathUtils.lerp(baseScale.current, targetScale, delta * 8)
    meshRef.current.scale.setScalar(baseScale.current)
  })

  const handlePointerOver = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation()
      setHovered(true)
      onHover(node)
      document.body.style.cursor = 'pointer'
    },
    [node, onHover],
  )

  const handlePointerOut = useCallback(() => {
    setHovered(false)
    onUnhover()
    document.body.style.cursor = 'auto'
  }, [onUnhover])

  const handleClick = useCallback(
    (e: { stopPropagation: () => void }) => {
      e.stopPropagation()
      onClick(node)
    },
    [node, onClick],
  )

  const opacity = dimmed ? 0.25 : 1
  const emissiveIntensity = isActive ? 0.8 : isAncestor ? 0.4 : hovered ? 0.3 : 0

  return (
    <mesh
      ref={meshRef}
      position={node.position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <sphereGeometry args={[node.radius, 16, 16]} />
      <meshStandardMaterial
        color={node.color}
        emissive={node.color}
        emissiveIntensity={emissiveIntensity}
        transparent
        opacity={opacity}
        roughness={0.4}
        metalness={0.3}
      />
    </mesh>
  )
}

/** Active node glow pulse */
function ActiveGlow({ position, color, radius }: { position: THREE.Vector3; color: string; radius: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.2
      meshRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius * 2.2, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} depthWrite={false} />
    </mesh>
  )
}

/** Link between parent and child as a curved line */
function TreeLink({
  parentPos,
  childPos,
  color,
  dimmed,
}: {
  parentPos: THREE.Vector3
  childPos: THREE.Vector3
  color: string
  dimmed: boolean
}) {
  const points = useMemo(() => {
    // Create a smooth curve with a midpoint pulled slightly toward center
    const mid = new THREE.Vector3().lerpVectors(parentPos, childPos, 0.5)
    // Pull midpoint slightly inward for organic feel
    const inward = mid.clone().normalize().multiplyScalar(-0.3)
    mid.add(inward)

    const curve = new THREE.QuadraticBezierCurve3(parentPos, mid, childPos)
    return curve.getPoints(12)
  }, [parentPos, childPos])

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1}
      transparent
      opacity={dimmed ? 0.08 : 0.3}
    />
  )
}

/** Tooltip displayed via drei Html */
function NodeTooltip({ node }: { node: LayoutNode }) {
  return (
    <Html
      position={node.position}
      distanceFactor={8}
      style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
      center
    >
      <div
        style={{
          background: 'rgba(10, 15, 20, 0.95)',
          color: '#e8eaed',
          padding: '6px 12px',
          borderRadius: '8px',
          fontSize: '12px',
          fontFamily: 'DM Sans, sans-serif',
          border: `1px solid ${node.color}`,
          boxShadow: `0 0 12px ${node.color}44`,
          transform: 'translateY(-30px)',
        }}
      >
        <div
          style={{
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 600,
            color: node.color,
            marginBottom: '2px',
          }}
        >
          {node.rank}
        </div>
        <div style={{ fontWeight: 700, fontSize: '13px' }}>{node.name}</div>
        <div
          style={{
            fontStyle: 'italic',
            color: '#9aa0a6',
            fontSize: '11px',
          }}
        >
          {node.scientificName}
        </div>
        {node.speciesCount > 1 && (
          <div
            style={{
              fontSize: '10px',
              color: '#4CAF50',
              marginTop: '3px',
            }}
          >
            {node.speciesCount.toLocaleString()} species
          </div>
        )}
      </div>
    </Html>
  )
}

/** Labels for major nodes (depth 0 and 1) */
function MajorNodeLabel({ node }: { node: LayoutNode }) {
  return (
    <Html
      position={[
        node.position.x,
        node.position.y + node.radius + 0.2,
        node.position.z,
      ]}
      distanceFactor={10}
      style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
      center
    >
      <div
        style={{
          color: '#e8eaed',
          fontSize: '10px',
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
          opacity: 0.85,
        }}
      >
        {node.name}
      </div>
    </Html>
  )
}

/** Ambient particle field for depth */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const count = 200
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 12
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#4CAF50"
        size={0.04}
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/* ------------------------------------------------------------------ */
/*  Main scene component                                               */
/* ------------------------------------------------------------------ */

function TreeScene({
  data,
  activeNodeId,
  onNodeClick,
}: Tree3DProps) {
  const [hoveredNode, setHoveredNode] = useState<LayoutNode | null>(null)

  // Build the 3D layout from the data tree
  const layoutRoot = useMemo(() => {
    return layoutTree(data, 0, null, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.8)
  }, [data])

  // Flatten for rendering
  const allNodes = useMemo(() => flattenLayoutTree(layoutRoot), [layoutRoot])

  // Ancestor chain for highlighting
  const ancestorIds = useMemo(() => {
    if (!activeNodeId) return new Set<string>()
    const chain = collectAncestorIds(data, activeNodeId)
    return new Set(chain || [])
  }, [data, activeNodeId])

  // Collect all links (parent-child edges)
  const links = useMemo(() => {
    const result: { parentPos: THREE.Vector3; childPos: THREE.Vector3; color: string; childId: string }[] = []
    function walk(node: LayoutNode) {
      for (const child of node.children) {
        result.push({
          parentPos: node.position,
          childPos: child.position,
          color: child.color,
          childId: child.id,
        })
        walk(child)
      }
    }
    walk(layoutRoot)
    return result
  }, [layoutRoot])

  const handleHover = useCallback((node: LayoutNode) => setHoveredNode(node), [])
  const handleUnhover = useCallback(() => setHoveredNode(null), [])
  const handleClick = useCallback(
    (node: LayoutNode) => {
      if (onNodeClick && node.path.length > 0) {
        onNodeClick(node.id, node.path)
      }
    },
    [onNodeClick],
  )

  // Active node for glow effect
  const activeNode = useMemo(
    () => (activeNodeId ? allNodes.find((n) => n.id === activeNodeId) : undefined),
    [allNodes, activeNodeId],
  )

  return (
    <>
      <CameraSetup nodeCount={allNodes.length} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={0.3} color="#4CAF50" />
      <pointLight position={[5, -10, 8]} intensity={0.2} color="#2196F3" />

      {/* Orbit controls */}
      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        rotateSpeed={0.6}
        zoomSpeed={0.8}
        panSpeed={0.5}
        minDistance={3}
        maxDistance={40}
        enableDamping
        dampingFactor={0.05}
      />

      <AmbientRotation>
        {/* Links */}
        {links.map((link, i) => {
          const isDimmed = activeNodeId
            ? !ancestorIds.has(link.childId)
            : false
          return (
            <TreeLink
              key={`link-${i}`}
              parentPos={link.parentPos}
              childPos={link.childPos}
              color={link.color}
              dimmed={isDimmed}
            />
          )
        })}

        {/* Nodes */}
        {allNodes.map((node) => {
          const isActive = node.id === activeNodeId
          const isAncestor = ancestorIds.has(node.id)
          const dimmed = activeNodeId ? !isAncestor && !isActive : false
          return (
            <TreeNode
              key={node.id}
              node={node}
              isActive={isActive}
              isAncestor={isAncestor}
              dimmed={dimmed}
              onHover={handleHover}
              onUnhover={handleUnhover}
              onClick={handleClick}
            />
          )
        })}

        {/* Active node glow */}
        {activeNode && (
          <ActiveGlow
            position={activeNode.position}
            color={activeNode.color}
            radius={activeNode.radius}
          />
        )}

        {/* Major node labels (depth 0 and 1) */}
        {allNodes
          .filter((n) => n.depth <= 1)
          .map((n) => (
            <MajorNodeLabel key={`label-${n.id}`} node={n} />
          ))}

        {/* Hover tooltip */}
        {hoveredNode && <NodeTooltip node={hoveredNode} />}
      </AmbientRotation>

      {/* Ambient particles */}
      <ParticleField />
    </>
  )
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function Tree3D({ data, activeNodeId, onNodeClick }: Tree3DProps) {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
      camera={{ fov: 50, near: 0.1, far: 100 }}
    >
      <TreeScene data={data} activeNodeId={activeNodeId} onNodeClick={onNodeClick} />
    </Canvas>
  )
}

export default Tree3D
