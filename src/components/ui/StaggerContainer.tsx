'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface StaggerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export { item as staggerItem }

export default function StaggerContainer({ children, staggerDelay = 0.1, className }: StaggerProps) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  }
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
