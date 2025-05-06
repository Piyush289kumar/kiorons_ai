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
    <section  className="w-full max-w-4xl mx-auto py-32">
      <div>
        <h1 className="text-white text-7xl font-semibold leading-[88px]">Everything.</h1>
        <div ref={fromRef} className="relative z-10">
          <h1 className="text-white text-7xl font-semibold leading-[88px]">
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
