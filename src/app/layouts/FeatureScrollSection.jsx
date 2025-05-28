'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function FeatureScrollSection() {
  return (
    <section className="font-gellix px-28 mt-28 h-[200vh] relative">
      <div className="flex gap-x-28">
        {/* Left fixed text */}
        <div className="w-1/2 sticky top-28 h-fit self-start">
          <h1 className="text-6xl font-semibold tracking-tight">All your tools.</h1>
          <h1 className="text-6xl font-semibold tracking-tight">Just better.</h1>
          <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12 cursor-pointer font-semibold">
            Explore Features
          </button>
        </div>

        {/* Right scrollable content with animation */}
        <div className="w-1/2 space-y-32">
          {[...Array(5)].map((_, index) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { once: true, margin: '-100px' })

            return (
              <motion.div
                key={index}
                ref={ref}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <Image
                  src="/assets/images/Webapp/Home/chatbox.png"
                  alt="chatbox"
                  width={900}
                  height={900}
                  className="w-full"
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
