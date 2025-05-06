'use client'

import { useRef } from 'react'
import { AnimatedBeam } from '@/components/magicui/animated-beam'
import { AuroraText } from '@/components/magicui/aurora-text'
import { File, Settings, Search } from 'lucide-react'

export default function EverythingInOnePlaceSection() {
  const containerRef = useRef(null)
  const fromRef = useRef(null)
  const toRef = useRef(null)

  return (
    <section
      ref={containerRef}
      className="w-full max-w-6xl px-4 sm:px-6 md:px-10 mx-auto py-20 md:py-32"
    >
      <div>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[88px]">
          Everything.
        </h1>
        <div ref={fromRef} className="relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight md:leading-[88px]">
            In <AuroraText>One Place.</AuroraText>
          </h1>
        </div>
      </div>
      <div ref={toRef} className="relative z-10 mt-10">
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          curvature={100}
          reverse={false}
          pathColor="#ffffff"
          gradientStartColor="#00f0ff"
          gradientStopColor="#ff00ff"
          className="z-0"
        />
      </div>
    </section>
  )
}
