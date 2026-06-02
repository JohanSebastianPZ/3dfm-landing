'use client'

import { useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'
import { Box3, Vector3 } from 'three'
import type { Group } from 'three'

// ─── Modelo GLTF ─────────────────────────────────────────────────────────────

interface ModeloProps {
  autoRotate: React.MutableRefObject<boolean>
}

function Modelo({ autoRotate }: ModeloProps) {
  const group = useRef<Group>(null)
  const { scene } = useGLTF('/models/scene.gltf')

  // Centrar y escalar automáticamente según el bounding box del modelo
  useEffect(() => {
    if (!group.current) return
    const box = new Box3().setFromObject(group.current)
    const size = new Vector3()
    box.getSize(size)
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      group.current.scale.setScalar(3.8 / maxDim)
    }
    const box2 = new Box3().setFromObject(group.current)
    const center = new Vector3()
    box2.getCenter(center)
    group.current.position.sub(center)
  }, [scene])

  // Rotación automática — se pausa cuando autoRotate.current es false
  useFrame((_, delta) => {
    if (!group.current || !autoRotate.current) return
    group.current.rotation.y += delta * 0.5
  })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

interface Visor3DProps {
  className?: string
}

export default function Visor3D({ className }: Visor3DProps) {
  const autoRotate = useRef(true)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {/* Glow naranja CSS detrás del canvas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 65% 70% at 50% 58%, rgba(255,85,0,0.22) 0%, rgba(255,120,30,0.10) 35%, rgba(255,85,0,0.03) 60%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Canvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, background: 'transparent' }}
        camera={{ position: [0, 0.5, 5.5], fov: 50 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Iluminación */}
          <pointLight position={[0, 0, -2]} intensity={8} color="#FF5500" distance={6} decay={2} />
          <pointLight position={[2, 1, -1]} intensity={3} color="#FF8A00" distance={5} decay={2} />
          <ambientLight intensity={0.6} color="#f0f0ee" />
          <directionalLight position={[3, 4, 2]} intensity={1.8} color="#ffffff" />

          <Modelo autoRotate={autoRotate} />

          {/* Sombra naranja debajo del modelo */}
          {/* frames={1} → sombra estática, no re-renderiza cada frame (evita sobrecarga HMR) */}
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.2}
            scale={4}
            blur={2}
            color="#FF5500"
            frames={1}
          />

          {/* Controles de órbita — solo rotación */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.6}
            onStart={() => {
              autoRotate.current = false
              if (resumeTimer.current) clearTimeout(resumeTimer.current)
            }}
            onEnd={() => {
              resumeTimer.current = setTimeout(() => {
                autoRotate.current = true
              }, 2000)
            }}
          />
        </Suspense>
      </Canvas>

      {/* Label de interacción */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '11px',
          color: 'rgba(0,0,0,0.35)',
          letterSpacing: '0.06em',
          pointerEvents: 'none',
          zIndex: 2,
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </svg>
        Arrastra para rotar
      </div>
    </div>
  )
}

// Precarga el modelo mientras el usuario navega por la página
useGLTF.preload('/models/scene.gltf')
