'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useRef, useMemo, useState, useCallback } from 'react'
import * as THREE from 'three'

/* ------------------------------------------------------------------ */
/*  Public types                                                       */
/* ------------------------------------------------------------------ */

export interface GlobeMarker {
  lat: number
  lng: number
  label: string
  color?: string
}

export interface GlobeProps {
  markers?: GlobeMarker[]
  height?: number
}

/* ------------------------------------------------------------------ */
/*  Coordinate helpers                                                 */
/* ------------------------------------------------------------------ */

function latLngToVector3(
  lat: number,
  lng: number,
  radius: number,
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

/* ------------------------------------------------------------------ */
/*  Simplified continent outlines  (~20-30 key points each)           */
/* ------------------------------------------------------------------ */

const CONTINENT_OUTLINES: { name: string; coords: [number, number][] }[] = [
  {
    name: 'Africa',
    coords: [
      [37.5, -9.8], [36.8, -6], [35.2, -2.2], [33.9, -4.8], [31.5, -10],
      [29.6, -11.5], [23.5, -15.9], [18.1, -16], [14.7, -17.4],
      [11.4, -15], [8.2, -13.3], [5.8, -7.5], [4.9, 1.5], [6.1, 4.8],
      [4.3, 8.5], [1, 9.4], [-4.3, 11.9], [-10.5, 13.5], [-15.6, 11.8],
      [-20.5, 17.1], [-26.2, 14.5], [-33.9, 18.4], [-34.8, 20.1],
      [-33.5, 26.3], [-30.6, 30.4], [-26.1, 35.5], [-22.4, 43.3],
      [-17.1, 43.2], [-11.8, 42.7], [-5.5, 39.4], [0.5, 42.5],
      [4.2, 46.5], [10.2, 51.1], [12.5, 45], [16.9, 39], [22.5, 41.5],
      [28.5, 50.6], [31.3, 51.8], [31, 44.5], [30.5, 35.3], [31.5, 34.5],
      [33, 29.5], [35.5, 23], [37.5, 10], [37.5, -9.8],
    ],
  },
  {
    name: 'Europe',
    coords: [
      [36, -9], [36.7, -2.5], [38.7, 0.2], [41.4, 2], [43.3, 4.8],
      [43.5, 7.5], [44.1, 10.5], [42.1, 11.5], [40.9, 14], [42, 18.5],
      [45.5, 13.7], [47.8, 16.2], [48.6, 19.1], [50.4, 27.6], [54, 33],
      [57.1, 25], [59.9, 24.7], [62, 31], [66, 30.1], [70.1, 28],
      [70, 20], [68.5, 15.5], [65, 12], [62, 5], [59, 5.5],
      [57, 10], [55, 9.5], [54, 11], [52.5, 5], [51, 4],
      [50, -1.3], [48.5, -4.5], [45.5, -1], [43, -3], [42.8, -8.8],
      [40.3, -8.8], [38.7, -9.5], [36, -9],
    ],
  },
  {
    name: 'Asia',
    coords: [
      [42, 27], [42.5, 35], [41.8, 44], [40, 49.5], [37, 54],
      [42.5, 59.5], [47, 54], [52, 58], [60, 60], [67, 69],
      [73, 80], [77, 105], [76, 140], [71, 135], [68, 162],
      [63, 178], [66, -170], [55, -160], [51, -158], [56, 162],
      [51, 143], [43, 133], [38.5, 130], [35, 128], [30, 122],
      [22, 120.5], [21.5, 109], [16, 108.5], [10.5, 107],
      [6, 104], [1, 103.5], [5, 98], [12, 100], [16, 97],
      [21, 88], [24.5, 88.5], [28.5, 84], [24, 72], [25, 62],
      [27.5, 56.5], [29.5, 50], [30, 48], [29.5, 40], [31, 35],
      [35, 34], [37.5, 27], [42, 27],
    ],
  },
  {
    name: 'NorthAmerica',
    coords: [
      [83, -70], [78, -73], [72, -78], [68, -82], [70, -97],
      [72, -115], [68, -137], [62, -142], [60, -148], [59, -157],
      [66, -166], [63, -164], [56, -160], [52, -175], [49, -125],
      [46, -124], [40, -124], [36, -122], [32.5, -117],
      [25, -110], [20.5, -105.5], [18, -95], [21.5, -90],
      [18.5, -88], [15.5, -84], [10, -84], [8, -77],
      [12, -72], [10.5, -61], [18, -64], [20, -76],
      [25, -80.5], [28.5, -84], [30, -88], [29, -93],
      [26.5, -97], [30, -97.5], [33.5, -94.5], [38.5, -90],
      [43, -87], [48.5, -89], [49, -95], [55, -97],
      [60, -94], [55.5, -80], [52, -66], [47, -61],
      [51, -56], [56, -61], [60, -64.5], [67, -63],
      [73, -56], [78.5, -68], [83, -70],
    ],
  },
  {
    name: 'SouthAmerica',
    coords: [
      [12, -72], [10.5, -61], [6, -57], [2.5, -50], [-1, -48],
      [-5, -35], [-9, -35], [-15, -39], [-20, -40], [-23.5, -43],
      [-28, -49], [-33, -52], [-38.5, -58], [-42, -63.5],
      [-47, -66], [-52, -68], [-55, -67], [-52, -73],
      [-47, -73.5], [-41, -73], [-35, -72], [-27, -71],
      [-19.5, -70], [-15.5, -75], [-11, -77.5], [-7, -80],
      [-3, -80], [0.5, -78.5], [4, -77], [8, -77],
      [12, -72],
    ],
  },
  {
    name: 'Australia',
    coords: [
      [-10.5, 142], [-14, 141], [-14.5, 135], [-12.5, 130],
      [-15, 129], [-17, 123], [-20.5, 117], [-24.5, 113.5],
      [-28, 114], [-32, 115.5], [-35, 117], [-35, 118],
      [-34, 123], [-32.5, 134], [-36, 137], [-39, 145],
      [-37.5, 150], [-32, 152.5], [-25, 153], [-20, 149],
      [-16.5, 146], [-14.5, 144], [-10.5, 142],
    ],
  },
  {
    name: 'Antarctica',
    coords: [
      [-66, 0], [-68, 15], [-70, 30], [-69, 45], [-68, 60],
      [-66, 90], [-68, 105], [-70, 120], [-68, 150], [-66, 180],
      [-68, -165], [-70, -150], [-68, -120], [-70, -90],
      [-68, -60], [-70, -30], [-66, 0],
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Sub-components rendered inside the R3F Canvas                      */
/* ------------------------------------------------------------------ */

/** Auto-rotating group that wraps globe + markers */
function RotatingGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08
    }
  })

  return <group ref={groupRef}>{children}</group>
}

/** Dark sphere with a subtle grid overlay */
function GlobeSphere() {
  return (
    <>
      {/* Base dark sphere */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0a1628"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Subtle lat/lng wireframe grid */}
      <mesh>
        <sphereGeometry args={[1.002, 36, 18]} />
        <meshBasicMaterial
          color="#4CAF50"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>
    </>
  )
}

/** Continent outlines drawn as connected line segments */
function ContinentLines() {
  const lineSegments = useMemo(() => {
    const segments: { positions: Float32Array }[] = []

    for (const continent of CONTINENT_OUTLINES) {
      const verts: number[] = []

      for (let i = 0; i < continent.coords.length - 1; i++) {
        const [lat1, lng1] = continent.coords[i]
        const [lat2, lng2] = continent.coords[i + 1]
        const a = latLngToVector3(lat1, lng1, 1.004)
        const b = latLngToVector3(lat2, lng2, 1.004)
        verts.push(a.x, a.y, a.z, b.x, b.y, b.z)
      }

      segments.push({ positions: new Float32Array(verts) })
    }

    return segments
  }, [])

  return (
    <>
      {lineSegments.map((seg, i) => (
        <lineSegments key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[seg.positions, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#4CAF50" transparent opacity={0.35} />
        </lineSegments>
      ))}
    </>
  )
}

/** Atmospheric glow (slightly larger back-side sphere with additive blending) */
function AtmosphereGlow() {
  const shaderRef = useRef<THREE.ShaderMaterial>(null)

  const uniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color('#4CAF50') },
    }),
    [],
  )

  return (
    <mesh>
      <sphereGeometry args={[1.12, 64, 64]} />
      <shaderMaterial
        ref={shaderRef}
        uniforms={uniforms}
        vertexShader={`
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 glowColor;
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.6;
          }
        `}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        transparent
      />
    </mesh>
  )
}

/** A single pulsing marker on the globe surface */
function Marker({
  lat,
  lng,
  label,
  color = '#4CAF50',
}: GlobeMarker) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const basePosition = useMemo(() => latLngToVector3(lat, lng, 1.015), [lat, lng])

  // Random phase offset so markers don't all pulse in sync
  const phase = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pulse = 1 + Math.sin(t * 2.5 + phase) * 0.25

    if (meshRef.current) {
      meshRef.current.scale.setScalar(pulse)
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(pulse * 1.8)
      const mat = glowRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.25 * (1 / pulse)
    }
  })

  const onPointerOver = useCallback(() => setHovered(true), [])
  const onPointerOut = useCallback(() => setHovered(false), [])

  return (
    <group position={basePosition}>
      {/* Glow disc */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>

      {/* Core dot */}
      <mesh
        ref={meshRef}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <sphereGeometry args={[0.02, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>

      {/* Label on hover */}
      {hovered && (
        <Html
          distanceFactor={3}
          style={{
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              background: 'rgba(10, 22, 40, 0.92)',
              color: '#e8eaed',
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '12px',
              fontFamily: 'DM Sans, sans-serif',
              border: `1px solid ${color}`,
              boxShadow: `0 0 8px ${color}44`,
              transform: 'translateY(-24px)',
            }}
          >
            {label}
          </div>
        </Html>
      )}
    </group>
  )
}

/** Ambient particle field around the globe */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, opacities } = useMemo(() => {
    const count = 300
    const pos = new Float32Array(count * 3)
    const opa = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Distribute in a shell around the globe
      const r = 1.3 + Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      opa[i] = 0.15 + Math.random() * 0.35
    }

    return { positions: pos, opacities: opa }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#4CAF50"
        size={0.012}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/** Camera defaults setter - runs once to position the camera */
function CameraSetup() {
  const { camera } = useThree()
  useMemo(() => {
    camera.position.set(0, 0.3, 2.6)
  }, [camera])
  return null
}

/* ------------------------------------------------------------------ */
/*  Main exported component                                            */
/* ------------------------------------------------------------------ */

export function Globe({ markers = [], height = 400 }: GlobeProps) {
  return (
    <div style={{ width: '100%', height }} className="globe-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <CameraSetup />

        {/* Lighting */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 3, 5]} intensity={0.9} />
        <directionalLight
          position={[-5, -3, -5]}
          intensity={0.2}
          color="#4CAF50"
        />

        {/* Interactive orbit controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI * 0.15}
          maxPolarAngle={Math.PI * 0.85}
        />

        {/* Auto-rotating group */}
        <RotatingGroup>
          <GlobeSphere />
          <ContinentLines />
          <AtmosphereGlow />

          {/* Species markers */}
          {markers.map((m, i) => (
            <Marker key={`${m.label}-${i}`} {...m} />
          ))}
        </RotatingGroup>

        {/* Ambient particle field (rotates independently) */}
        <ParticleField />
      </Canvas>
    </div>
  )
}

export default Globe
