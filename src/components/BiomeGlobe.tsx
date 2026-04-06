'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { useRef, useMemo, useState, useCallback } from 'react'
import * as THREE from 'three'

/* ------------------------------------------------------------------ */
/*  Biome region definitions with approximate lat/lng bounding areas  */
/* ------------------------------------------------------------------ */

interface BiomeRegion {
  id: string
  name: string
  color: string
  /** Approximate representative lat/lng points for this biome on the globe */
  zones: { lat: number; lng: number; radius: number }[]
}

const BIOME_REGIONS: BiomeRegion[] = [
  {
    id: 'tropical-rainforest',
    name: 'Tropical Rainforest',
    color: '#006400',
    zones: [
      { lat: -3, lng: -60, radius: 0.18 },   // Amazon
      { lat: 5, lng: -75, radius: 0.06 },    // Chocó
      { lat: 0, lng: 25, radius: 0.12 },     // Congo Basin
      { lat: 5, lng: -8, radius: 0.05 },     // West Africa
      { lat: 2, lng: 110, radius: 0.1 },     // Borneo/SE Asia
      { lat: 7, lng: 100, radius: 0.05 },    // Malay Peninsula
      { lat: -5, lng: 140, radius: 0.06 },   // New Guinea
      { lat: -18, lng: -42, radius: 0.05 },  // Atlantic Forest
    ],
  },
  {
    id: 'temperate-forest',
    name: 'Temperate Forest',
    color: '#228B22',
    zones: [
      { lat: 45, lng: -80, radius: 0.12 },   // Eastern NA
      { lat: 47, lng: -123, radius: 0.05 },  // Pacific NW
      { lat: 48, lng: 10, radius: 0.1 },     // Central Europe
      { lat: 52, lng: -3, radius: 0.05 },    // British Isles
      { lat: 35, lng: 130, radius: 0.08 },   // Japan/Korea
      { lat: 30, lng: 115, radius: 0.06 },   // Central China
      { lat: -42, lng: 172, radius: 0.05 },  // New Zealand
      { lat: -42, lng: -72, radius: 0.04 },  // Valdivian
    ],
  },
  {
    id: 'boreal-forest',
    name: 'Boreal Forest / Taiga',
    color: '#2E8B57',
    zones: [
      { lat: 58, lng: -100, radius: 0.15 },  // Canada W
      { lat: 55, lng: -75, radius: 0.12 },   // Canada E
      { lat: 64, lng: -150, radius: 0.06 },  // Alaska
      { lat: 62, lng: 28, radius: 0.1 },     // Finland/Scandinavia
      { lat: 58, lng: 60, radius: 0.12 },    // W Siberia
      { lat: 60, lng: 100, radius: 0.14 },   // Central Siberia
      { lat: 58, lng: 135, radius: 0.1 },    // E Siberia
    ],
  },
  {
    id: 'tropical-savanna',
    name: 'Tropical Savanna',
    color: '#DAA520',
    zones: [
      { lat: -5, lng: 30, radius: 0.12 },    // E Africa
      { lat: 10, lng: 0, radius: 0.08 },     // W Africa Sahel
      { lat: -15, lng: -50, radius: 0.1 },   // Cerrado
      { lat: 8, lng: -67, radius: 0.06 },    // Llanos
      { lat: -18, lng: 130, radius: 0.08 },  // N Australia
      { lat: 15, lng: 78, radius: 0.06 },    // Deccan Plateau
    ],
  },
  {
    id: 'desert',
    name: 'Desert',
    color: '#EDC9AF',
    zones: [
      { lat: 25, lng: 5, radius: 0.14 },     // Sahara W
      { lat: 23, lng: 25, radius: 0.12 },    // Sahara E
      { lat: 25, lng: 50, radius: 0.1 },     // Arabian
      { lat: -25, lng: 130, radius: 0.08 },  // Australian
      { lat: 40, lng: 65, radius: 0.08 },    // Central Asian
      { lat: 32, lng: -112, radius: 0.06 },  // Sonoran
      { lat: -25, lng: 16, radius: 0.05 },   // Namib
      { lat: 43, lng: 105, radius: 0.07 },   // Gobi
    ],
  },
  {
    id: 'tundra',
    name: 'Tundra',
    color: '#B0C4DE',
    zones: [
      { lat: 72, lng: -100, radius: 0.12 },  // Arctic Canada
      { lat: 75, lng: -45, radius: 0.08 },   // Greenland
      { lat: 70, lng: 30, radius: 0.08 },    // Svalbard/Barents
      { lat: 72, lng: 70, radius: 0.1 },     // Siberian coast W
      { lat: 72, lng: 150, radius: 0.1 },    // Siberian coast E
      { lat: 70, lng: -155, radius: 0.06 },  // Alaska North Slope
    ],
  },
  {
    id: 'coral-reef',
    name: 'Coral Reef',
    color: '#FF6B6B',
    zones: [
      { lat: -18, lng: 148, radius: 0.06 },  // Great Barrier Reef
      { lat: 5, lng: 122, radius: 0.05 },    // Coral Triangle
      { lat: 20, lng: -87, radius: 0.04 },   // Caribbean
      { lat: -10, lng: 40, radius: 0.03 },   // E Africa coast
      { lat: 22, lng: 38, radius: 0.03 },    // Red Sea
      { lat: 5, lng: 73, radius: 0.03 },     // Maldives
    ],
  },
  {
    id: 'temperate-grassland',
    name: 'Temperate Grassland',
    color: '#9ACD32',
    zones: [
      { lat: 42, lng: -100, radius: 0.1 },   // Great Plains
      { lat: -35, lng: -60, radius: 0.07 },  // Pampas
      { lat: 48, lng: 65, radius: 0.1 },     // Kazakh Steppe
      { lat: 48, lng: 115, radius: 0.08 },   // Mongolian Steppe
      { lat: -28, lng: 28, radius: 0.05 },   // S African Highveld
    ],
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    color: '#B87333',
    zones: [
      { lat: 38, lng: 15, radius: 0.07 },    // Mediterranean Basin
      { lat: 36, lng: -5, radius: 0.04 },    // Iberia/N Africa
      { lat: 34, lng: -118, radius: 0.04 },  // California
      { lat: -34, lng: 19, radius: 0.04 },   // Cape Region
      { lat: -33, lng: -71, radius: 0.03 },  // Chile
      { lat: -33, lng: 117, radius: 0.04 },  // SW Australia
    ],
  },
  {
    id: 'freshwater',
    name: 'Freshwater',
    color: '#3A7EC8',
    zones: [
      { lat: -3, lng: -65, radius: 0.05 },   // Amazon River
      { lat: 0, lng: 30, radius: 0.04 },     // Great Lakes (Africa)
      { lat: 52, lng: 108, radius: 0.04 },   // Lake Baikal
      { lat: 45, lng: -84, radius: 0.04 },   // Great Lakes (NA)
      { lat: 15, lng: 105, radius: 0.04 },   // Mekong
      { lat: 25, lng: 87, radius: 0.04 },    // Ganges
    ],
  },
  {
    id: 'marine-pelagic',
    name: 'Marine Pelagic',
    color: '#1A5276',
    zones: [
      { lat: 35, lng: -40, radius: 0.08 },   // N Atlantic
      { lat: 30, lng: 160, radius: 0.08 },   // N Pacific
      { lat: -58, lng: -20, radius: 0.06 },  // Southern Ocean
      { lat: 0, lng: -140, radius: 0.06 },   // Equatorial Pacific
      { lat: -10, lng: 70, radius: 0.06 },   // Indian Ocean
    ],
  },
  {
    id: 'deep-sea',
    name: 'Deep Sea',
    color: '#0D2137',
    zones: [
      { lat: 10, lng: -140, radius: 0.06 },  // Clarion-Clipperton
      { lat: 30, lng: -30, radius: 0.05 },   // Mid-Atlantic Ridge
      { lat: 12, lng: 143, radius: 0.03 },   // Mariana Trench
      { lat: -60, lng: 0, radius: 0.05 },    // Antarctic abyss
    ],
  },
  {
    id: 'mangrove',
    name: 'Mangrove',
    color: '#4A7A4A',
    zones: [
      { lat: 22, lng: 89, radius: 0.04 },    // Sundarbans
      { lat: -5, lng: 110, radius: 0.03 },   // Indonesian coasts
      { lat: 5, lng: 5, radius: 0.03 },      // W African coast
      { lat: -20, lng: 140, radius: 0.03 },  // N Australian coast
      { lat: 25, lng: -81, radius: 0.03 },   // Florida Everglades
      { lat: 15, lng: 98, radius: 0.03 },    // Myanmar coast
    ],
  },
  {
    id: 'wetland',
    name: 'Wetland',
    color: '#5B8A72',
    zones: [
      { lat: -18, lng: -57, radius: 0.06 },  // Pantanal
      { lat: -20, lng: 23, radius: 0.05 },   // Okavango Delta
      { lat: 25, lng: -81, radius: 0.03 },   // Everglades
      { lat: 62, lng: 70, radius: 0.06 },    // W Siberian Lowlands
      { lat: 8, lng: 30, radius: 0.04 },     // Sudd
      { lat: 55, lng: -85, radius: 0.05 },   // Hudson Bay Lowlands
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Coordinate helpers                                                 */
/* ------------------------------------------------------------------ */

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function RotatingGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)
  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06
    }
  })
  return <group ref={groupRef}>{children}</group>
}

function LatitudeLines() {
  const lineObjects = useMemo(() => {
    const result: THREE.Line[] = []
    const lats = [-66.5, -23.5, 0, 23.5, 66.5] // Arctic/Antarctic circles, tropics, equator
    for (let li = 0; li < lats.length; li++) {
      const lat = lats[li]
      const phi = (90 - lat) * (Math.PI / 180)
      const r = 1.003
      const points: THREE.Vector3[] = []
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2
        points.push(new THREE.Vector3(
          -(r * Math.sin(phi) * Math.cos(theta)),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta),
        ))
      }
      const geom = new THREE.BufferGeometry().setFromPoints(points)
      const mat = new THREE.LineBasicMaterial({
        color: li === 2 ? '#4CAF50' : '#ffffff',
        transparent: true,
        opacity: li === 2 ? 0.12 : 0.06,
      })
      result.push(new THREE.Line(geom, mat))
    }
    return result
  }, [])

  return (
    <>
      {lineObjects.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
    </>
  )
}

function GlobeSphere() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0a1628" roughness={0.9} metalness={0.1} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.002, 36, 18]} />
        <meshBasicMaterial color="#4CAF50" wireframe transparent opacity={0.04} />
      </mesh>
    </>
  )
}

function AtmosphereGlow() {
  const uniforms = useMemo(
    () => ({ glowColor: { value: new THREE.Color('#4CAF50') } }),
    [],
  )
  return (
    <mesh>
      <sphereGeometry args={[1.12, 64, 64]} />
      <shaderMaterial
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

/** A biome zone rendered as a glowing disc on the globe surface */
function BiomeZone({
  lat,
  lng,
  radius,
  color,
  name,
  biomeId,
  onHover,
}: {
  lat: number
  lng: number
  radius: number
  color: string
  name: string
  biomeId: string
  onHover: (id: string | null) => void
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const position = useMemo(() => latLngToVector3(lat, lng, 1.005), [lat, lng])
  const normal = useMemo(() => position.clone().normalize(), [position])

  // Orient the disc to face outward from the globe center
  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion()
    q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
    return q
  }, [normal])

  const phase = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime
      const pulse = 0.6 + Math.sin(t * 1.5 + phase) * 0.15
      const mat = meshRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = pulse
    }
  })

  const [hovered, setHovered] = useState(false)
  const onPointerOver = useCallback(() => { setHovered(true); onHover(biomeId) }, [biomeId, onHover])
  const onPointerOut = useCallback(() => { setHovered(false); onHover(null) }, [onHover])

  return (
    <group position={position} quaternion={quaternion}>
      {/* Outer glow */}
      <mesh>
        <circleGeometry args={[radius * 1.4, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Core disc */}
      <mesh
        ref={meshRef}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <circleGeometry args={[radius, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>

      {/* Label on hover */}
      {hovered && (
        <Html distanceFactor={3} style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}>
          <div style={{
            background: 'rgba(10, 22, 40, 0.92)',
            color: '#e8eaed',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontFamily: 'DM Sans, sans-serif',
            border: `1px solid ${color}`,
            boxShadow: `0 0 8px ${color}44`,
            transform: 'translateY(-24px)',
          }}>
            {name}
          </div>
        </Html>
      )}
    </group>
  )
}

function CameraSetup() {
  const { camera } = useThree()
  useMemo(() => {
    camera.position.set(0, 0.3, 2.6)
  }, [camera])
  return null
}

/* ------------------------------------------------------------------ */
/*  Main BiomeGlobe component                                         */
/* ------------------------------------------------------------------ */

export function BiomeGlobe({ height = 400 }: { height?: number }) {
  const [hoveredBiome, setHoveredBiome] = useState<string | null>(null)
  const handleHover = useCallback((id: string | null) => setHoveredBiome(id), [])

  return (
    <div style={{ width: '100%', height, position: 'relative' }} className="globe-container">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <CameraSetup />
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 3, 5]} intensity={0.9} />
        <directionalLight position={[-5, -3, -5]} intensity={0.2} color="#4CAF50" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI * 0.15}
          maxPolarAngle={Math.PI * 0.85}
        />
        <RotatingGroup>
          <GlobeSphere />
          <LatitudeLines />
          <AtmosphereGlow />
          {BIOME_REGIONS.map(biome =>
            biome.zones.map((zone, zi) => (
              <BiomeZone
                key={`${biome.id}-${zi}`}
                lat={zone.lat}
                lng={zone.lng}
                radius={zone.radius}
                color={biome.color}
                name={biome.name}
                biomeId={biome.id}
                onHover={handleHover}
              />
            ))
          )}
        </RotatingGroup>
      </Canvas>

      {/* Legend overlay */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '8px',
        background: 'rgba(10, 22, 40, 0.88)',
        borderRadius: '8px',
        padding: '6px 10px',
        fontSize: '0.62rem',
        color: '#9aa0a6',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3px 10px',
        maxWidth: '320px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {BIOME_REGIONS.map(b => (
          <span key={b.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            opacity: hoveredBiome && hoveredBiome !== b.id ? 0.35 : 1,
            transition: 'opacity 0.2s',
            lineHeight: 1.3,
          }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: b.color,
              display: 'inline-block',
              flexShrink: 0,
              boxShadow: `0 0 4px ${b.color}66`,
            }} />
            {b.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default BiomeGlobe
