import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import type { MouseEvent, ReactNode } from 'react'

export function MagneticButton({
  href,
  children,
  variant = 'light',
}: {
  href: string
  children: ReactNode
  variant?: 'light' | 'dark'
}) {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const navigate = useNavigate()
  const x = useSpring(pointerX, { stiffness: 260, damping: 18, mass: 0.35 })
  const y = useSpring(pointerY, { stiffness: 260, damping: 18, mass: 0.35 })

  const handlePointerMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.18)
    pointerY.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.18)
  }

  const resetPosition = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    navigate(href)
  }

  return (
    <motion.a
      href={href}
      style={{ x, y }}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPosition}
      onClick={handleClick}
      className={`magnetic-button magnetic-button-${variant}`}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
      <span className="magnetic-button-arrow" aria-hidden="true">↗</span>
    </motion.a>
  )
}