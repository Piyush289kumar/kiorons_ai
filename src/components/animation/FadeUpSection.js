'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function FadeUpSection({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // allow entering and exiting view
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden') // reverse animation
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: 'easeOut',
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
