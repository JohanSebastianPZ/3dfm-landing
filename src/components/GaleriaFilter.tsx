'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Proyecto {
  id: number
  nombre: string
  material: string
  tipo: 'fdm' | 'resina' | 'sls'
}

const proyectos: Proyecto[] = [
  { id: 1, nombre: 'Prototipo mecánico',     material: 'Nylon PA12',        tipo: 'sls'    },
  { id: 2, nombre: 'Carcasa electrónica',    material: 'PETG negro',        tipo: 'fdm'    },
  { id: 3, nombre: 'Figura coleccionable',   material: 'Resina ABS-like',   tipo: 'resina' },
  { id: 4, nombre: 'Herramienta industrial', material: 'Carbono reforzado', tipo: 'sls'    },
  { id: 5, nombre: 'Soporte médico',         material: 'Resina Dental',     tipo: 'resina' },
  { id: 6, nombre: 'Pieza automoción',       material: 'ABS + fibra',       tipo: 'fdm'    },
  { id: 7, nombre: 'Joyería personalizada',  material: 'Resina Castable',   tipo: 'resina' },
  { id: 8, nombre: 'Engranaje funcional',    material: 'PLA reforzado',     tipo: 'fdm'    },
]

const FILTROS = ['Todos', 'FDM', 'Resina', 'SLS'] as const
type Filtro = typeof FILTROS[number]

function mapFiltro(f: Filtro): Proyecto['tipo'] | null {
  if (f === 'Todos') return null
  return f.toLowerCase() as Proyecto['tipo']
}

export default function GaleriaFilter() {
  const [activo, setActivo] = useState<Filtro>('Todos')

  const filtrados = activo === 'Todos'
    ? proyectos
    : proyectos.filter(p => p.tipo === mapFiltro(activo))

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {FILTROS.map(f => {
          const isActive = f === activo
          return (
            <button
              key={f}
              onClick={() => setActivo(f)}
              className="text-[15px] border rounded-full px-4 py-1.5 cursor-pointer transition-all duration-200"
              style={isActive
                ? { color: '#FF5500', borderColor: 'rgba(255,85,0,0.35)', background: 'rgba(255,85,0,0.05)' }
                : { color: '#6b7280', borderColor: '#d1d5db', background: 'transparent' }
              }
              aria-pressed={isActive}
            >
              {f}
            </button>
          )
        })}
      </div>

      {/* Asymmetric grid */}
      <div className="flex flex-col gap-px" style={{ background: '#DEDEDD' }}>
        {/* Row 1: 2 cols */}
        <div className="grid grid-cols-2 gap-px h-52" style={{ background: '#DEDEDD' }}>
          <AnimatePresence mode="popLayout">
            {filtrados.slice(0, 2).map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-end p-6 cursor-pointer transition-colors duration-300"
                style={{ background: '#f0f0ee' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#EAEAE8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f0f0ee' }}
              >
                <p className="text-[16px] font-medium" style={{ color: '#111111' }}>{p.nombre}</p>
                <p className="text-[14px]" style={{ color: '#9ca3af' }}>{p.material}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Row 2: 3 cols */}
        <div className="grid grid-cols-3 gap-px h-40" style={{ background: '#DEDEDD' }}>
          <AnimatePresence mode="popLayout">
            {filtrados.slice(2, 5).map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col justify-end p-6 cursor-pointer transition-colors duration-300"
                style={{ background: '#f0f0ee' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#EAEAE8' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f0f0ee' }}
              >
                <p className="text-[16px] font-medium" style={{ color: '#111111' }}>{p.nombre}</p>
                <p className="text-[14px]" style={{ color: '#9ca3af' }}>{p.material}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-[16px] font-medium rounded-full px-5 py-2.5 transition-all duration-200 group"
          style={{ color: '#FF5500', border: '1px solid rgba(255,85,0,0.35)' }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLElement).style.background = '#FF5500'
            ;(e.currentTarget as HTMLElement).style.color = '#fff'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLElement).style.background = ''
            ;(e.currentTarget as HTMLElement).style.color = '#FF5500'
          }}
        >
          Ver todos los proyectos
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </div>
  )
}
