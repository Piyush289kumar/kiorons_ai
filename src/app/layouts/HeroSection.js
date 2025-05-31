'use client' // <-- Add this at the very top

import { DotPatternBackground } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { AnimatedShinyTextDemo } from '@/components/landing/AnimatedShinyText'
import Image from 'next/image'
import FeatureSection from './FeatureScrollSection'
import Footer from './Footer'

export default function HeroSection() {
  return (
    <div className="scroll-smooth">
      <section 
        className="relative min-h-[80vh] md:min-h-[80vh] flex flex-col justify-center items-center align-middle !gap-y-0 bg-black font-gellix"
      >
        <div className="text-center z-10 mt-56 px-4 sm:px-6 md:px-0"> {/* added padding-x for mobile */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight">Built to build</h1> {/* smaller text on mobile */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight">your Brand.</h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold mt-6 sm:mt-8 md:mt-4">
            Build your brand, design everything, launch
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            your product, all from one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="w-full sm:w-auto text-lg border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl font-semibold cursor-pointer">
              Try kOne
            </button>
            <button className="w-full sm:w-auto text-lg border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl font-semibold cursor-pointer">
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

      <section className="font-gellix md:pt-11 sm:pt-32 px-4 sm:px-0"> {/* added horizontal padding for mobile */}
        <div className="text-center z-10 mt-20 sm:mt-28">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet kOne.
          </h1>

          <p className="text-base sm:text-lg md:text-2xl font-semibold mt-6 sm:mt-11">
            kOne is not a tool. It's your AI co-founder. Talk to it. Think with it.
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-semibold">
            Build with it. From your brand to your website — everything
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-semibold">happens here.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="w-full sm:w-auto text-lg border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl cursor-pointer font-semibold">
              Join early access
            </button>
            <button className="w-full sm:w-auto text-lg border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl cursor-pointer font-semibold">
              Features
            </button>
          </div>
        </div>
      </section>

      <FeatureSection />

      <section className="font-gellix px-4 sm:px-28 text-center my-64"> {/* padding adjusted */}
        <div>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-semibold text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ahh it's not end.
          </h1>

          <button className="w-full sm:w-auto text-lg border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 cursor-pointer font-semibold">
            Explore kOne
          </button>
        </div>
      </section>

      <section
        className="font-gellix flex flex-col justify-center items-center w-full sm:px-0"
        style={{
          backgroundImage: 'url("/assets/images/Webapp/Home/rays.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'initial',
        }}
      >
        <div className="  z-10 my-36 sm:my-60"> {/* reduced vertical margin for small */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white">No templates.</h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white">No clutter.</h1>

          <p className="text-base sm:text-4xl font-medium tracking-tight mt-6 sm:mt-11">
            Kiorons is designed to think like you do. It
          </p>
          <p className="text-base sm:text-4xl font-medium tracking-tight">doesn't just build — it helps shape your</p>
          <p className="text-base sm:text-4xl font-medium tracking-tight">brand, visuals, voice, and vision. All with</p>
          <p className="text-base sm:text-4xl font-medium tracking-tight">intelligence.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-28">
            <button className="w-full sm:w-auto text-lg border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl cursor-pointer font-semibold">
              Know about us
            </button>
            <button className="w-full sm:w-auto text-lg border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl cursor-pointer font-semibold">
              Features
            </button>
          </div>
        </div>
      </section>

      <section className="font-gellix px-4 mt-20">
        <div className="flex flex-col sm:flex-row justify-center gap-x-12 sm:gap-x-28">
          <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-48 items-center">
            <h1 className="text-4xl sm:text-6xl md:text-6xl font-semibold tracking-tight text-white mb-6 sm:mb-0">Thinks.</h1>

            <div>
              <Image
                src="/assets/images/Webapp/Home/sofaimg.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up w-full max-w-xs sm:max-w-full"
                priority
              />
              <h3 className="text-3xl sm:text-5xl md:text-5xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-x-12 sm:gap-x-28 mt-10 sm:mt-14 w-10/12 mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-x-12 sm:gap-x-28">
            <div>
              <Image
                src="/assets/images/Webapp/Home/sofa2.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up"
                priority
              />
              <h3 className="text-2xl sm:text-4xl md:text-4xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>

            <div>
              <Image
                src="/assets/images/Webapp/Home/sofa3.png"
                alt="chatbox.png"
                width={900}
                height={900}
                className="animate-fade-up"
                priority
              />
              <h3 className="text-2xl sm:text-4xl md:text-4xl font-semibold text-white mt-5">Struggle with 10+ tools</h3>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6 sm:mt-8">
          <button className="w-full sm:w-auto text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl cursor-pointer font-semibold">
            Read me
          </button>
        </div>
      </section>

      <section className=" mt-20 px-4 sm:px-0 font-gellix">
        <div
          className="p-14 text-white w-full sm:w-8/12 mx-auto text-center mt-20 sm:mt-28"
          style={{ background: 'linear-gradient(71deg, #71D8E1 10.04%, #1B364B 69.45%)' }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight my-11">
            Start your brand with kOne.
          </h1>          
          <button className="sm:w-auto text-lg border border-white bg-white hover:bg-transparent hover:text-white text-black transition-all duration-300 p-2 px-6 rounded-3xl font-gellix">
            Get early access
          </button>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  )
}
