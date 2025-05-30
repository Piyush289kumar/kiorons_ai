'use client'  // <-- Add this at the very top

import { DotPatternBackground } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { AnimatedShinyTextDemo } from '@/components/landing/AnimatedShinyText'
import Image from 'next/image'
import FeatureSection from './FeatureScrollSection'
import Footer from './Footer'

export default function HeroSection() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="relative min-h-[80vh] md:min-h-[80vh] flex flex-col justify-center items-center align-middle !gap-y-0 bg-black font-gellix h-screen snap-start">
        <div className="text-center z-10 mt-56">
          <h1 className="text-8xl font-semibold tracking-tight">Built to build.</h1>
          <h1 className="text-8xl font-semibold tracking-tight">your Brand.</h1>
          <p className="text-xl font-semibold mt-11">
            Build your brand, design everything, launch
          </p>
          <p className="text-xl font-semibold">your product, all from one place.</p>

          <div className="flex gap-4 justify-center items-center">
            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 font-semibold cursor-pointer">
              Try kOne
            </button>
            <button className="text-md border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl mt-12 font-semibold cursor-pointer">
              Features
            </button>
          </div>
        </div>

        <Image
          src="/assets/images/Webapp/Home/hands.svg"
          alt="Logo"
          width={900}
          height={900}
          className="animate-fade-up w-full -mt-44 z-0"
          priority
        />
      </section>

      <section className="font-gellix h-1/2 snap-start pt-32">
        <div className="text-center z-10 mt-28">
          <h1
            className="text-8xl font-semibold tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet kOne.
          </h1>

          <p className="text-xl font-semibold mt-11">
            kOne is not a tool. It's your AI co-founder. Talk to it.
          </p>
          <p className="text-xl font-semibold">
            Think with it. Build with it. From your brand to your website — everything
          </p>
          <p className="text-xl font-semibold">happens here.</p>

          <div className="flex gap-4 justify-center items-center">
            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Join early access
            </button>
            <button className="text-md border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Features
            </button>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="font-gellix px-28 text-center h-2/5 snap-start pt-24">
        <div>
          <h1
            className="text-7xl font-semibold text-transparent bg-clip-text mt-5"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ahh it's not end.
          </h1>

          <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 cursor-pointer font-semibold">
            Explore kOne
          </button>
        </div>
      </section>

      <section
        className="font-gellix flex flex-col justify-center items-center h-screen snap-start"
        style={{
          backgroundImage: 'url("/assets/images/Webapp/Home/rays.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
        }}
      >
        <div className="text-center z-10 my-60">
          <h1 className="text-8xl font-semibold tracking-tight text-white">No templates.</h1>
          <h1 className="text-8xl font-semibold tracking-tight text-white">No clutter.</h1>

          <p className="text-xl font-semibold mt-11">
            Kiorons is designed to think like you do. It
          </p>
          <p className="text-xl font-semibold">doesn't just build — it helps shape your</p>
          <p className="text-xl font-semibold">brand, visuals, voice, and vision. All with</p>
          <p className="text-xl font-semibold">intelligence.</p>
          <div className="flex gap-4 justify-center items-center">
            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Know about us
            </button>
            <button className="text-md border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Features
            </button>
          </div>
        </div>
      </section>

      <section className="font-gellix px-28 mt-28 h-screen snap-start pt-36">
        <div className="flex justify-center gap-x-28">
          <div className="flex justify-between gap-48 items-center">
            <h1 className="text-6xl font-semibold tracking-tight text-white">Thinks.</h1>

            <div>
              <Image
                src="/assets/images/Webapp/Home/sofaimg.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up w-full"
                priority
              />
              <h3 className="text-5xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-x-28 mt-14">
          <div className="flex justify-between gap-48 items-center">
            <div>
              <Image
                src="/assets/images/Webapp/Home/sofaimg.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up w-full"
                priority
              />
              <h3 className="text-4xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>

            <div>
              <Image
                src="/assets/images/Webapp/Home/sofaimg.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up w-full"
                priority
              />
              <h3 className="text-4xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 cursor-pointer font-semibold">
            Read me
          </button>
        </div>
      </section>

      <section className="snap-start mt-36 pt-48">
        <div
          className="p-10 text-white w-8/12 mx-auto text-center mt-28"
          style={{ background: 'linear-gradient(71deg, #71D8E1 10.04%, #1B364B 69.45%)' }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Start your brand with kOne.
          </h1>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">seen before.</h1>
          <button className="text-sm border border-white bg-white hover:bg-transparent hover:text-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12">
            Get early access
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
