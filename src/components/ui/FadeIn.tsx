'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const offset = 24
  const initial = {
    opacity: 0,
    y: direction === 'up' ? offset : 0,
    x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
  }
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}
