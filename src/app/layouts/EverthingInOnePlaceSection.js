'use client'

import { useRef } from 'react'
import { AuroraText } from '@/components/magicui/aurora-text'
import { AnimatedBeamDemo } from '@/components/landing/AnimatedBeam'

export default function EverythingInOnePlaceSection() {
  const containerRef = useRef(null)
  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="w-full max-w-4xl px-4 sm:px-6 md:px-10 mx-auto py-16 font-gellix"
    >
      <div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold  leading-4 md:leading-10 w-full max-w-6xl">
          Everything.
        </h1>
        <div ref={fromRef} className="relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[88px]">
            In <AuroraText>One Place.</AuroraText>
          </h1>
        </div>
      </div>
      <div ref={toRef} className="relative z-10 py-14">
        <AnimatedBeamDemo />
      </div>
    </section>
  )
}
