'use client'
import { motion } from 'framer-motion'
import type { ReactNode, CSSProperties } from 'react'

interface StaggerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
  style?: CSSProperties
}

export default function StaggerContainer({ children, staggerDelay = 0.1, className, style }: StaggerProps) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: staggerDelay } },
  }
  return (
    <motion.div
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  )
}
