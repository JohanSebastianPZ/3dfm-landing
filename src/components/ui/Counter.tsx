'use client'
import { useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  className?: string
  style?: React.CSSProperties
}

export default function Counter({ value, suffix = '', className, style }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  useEffect(() => {
    if (!isInView) return
    const ctrl = animate(count, value, { duration: 1.8, ease: 'easeOut' })
    return ctrl.stop
  }, [isInView, value, count])

  return (
    <span ref={ref} className={className} style={style}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}
