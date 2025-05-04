'use client'
import { ShimmerButton } from '@components/magicui/shimmer-button'
export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center align-middle !gap-y-0">
      {/* "Just Say" Heading */}
      <h1 className="text-center text-white text-8xl font-semibold leading-[88px] font-gellix">
        Just say
      </h1>
      {/* "What You Want" Heading with Gradient Effect */}
      <h1 className="text-center font-semibold text-8xl leading-[88px] font-gellix gradient-text pt-4">
        what you want.
      </h1>
      {/* Subtext */}
      <p className="text-center text-white text-2xl font-normal leading-[88px] font-gellix py-2">
        From ‘I have an idea’ to ‘It’s live’ — in minutes.
      </p>
      <ShimmerButton className="px-5 py-2">Join Early</ShimmerButton>
    </section>
  )
}
