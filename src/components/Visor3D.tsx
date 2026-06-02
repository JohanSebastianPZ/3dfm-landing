import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

interface Visor3DProps {
  className?: string
}

export default function Visor3D({ className }: Visor3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const container = containerRef.current
    if (!container) return

    // ── Escena ──────────────────────────────────────────────────────────────
    const scene = new THREE.Scene()

    // ── Cámara ──────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0.5, 5.5)

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // ── Luces ────────────────────────────────────────────────────────────────
    const pl1 = new THREE.PointLight(0xff5500, 8, 6, 2)
    pl1.position.set(0, 0, -2)
    scene.add(pl1)

    const pl2 = new THREE.PointLight(0xff8a00, 3, 5, 2)
    pl2.position.set(2, 1, -1)
    scene.add(pl2)

    scene.add(new THREE.AmbientLight(0xf0f0ee, 0.6))

    const dir = new THREE.DirectionalLight(0xffffff, 1.8)
    dir.position.set(3, 4, 2)
    scene.add(dir)

    // ── Controles de órbita ───────────────────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.minPolarAngle = Math.PI / 4
    controls.maxPolarAngle = Math.PI / 1.6

    let autoRotate = true
    let resumeTimer: ReturnType<typeof setTimeout> | null = null

    controls.addEventListener('start', () => {
      autoRotate = false
      if (resumeTimer) clearTimeout(resumeTimer)
    })
    controls.addEventListener('end', () => {
      resumeTimer = setTimeout(() => { autoRotate = true }, 2000)
    })

    // ── Carga del modelo GLTF ────────────────────────────────────────────────
    let modelGroup: THREE.Group | null = null
    let cancelled = false

    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
    loader.setDRACOLoader(dracoLoader)
    loader.load('/models/scene-2.glb', (gltf) => {
      if (cancelled) return   // ← guardia
      const group = new THREE.Group()
      group.add(gltf.scene)

      // Escalar al bounding box
      const box = new THREE.Box3().setFromObject(group)
      const size = new THREE.Vector3()
      box.getSize(size)
      const maxDim = Math.max(size.x, size.y, size.z)
      if (maxDim > 0) group.scale.setScalar(3.8 / maxDim)

      // Centrar
      const box2 = new THREE.Box3().setFromObject(group)
      const center = new THREE.Vector3()
      box2.getCenter(center)
      group.position.sub(center)

      scene.add(group)
      modelGroup = group
    })

    // ── Resize ───────────────────────────────────────────────────────────────
    const handleResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w === 0 || h === 0) return
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const ro = new ResizeObserver(handleResize)
    ro.observe(container)

    // ── Loop de animación ─────────────────────────────────────────────────────
    let rafId = 0
    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      if (modelGroup && autoRotate) modelGroup.rotation.y += delta * 0.5
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      ro.disconnect()
      if (resumeTimer) clearTimeout(resumeTimer)
      dracoLoader.dispose()
      controls.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%' }}
    >
      {/* Glow naranja detrás del canvas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 65% 70% at 50% 58%, rgba(255,85,0,0.22) 0%, rgba(255,120,30,0.10) 35%, rgba(255,85,0,0.03) 60%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* El renderer de Three.js inyecta el <canvas> aquí */}
      <div
        ref={containerRef}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      />

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
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </svg>
        Arrastra para rotar
      </div>
    </div>
  )
}
