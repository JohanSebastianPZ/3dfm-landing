import { motion } from 'framer-motion'
import Counter from './ui/Counter'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.58, ease: 'easeOut' } },
}

export default function HeroAnimations() {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <div className="h-20" />

      <div className="flex-1 flex items-end pb-10 sm:pb-16 lg:pb-20 px-6 sm:px-12 md:px-20 lg:px-28">
        <motion.div
          className="max-w-sm"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-1.5 text-[14px] font-medium mb-3 group"
            style={{
              color: '#FF5500',
              background: 'rgba(0,0,0,0.28)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              padding: '5px 12px',
              borderRadius: '999px',
              border: '0.5px solid rgba(255,85,0,0.25)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#FF5500' }} />
            Fabricación bajo demanda · Envío 48h
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[1.75rem] sm:text-[2.25rem] leading-[1.15] font-medium tracking-tight mb-3"
            style={{ color: '#ffffff', textShadow: '0 2px 20px rgba(0,0,0,0.65), 0 1px 4px rgba(0,0,0,0.45)' }}
          >
            Del diseño digital a la pieza real,{' '}
            <span style={{ color: '#FF5500' }}>sin límites.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[16px] font-normal mb-4 leading-snug max-w-[260px]"
            style={{ color: 'rgba(255,255,255,0.88)', textShadow: '0 1px 12px rgba(0,0,0,0.65)' }}
          >
            Impresión 3D para empresas, ingenieros y makers. Calidad industrial.
          </motion.p>

          <motion.div variants={item}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-[16px] font-medium rounded-full px-6 py-3 transition-all duration-200 group"
              style={{
                color: '#ffffff',
                background: '#FF5500',
                border: '1px solid #FF5500',
                textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-1px)'
                el.style.boxShadow = '0 8px 24px rgba(255,85,0,0.4)'
                const shimmer = el.querySelector('.shimmer') as HTMLElement
                if (shimmer) shimmer.style.transform = 'scaleX(1)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                const shimmer = el.querySelector('.shimmer') as HTMLElement
                if (shimmer) shimmer.style.transform = 'scaleX(0)'
              }}
            >
              <span
                className="shimmer"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(255,255,255,0.12)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s ease',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                }}
              />
              <span style={{ position: 'relative', zIndex: 1 }}>Empieza tu proyecto</span>
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                style={{ position: 'relative', zIndex: 1 }}
              >
                →
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute right-6 sm:right-24 top-[22%] text-right">
        <div className="flex items-center gap-3 justify-end">
          <Counter
            value={1200}
            suffix="+"
            className="text-4xl sm:text-5xl font-medium tracking-tight"
            style={{ color: '#FF5500', textShadow: '0 2px 12px rgba(255,85,0,0.3)' }}
          />
        </div>
        <p className="text-xs sm:text-sm mt-1"
           style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
          proyectos completados
        </p>
      </div>

      <div className="absolute right-6 sm:right-20 bottom-16 sm:bottom-20 text-right flex flex-col gap-6 items-end">
        <div>
          <div className="flex items-center gap-3 justify-end">
            <Counter
              value={20}
              suffix="+"
              className="text-4xl sm:text-5xl font-medium tracking-tight"
              style={{ color: '#FF5500', textShadow: '0 2px 12px rgba(255,85,0,0.3)' }}
            />
          </div>
          <p className="text-xs sm:text-sm mt-1"
             style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
            materiales disponibles
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 justify-end">
            <Counter
              value={98}
              suffix="%"
              className="text-4xl sm:text-5xl font-medium tracking-tight"
              style={{ color: '#FF5500', textShadow: '0 2px 12px rgba(255,85,0,0.3)' }}
            />
          </div>
          <p className="text-xs sm:text-sm mt-1"
             style={{ color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
            satisfacción cliente
          </p>
        </div>
      </div>
    </div>
  )
}
