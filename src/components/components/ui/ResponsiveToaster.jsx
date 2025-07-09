'use client'

import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

export default function ResponsiveToaster() {
  const [position, setPosition] = useState('top-right')

  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.innerWidth <= 768
      setPosition(isMobile ? 'top-center' : 'top-right')
    }

    updatePosition() // Initial check
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return <Toaster position={position} />
}
