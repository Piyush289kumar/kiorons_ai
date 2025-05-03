'use client'

import { ShimmerButton } from '@components/magicui/shimmer-button'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center !gap-y-0">
      {/* <h1 className="text-7xl font-bold text-center text-white" style={{fontSize:68}}>Just Say</h1> */}
      <h1 className="!text-[68px] !text-white !font-bold text-center">Just Say</h1>
      <h1 className="!text-[68px] !font-bold text-center gradient-text">what you want.</h1>
      <p className="!text-white text-xl py-5">From ‘I have an idea’ to ‘It’s live’ — in minutes.</p>
      {/* <ShimmerButton>Join Early</ShimmerButton> */}
    </section>
  )
}
