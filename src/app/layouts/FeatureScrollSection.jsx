'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function FeatureSection() {
  const data = [
    {
      id: 1,
      img: '/assets/images/Webapp/Home/chatbox.png',
      title: 'Your brand, designed by intelligence.',
    },
    // {
    //   id: 2,
    //   img: '/assets/images/Webapp/Home/chatbox.png',
    //   title: 'Smart tools for modern teams.',
    // },
    // {
    //   id: 3,
    //   img: '/assets/images/Webapp/Home/chatbox.png',
    //   title: 'Automate your workflow with AI.',
    // },
  ]

  return (
    <section className="font-gellix text-white px-6 md:px-10 overflow-y-scroll snap-y snap-mandatory w-full md:w-9/12 mt-56 mx-auto hide-scrollbar">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Fixed on desktop, full width stacked on mobile */}
        <div className="w-full md:w-1/2 sticky top-0 flex flex-col mb-12 md:mb-0">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">All your tools.</h1>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Just better.</h1>
            <button className="text-md border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 md:mt-12 cursor-pointer font-semibold">
              Explore Features
            </button>
          </div>
        </div>

        {/* Right Side - Feature Items */}
        <div className="w-full">
          {data.map((item, index) => (
            <FeatureItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ item, index, isLast }) {
  const ref = useRef(null)
  const { ref: inViewRef, inView } = useInView({ threshold: 0.6 })
  const controls = useAnimation()

  // Combine refs (yours + inView)
  const setRefs = (node) => {
    ref.current = node
    inViewRef(node)
  }

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 50 })
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={setRefs}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="flex flex-col"
    >
      <Image
        src={item.img}
        alt="chatbox"
        width={900}
        height={600}
        className="rounded-md mx-auto max-w-full h-auto"
      />
      <h1
        className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text mt-4 text-center md:text-left pr-56 tracking-tight"
        style={{
          backgroundImage:
            'linear-gradient(91deg, #FFF 25%, #80D3D7 61.75%, #0D335D 93.49%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {item.title}
      </h1>
    </motion.div>
  )
}
