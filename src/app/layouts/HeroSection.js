'use client'
import { DotPatternBackground } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { AnimatedShinyTextDemo } from '@/components/landing/AnimatedShinyText'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-[80vh] md:min-h-[80vh] flex flex-col justify-center items-center align-middle !gap-y-0 bg-black px-4 font-gellix">
        <div className="text-center z-1 mt-56">
          <h1 className="text-8xl font-semibold tracking-tight">Built to build.</h1>
          <h1 className="text-8xl font-semibold tracking-tight">your Brand.</h1>
          <p className="text-xl font-semibold mt-11">
            {'Build your brand, design everything, launch'}
          </p>
          <p className="text-xl font-semibold">your product, all from one place.</p>

          <div className="flex gap-4 justify-center align-middle">
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
        />
      </section>

      <section className="font-gellix">
        <div className="text-center z-1 mt-28">
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
            {"kOne is not a tool. It's your AI co-founder. Talk to it."}
          </p>
          <p className="text-xl font-semibold">
            {'Think with it. Build with it. From your brand to your website — everything'}
          </p>
          <p className="text-xl font-semibold">{'happens here.'}</p>

          <div className="flex gap-4 justify-center align-middle">
            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Join early access
            </button>
            <button className="text-md border border-white bg-black text-white transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Features
            </button>
          </div>
        </div>
      </section>

      <section className="font-gellix px-28 mt-28">
        <div className="flex justify-center gap-x-28">
          <div>
            <h1 className="text-6xl font-semibold tracking-tight">All your tools.</h1>
            <h1 className="text-6xl font-semibold tracking-tight">Just better.</h1>

            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
              Explore Features
            </button>
          </div>

          <div>
            {[...Array(1)].map((_, index) => (
              <div key={index}>
                <Image
                  src="/assets/images/Webapp/Home/chatbox.png"
                  alt="chatbox.png"
                  width={900}
                  height={900}
                  className="animate-fade-up w-full"
                />

                <h1
                  className="text-5xl font-semibold text-transparent bg-clip-text mt-5"
                  style={{
                    backgroundImage:
                      'linear-gradient(91deg, #FFF 25%, #80D3D7 61.75%, #0D335D 93.49%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Your brand, designed <br /> by intelligence.
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="font-gellix px-28 mt-28 text-center">
        <div>
          <h1
            className="text-7xl font-semibold text-transparent bg-clip-text mt-5"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ahh it’s not end.
          </h1>

          <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 cursor-pointer font-semibold">
            Explore kOne
          </button>
        </div>
      </section>
    </>
  )
}
