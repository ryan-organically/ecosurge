'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

import {
  pollFires,
  latLonToVec3,
  FIRE_POLL_INTERVAL_MS,
  type FireEvent,
  type FireDataResult,
} from '@/lib/fireData'
import { FIRE_CONTINENT_OUTLINES } from './fireGlobeGeo'

/* ------------------------------------------------------------------ */
/*  Scene: sphere, continents, atmosphere                              */
/* ------------------------------------------------------------------ */

function GlobeSphere() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#0b1220" roughness={0.95} metalness={0.05} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.002, 36, 18]} />
        <meshBasicMaterial color="#ff8c42" wireframe transparent opacity={0.05} />
      </mesh>
    </>
  )
}

function ContinentLines() {
  const segments = useMemo(() => {
    const out: Float32Array[] = []
    for (const continent of FIRE_CONTINENT_OUTLINES) {
      const verts: number[] = []
      for (let i = 0; i < continent.coords.length - 1; i++) {
        const [lat1, lng1] = continent.coords[i]
        const [lat2, lng2] = continent.coords[i + 1]
        const a = latLonToVec3(lat1, lng1, 1.004)
        const b = latLonToVec3(lat2, lng2, 1.004)
        verts.push(a[0], a[1], a[2], b[0], b[1], b[2])
      }
      out.push(new Float32Array(verts))
    }
    return out
  }, [])

  return (
    <>
      {segments.map((positions, i) => (
        <lineSegments key={i}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          </bufferGeometry>
          <lineBasicMaterial color="#3a4a5a" transparent opacity={0.55} />
        </lineSegments>
      ))}
    </>
  )
}

function AtmosphereGlow() {
  const uniforms = useMemo(
    () => ({ glowColor: { value: new THREE.Color('#ff5722') } }),
    [],
  )
  return (
    <mesh>
      <sphereGeometry args={[1.14, 64, 64]} />
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
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(glowColor, 1.0) * intensity * 0.55;
          }
        `}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        transparent
      />
    </mesh>
  )
}

/* ------------------------------------------------------------------ */
/*  Fire markers + smoke haze                                          */
/* ------------------------------------------------------------------ */

function FireMarker({ event, selected }: { event: FireEvent; selected: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const smokeRef = useRef<THREE.Mesh>(null)

  const intensity = event.intensity ?? 0.4
  const baseSize = 0.012 + intensity * 0.03
  const position = useMemo(
    () => latLonToVec3(event.lat, event.lon, 1.012),
    [event.lat, event.lon],
  )
  const phase = useMemo(() => Math.random() * Math.PI * 2, [])
  // Smoke drifts "up" away from globe center.
  const outward = useMemo(() => new THREE.Vector3(...position).normalize(), [position])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pulse = 1 + Math.sin(t * 2.2 + phase) * 0.3
    if (coreRef.current) coreRef.current.scale.setScalar(pulse)
    if (glowRef.current) {
      glowRef.current.scale.setScalar(pulse * (selected ? 2.6 : 1.9))
      const mat = glowRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = (selected ? 0.45 : 0.28) * (1 / pulse)
    }
    if (smokeRef.current) {
      // Slow bob to suggest rising smoke.
      const bob = (Math.sin(t * 0.6 + phase) + 1) * 0.5
      smokeRef.current.position
        .copy(outward)
        .multiplyScalar(0.03 + bob * 0.05 * (0.5 + intensity))
      const mat = smokeRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = (0.12 + intensity * 0.14) * (0.7 + bob * 0.3)
    }
  })

  const color = intensity > 0.66 ? '#ffe066' : intensity > 0.33 ? '#ff9800' : '#ff5722'

  return (
    <group position={position}>
      <mesh ref={glowRef}>
        <sphereGeometry args={[baseSize, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.28} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh ref={coreRef}>
        <sphereGeometry args={[baseSize * 0.6, 12, 12]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
      {/* Smoke/haze puff rising off the fire */}
      <mesh ref={smokeRef}>
        <sphereGeometry args={[baseSize * 2.2, 10, 10]} />
        <meshBasicMaterial
          color="#8a8a8a"
          transparent
          opacity={0.15}
          blending={THREE.NormalBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

/** Faint drifting haze shell to read as global smoke. */
function SmokeHaze() {
  const pointsRef = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const count = 220
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 1.16 + Math.random() * 0.5
      const theta = Math.random() * Math.PI * 2
      // Bias toward Northern Hemisphere.
      const phi = Math.acos(1 - 1.3 * Math.random())
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#b0663a"
        size={0.05}
        transparent
        opacity={0.16}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function RotatingGroup({ children, paused }: { children: React.ReactNode; paused: boolean }) {
  const groupRef = useRef<THREE.Group>(null)
  useFrame((_state, delta) => {
    if (groupRef.current && !paused) groupRef.current.rotation.y += delta * 0.06
  })
  // Tilt so the Northern Hemisphere faces the camera.
  return (
    <group ref={groupRef} rotation={[-0.42, 0, 0]}>
      {children}
    </group>
  )
}

function CameraSetup() {
  const { camera } = useThree()
  useMemo(() => {
    camera.position.set(0, 0.55, 2.5)
    camera.lookAt(0, 0, 0)
  }, [camera])
  return null
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatTime(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
}

export default function FireTrackerGlobe() {
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState<FireDataResult | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hovering, setHovering] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!mounted) return
    const stop = pollFires((result) => setData(result), FIRE_POLL_INTERVAL_MS)
    return stop
  }, [mounted])

  const events = data?.events ?? []
  // Northern Hemisphere focus for the feed, most recent first.
  const feed = useMemo(() => {
    return [...events]
      .filter((e) => e.lat >= 0)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 40)
  }, [events])

  const sourceLabel =
    data?.source === 'eonet'
      ? 'NASA EONET · live'
      : data?.source === 'snapshot'
        ? 'FIRMS snapshot · fallback'
        : data?.source === 'empty'
          ? 'No data available'
          : 'Connecting…'

  return (
    <div className="firewatch-grid">
      <div
        className="firewatch-globe"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {mounted ? (
          <Canvas
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
            style={{ background: 'transparent' }}
          >
            <CameraSetup />
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 3, 5]} intensity={0.8} />
            <directionalLight position={[-5, -2, -5]} intensity={0.25} color="#ff5722" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              rotateSpeed={0.5}
              minPolarAngle={Math.PI * 0.1}
              maxPolarAngle={Math.PI * 0.75}
            />
            <RotatingGroup paused={hovering}>
              <GlobeSphere />
              <ContinentLines />
              <AtmosphereGlow />
              {events.map((e) => (
                <FireMarker key={e.id} event={e} selected={e.id === selectedId} />
              ))}
            </RotatingGroup>
            <SmokeHaze />
          </Canvas>
        ) : (
          <div className="firewatch-globe-placeholder" aria-hidden="true" />
        )}

        <div className="firewatch-status">
          <span
            className={`firewatch-dot firewatch-dot--${data?.source ?? 'loading'}`}
            aria-hidden="true"
          />
          <span>{sourceLabel}</span>
          {data && (
            <span className="firewatch-updated">
              updated {formatTime(data.fetchedAt)}
            </span>
          )}
        </div>

        <div className="firewatch-count">
          <strong>{events.length}</strong> active fire events tracked
        </div>
      </div>

      <aside className="firewatch-panel" aria-label="Recent fire announcements">
        <header className="firewatch-panel-head">
          <h3>Northern Hemisphere Fire Feed</h3>
          <p>Live wildfire announcements from NASA Earth-observation systems.</p>
        </header>

        {data?.error && data.source !== 'eonet' && (
          <div className="firewatch-notice">
            Live feed unavailable ({data.error}). Showing{' '}
            {data.source === 'snapshot' ? 'the latest cached snapshot' : 'no data'}.
          </div>
        )}

        <ul className="firewatch-feed">
          {feed.length === 0 && (
            <li className="firewatch-empty">
              {data ? 'No open Northern-Hemisphere fire events right now.' : 'Loading live fire data…'}
            </li>
          )}
          {feed.map((e) => {
            const active = e.id === selectedId
            const item = (
              <>
                <div className="firewatch-item-head">
                  <span
                    className="firewatch-flame"
                    style={{
                      background:
                        (e.intensity ?? 0.4) > 0.66
                          ? '#ffe066'
                          : (e.intensity ?? 0.4) > 0.33
                            ? '#ff9800'
                            : '#ff5722',
                    }}
                    aria-hidden="true"
                  />
                  <span className="firewatch-title">{e.title}</span>
                </div>
                <div className="firewatch-meta">
                  <span>{e.lat.toFixed(1)}°, {e.lon.toFixed(1)}°</span>
                  <span>{formatDate(e.date)}</span>
                </div>
              </>
            )
            return (
              <li key={e.id}>
                <button
                  type="button"
                  className={`firewatch-item${active ? ' is-active' : ''}`}
                  onMouseEnter={() => setSelectedId(e.id)}
                  onMouseLeave={() => setSelectedId(null)}
                  onFocus={() => setSelectedId(e.id)}
                  onBlur={() => setSelectedId(null)}
                >
                  {item}
                </button>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}
