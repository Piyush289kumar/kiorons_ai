'use client' // <-- Required for Framer Motion
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { DotPatternBackground } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { AnimatedShinyTextDemo } from '@/components/landing/AnimatedShinyText'
import Image from 'next/image'
import FeatureSection from './FeatureScrollSection'
import Footer from './Footer'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import LandingCard from '@/components/landing/LandingCard'
export default function HeroSection() {
  // Animation controls for each section
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()
  const controls5 = useAnimation()
  // Intersection observers for each section
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  // Trigger animations when sections come into view
  useEffect(() => {
    if (inView1) controls1.start('visible')
    if (inView2) controls2.start('visible')
    if (inView3) controls3.start('visible')
    if (inView4) controls4.start('visible')
    if (inView5) controls5.start('visible')
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
  ])
  return (
    <div className="scroll-smooth w-9/12 mx-auto">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center align-middle !gap-y-0 bg-black font-gellix">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 mt-0 md:mt-56 px-4 sm:px-6 md:px-0"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-semibold tracking-tight">
            Create Different.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl font-medium mt-6 sm:mt-8 md:mt-4"
          >
            Design, technology, and intelligence
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-row gap-4 justify-center items-center mt-12"
          >
            <LandingPageButton text="Visit kOne" color="white" />
            <LandingPageButton text="Explore Services" color="black" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Image
            src="/assets/images/Webapp/Home/line.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mt-32 w-full"
            priority
          />
        </motion.div>
      </section>
      {/* Meet kOne Section */}
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix md:pt-11 sm:pt-32 px-4 sm:px-0"
      >
        <div className="text-center z-10 mt-20 sm:mt-28">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            Two Divisions.
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            One Vision.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm sm:text-lg md:text-2xl font-semibold mt-6 sm:mt-11 w-2/3 mx-auto"
          >
            We partner with ambitious teams to design, build, and scale modern brands — through two
            focused divisions: Studio and Tech.
          </motion.p>
        </div>
        <div className="flex justify-center gap-5 my-20">
          <LandingCard
            logo="/assets/images/logo/Kiorons_icon.png"
            label="Studio"
            heading="Creating standout brands and digital-first experiences."
            points={['Branding', 'Design system']}
            buttons={[
              { text: 'Explore Studio', color: 'white' },
              { text: 'Services', color: 'none' },
            ]}
          />

          <LandingCard
            logo="/assets/images/logo/Kiorons_icon.png"
            label="Tech"
            heading="Building products and platforms that scale."
            points={['SaaS', 'Automations']}
            buttons={[
              { text: 'Explore Tech', color: 'white' },
              { text: 'Services', color: 'none' },
            ]}
          />
        </div>
      </motion.section>
      {/* "Ahh it's not end" Section */}
      <motion.section
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix px-4 sm:px-28 text-center mt-28 mb-12 md:my-64"
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-4xl font-medium mt-6 sm:mt-8 md:mt-4"
          >
            Meet
          </motion.p>

          <h1
            className="text-5xl sm:text-7xl md:text-[160px] font-semibold text-transparent bg-clip-text tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            kOne
          </h1>
        </div>
      </motion.section>
      {/* "No templates" Section */}
      <motion.section
        ref={ref4}
        initial="hidden"
        animate={controls4}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix flex flex-col justify-center items-center w-full sm:px-0"
        style={{
          backgroundImage: 'url("/assets/images/Webapp/Home/rays.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'initial',
        }}
      >
        <div className="z-10 my-36 sm:my-60">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white">
            No templates.
          </h1>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-white">
            No clutter.
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-4xl font-medium tracking-tight mt-6 sm:mt-11"
          >
            Kiorons is designed to think like you do. It
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-4xl font-medium tracking-tight"
          >
            doesn't just build — it helps shape your
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-4xl font-medium tracking-tight"
          >
            brand, visuals, voice, and vision. All with
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-4xl font-medium tracking-tight"
          >
            intelligence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-row gap-4 justify-center items-center mt-16 md:mt-28"
          >
            <button className="w-full sm:w-auto text-sm md:text-lg border border-white bg-white text-black transition-all duration-300 px-2 p-2 md:px-6 rounded-3xl font-semibold cursor-pointer">
              Know about us
            </button>
            <button className="w-full sm:w-auto text-sm md:text-lg border border-white bg-black text-white transition-all duration-300 px-2 p-2 md:px-6 rounded-3xl font-semibold cursor-pointer">
              Features
            </button>
          </motion.div>
        </div>
      </motion.section>
      {/* Thinks Section */}
      <motion.section
        ref={ref5}
        initial="hidden"
        animate={controls5}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix px-4 mt-20"
      >
        <div>
          <div className="flex flex-col sm:flex-row gap-x-12 sm:gap-x-28 w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-48 w-full md:w-10/12 mx-auto">
              <h1 className="text-4xl sm:text-6xl md:text-6xl font-semibold tracking-tight text-white mb-0 md:mb-6">
                Thinks.
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Image
                  src="/assets/images/Webapp/Home/sofaimg.png"
                  alt="chatbox.png"
                  width={900}
                  height={900}
                  className="w-auto md:h-[500px]"
                  priority
                />
                <h3 className="text-2xl sm:text-5xl md:text-5xl font-semibold text-white mt-1 md:mt-5">
                  Struggle with 10+ tools
                </h3>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-x-12 sm:gap-x-28 mt-10 sm:mt-14 w-full md:w-10/12 mx-auto">
            <div className="flex flex-col sm:flex-row justify-center gap-x-12 sm:gap-x-28">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-10 md:mb-0"
              >
                <Image
                  src="/assets/images/Webapp/Home/sofa2.png"
                  alt="chatbox.png"
                  width={900}
                  height={900}
                  priority
                />
                <h3 className="text-2xl sm:text-5xl md:text-5xl font-semibold text-white mt-1 md:mt-5">
                  Struggle with 10+ tools
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Image
                  src="/assets/images/Webapp/Home/sofa3.png"
                  alt="chatbox.png"
                  width={900}
                  height={900}
                  priority
                />
                <h3 className="text-2xl sm:text-5xl md:text-5xl font-semibold text-white mt-1 md:mt-5">
                  Struggle with 10+ tools
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-full flex justify-center mt-6 sm:mt-8"
        >
          <button className="w-auto text-sm md:text-lg border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl font-semibold cursor-pointer">
            Read me
          </button>
        </motion.div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 px-4 sm:px-0 font-gellix"
      >
        <div
          className="p-5 md:p-14 text-white md:w-10/12 mx-auto text-center mt-20 sm:mt-28"
          style={{ background: 'linear-gradient(71deg, #71D8E1 10.04%, #1B364B 69.45%)' }}
        >
          <h1 className="text-2xl md:text-5xl font-semibold tracking-tight md:my-11">
            Start your brand with kOne.
          </h1>
          <button className="w-auto text-sm md:text-lg border mt-2 md:mt-5 border-white bg-white text-black transition-all duration-300 px-3 p-2 md:px-6 rounded-3xl font-semibold cursor-pointer">
            Get early access
          </button>
        </div>
      </motion.section>
    </div>
  )
}
