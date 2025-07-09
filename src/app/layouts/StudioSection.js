'use client'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import BlogCard from '@/components/landing/BlogCard'
import LandingInfoCard from '@/components/landing/LandingInforCard'
import LandingInAnalysisCard from '@/components/landing/LandingInAnalysisCard'
export default function StudioSection() {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()
  const controls5 = useAnimation()
  const controls6 = useAnimation()
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 })
  useEffect(() => {
    if (inView1) controls1.start('visible')
    if (inView2) controls2.start('visible')
    if (inView3) controls3.start('visible')
    if (inView4) controls4.start('visible')
    if (inView5) controls5.start('visible')
    if (inView6) controls6.start('visible')
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
  const partners = [
    { src: '/assets/images/partners/Sentry.svg', alt: 'Sentry' },
    { src: '/assets/images/partners/Medium.svg', alt: 'Medium' },
    { src: '/assets/images/partners/monday.svg', alt: 'Monday' },
    { src: '/assets/images/partners/Jitter.svg', alt: 'Jitter' },
    { src: '/assets/images/partners/monday.svg', alt: 'Monday' },
    { src: '/assets/images/partners/Sentry.svg', alt: 'Sentry' },
  ]
  const [recentBlogs, setRecentBlogs] = useState([])
  const [recentLatestNews, setRecentLatestNews] = useState([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/build-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentBlogs(data)
      })
      .catch((err) => console.error('Failed to fetch blogs', err))
  }, [])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/latest-news-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentLatestNews(data)
      })
      .catch((err) => console.error('Failed to fetch Latest News blogs', err))
  }, [])
  return (
    <div className="scroll-smooth mx-auto font-gellix w-full md:w-[90vw]">
      {/* Hero Section */}
      <section className="flex flex-col mt-12 mb-44 items-center gap-y-0 bg-black px-4 sm:px-6 md:px-0">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <p className="text-sm font-medium mb-10 md:mb-14">Studio</p>
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">Design. Defined.</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl font-medium mt-3 md:mt-10 w-8/12 mx-auto"
          >
            The visual systems that drive modern brands, products, and platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-2 md:gap-4 justify-center items-center mt-12"
          >
            <LandingPageButton text="Start Project" color="white" href="#" />
            <LandingPageButton text="Capabilities" color="black" href="#" />
          </motion.div>
        </motion.div>
      </section>
      {/* Two Divisions */}
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="font-gellix px-4 sm:px-6 md:mb-56"
      >
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Trusted by 50+ forward-thinking brands
          </h1>
          {/* <div className="flex flex-col lg:flex-row justify-center gap-8 mt-12 md:mt-24"> */}
          <div className="grid grid-cols-3 md:flex gap-4 md:gap-4 mt-12 md:mt-24">
            {partners.map((partner, idx) => (
              <Image
                key={idx}
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={28}
                className="w-full h-7 object-contain"
              />
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section className="font-gellix px-4 sm:px-6 my-32 md:my-56">
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
          What we build. How it performs.
        </h3>
        <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-8 mt-11 md:mt-28">
          <LandingInfoCard
            logo="/assets/images/icons/system-cloud.svg"
            label="Brand Systems"
            heading="Built to scale. Structured to last."
            subheading="We craft identity frameworks that stay relevant as your company grows — complete with scalable guidelines, systems, and a clear voice across every touchpoint."
          />
          <LandingInfoCard
            logo="/assets/images/icons/layers.svg"
            label="Digital Interfaces"
            heading="Designed for humans. Built for scale."
            subheading="From SaaS dashboards to product onboarding, we design UI/UX that simplifies decisions and adapts to real user behavior  beautifully and functionally."
          />
          <LandingInfoCard
            logo="/assets/images/icons/fullstack.svg"
            label="Design Infrastructure"
            heading="Not just pixels — process.."
            subheading="We build design ecosystems: token-based systems, dev-ready libraries, and documented workflows that turn creativity into operational scale."
          />
        </div>
      </motion.section>
      {/* Blog Cards */}
      <motion.section className="font-gellix text-center my-10 md:my-40">
        <p className="text-3xl md:text-5xl font-semibold mb-10 md:mb-20">
          How we think. How we build.
        </p>
        <div className="overflow-x-auto">
          <div className="flex gap-3 md:gap-6 md:px-0 w-full">
            {recentLatestNews.map((blog) => (
              <div
                key={blog.id}
                className="
                          w-[45%] 
                          sm:w-[48%] 
                          md:w-[32%] 
                          flex-shrink-0
                        "
              >
                <BlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category?.name || 'Uncategorized'}
                  date={blog.formatted_date}
                  readTime={blog.read_time || '1 min read'}
                  aspectRatio="1/1"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* AI Description */}
      <motion.section className="font-gellix px-4 sm:px-6 lg:px-28 text-center my-28 md:my-56 md:w-10/12 mx-auto">
        <h4 className="text-xl md:text-4xl font-medium mb-6 md:mb-12">
          Kiorons Studio isn’t just a design partner — they became our brand’s operating system.
          Every piece of work was thoughtful, scalable, and built like it belonged to our internal
          team.
        </h4>
        <p className="text-sm md:text-lg italic font-semibold md:mt-16 text-wrap text-center ">
          — Founder, Seed-stage SaaS Startup
        </p>
      </motion.section>
      <motion.section className="font-gellix px-4 sm:px-6 my-24 md:my-56">
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-center">
          Proven design. Real results.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-11 md:mt-28">
          <LandingInAnalysisCard
            label="50+"
            heading="Brands & Products Built"
            subheading="From early-stage to venture-backed — we’ve launched for teams that build seriously."
          />
          <LandingInAnalysisCard
            label="5+"
            heading="Countries Served"
            subheading="Design language is universal. We work globally, in sync with fast-moving teams."
          />
          <LandingInAnalysisCard
            label="100%"
            heading="Systems Adopted in Production"
            subheading="Every design is built with devs in mind — clean, scalable, and implementation-ready."
          />
          <LandingInAnalysisCard
            label="98%"
            heading="Clients Returned"
            subheading="We don’t chase retention — we earn it. Most clients return with their next product."
          />
        </div>
      </motion.section>
      {/* Blog Cards */}
      <motion.section className="font-gellix my-10 md:my-40">
        <div className="flex justify-between items-baseline mt-8 md:mt-20 mb-8">
          <h4 className="text-xl md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">
            Ideas. Insights. Inside Kiorons.
          </h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-3 md:gap-6 md:px-0 w-full">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="
                          w-[45%] 
                          sm:w-[48%] 
                          md:w-[32%] 
                          flex-shrink-0
                        "
              >
                <BlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category?.name || 'Uncategorized'}
                  date={blog.formatted_date}
                  readTime={blog.read_time || '1 min read'}
                  aspectRatio="1/1"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 md:p-28 bg-[#151515] text-center">
          <h4 className=" text-2xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-8">
            Let’s build the iconic.
          </h4>
          <LandingPageButton text="Contact the Tech" color="white" href="#" />
        </div>
      </motion.section>
    </div>
  )
}
