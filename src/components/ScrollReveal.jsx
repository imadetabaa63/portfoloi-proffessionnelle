import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Wraps children with a scroll-triggered fade + slide animation.
 * @param {number}  delay     - seconds delay before animation starts
 * @param {string}  direction - 'up' | 'down' | 'left' | 'right'
 * @param {number}  distance  - pixels to translate from
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 40,
  className = '',
  style = {},
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const sign = direction === 'down' || direction === 'right' ? -1 : 1
  const hidden = { opacity: 0, [axis]: sign * distance }
  const visible = { opacity: 1, [axis]: 0 }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
