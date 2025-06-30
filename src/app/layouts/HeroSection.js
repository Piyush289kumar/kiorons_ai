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
import Link from 'next/link'
import BlogCard from '@/components/landing/BlogCard'
export default function HeroSection() {
  // Animation controls for each section
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()
  const controls5 = useAnimation()
  const controls6 = useAnimation()
  // Intersection observers for each section
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 })
  // Trigger animations when sections come into view
  useEffect(() => {
    if (inView1) controls1.start('visible')
    if (inView2) controls2.start('visible')
    if (inView3) controls3.start('visible')
    if (inView4) controls4.start('visible')
    if (inView5) controls5.start('visible')
    if (inView6) controls5.start('visible')
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
    inView6,
  ])
  return (
    <div className="scroll-smooth w-11/12 mx-auto font-gellix">
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
        className="font-gellix px-4 sm:px-28 text-center md:my-56"
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
          <div className="relative mt-32 w-full">
            <Image
              src="/assets/images/Webapp/Home/videoSection.png"
              alt="Video Background"
              width={900}
              height={900}
              className="w-full"
            />
            <Image
              src="/assets/images/icons/play_arrow.svg"
              alt="Play Button"
              width={100}
              height={100}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              priority
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={ref4}
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix px-4 sm:px-28 text-center md:my-56"
      >
        <div>
          <p className="text-base sm:text-lg md:text-4xl font-semibold">From ideation to launch,</p>
          <p className="text-base sm:text-lg md:text-4xl font-semibold text-center mb-12">
            kOne is the world's first AI-powered brand ecosystem — designed to create, manage, and
            scale modern brands with one unified intelligence.
          </p>
          <LandingPageButton text="Visit kOne" color="white" />
        </div>
      </motion.section>
      {/* "No templates" Section */}
      <motion.section
        ref={ref5}
        initial="hidden"
        animate={controls4}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix text-center md:my-40"
      >
        <div className="flex justify-between items-baseline mb-8">
          <h4 className="text-base sm:text-lg md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">
            Latest News
          </h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="w-[68%] h-full">
            <BlogCard
              img="/assets/images/Webapp/Home/news1.png"
              title="Introducing kOne — The Operating System for Modern Brands"
              category="Announcements"
              date="June 20, 2025"
              readTime="2 min read"
            />
          </div>
          <div className="w-[32%] h-full">
            <BlogCard
              img="/assets/images/Webapp/Home/news2.png"
              title="What’s New in Our Platform — May 2025 Updates"
              category="Product Updates"
              date="May 15, 2025"
              readTime="3 min read"
            />
          </div>
        </div>
        {/* Blog Section */}
        <div className="flex justify-between items-baseline mt-20 mb-8">
          <h4 className="text-base sm:text-lg md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">
            Build
          </h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>
        <div className="flex gap-5 justify-center">
          <BlogCard
            img="/assets/images/Webapp/Home/blog1.png"
            title="Behind kOne: Building the Brain of the Brand OS"
            category="Development"
            date="June 20, 2025"
            readTime="2 min read"
          />
          <BlogCard
            img="/assets/images/Webapp/Home/blog3.png"
            title="Design That Doesn’t Break at Scale"
            category="Case Study"
            date="May 15, 2025"
            readTime="3 min read"
          />
          <BlogCard
            img="/assets/images/Webapp/Home/blog3.png"
            title="The Tools Behind Our Thinking"
            category="Development"
            date="May 15, 2025"
            readTime="3 min read"
          />
        </div>
        {/* Thinks Blog */}
        {/* Blog Section */}
        <div className="flex justify-between items-baseline mt-20 mb-8">
          <h4 className="text-base sm:text-lg md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">
            Thinks
          </h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>
        <div className="flex gap-5 justify-center">
          <BlogCard
            img="/assets/images/Webapp/Home/thinkblog1.png"
            title="Create Different — Why It’s Not Just a Slogan"
            category="Philosophy"
            date="June 20, 2025"
            readTime="2 min read"
          />
          <BlogCard
            img="/assets/images/Webapp/Home/thinkblog2.png"
            title="Why UX Is the New Branding"
            category="Research"
            date="May 15, 2025"
            readTime="3 min read"
          />
        </div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-5 md:p-28 bg-[#151515] text-center">
          <h4 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Join kOne waitlist.
          </h4>
          <LandingPageButton text="Visit kOne" color="white" />
        </div>
      </motion.section>
    </div>
  )
}
