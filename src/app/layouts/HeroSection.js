'use client'
import { DotPatternBackground } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'

export default function HeroSection() {
  return (
    <>
      <section className="relative max-w-4xl min-h-[80vh] mt-36 flex flex-col justify-center items-center align-middle !gap-y-0 bg-black px-4">
        <DotPatternBackground />
        <div className="absolute z-10 flex flex-col items-center text-center px-4">
          <h1
            className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-1 font-gellix"
            style={{ fontWeight: 600 }}
          >
            Just say
          </h1>
          <h1
            className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-gellix gradient-text pt-2 md:pt-4"
            style={{ fontWeight: 600 }}
          >
            what you want.
          </h1>
          <p
            className="text-white text-lg sm:text-xl md:text-2xl font-normal leading-relaxed font-gellix py-2 md:py-4"
            style={{ fontWeight: 600 }}
          >
            {"From 'I have an idea to 'It's live' — in minutes."}
          </p>
          <ShimmerButton className="px-5 py-2 mt-4 md:mt-8">Join Early</ShimmerButton>
        </div>
      </section>
    </>
  )
}
