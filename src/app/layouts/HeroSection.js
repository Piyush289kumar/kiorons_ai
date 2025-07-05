'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import LandingCard from '@/components/landing/LandingCard'
import BlogCard from '@/components/landing/BlogCard'
import ScrollSection from '@/components/landing/ScrollSection'

export default function HeroSection() {
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

  // Apis

  const [recentBlogs, setRecentBlogs] = useState([])
  const [recentLatestNews, setRecentLatestNews] = useState([])
  const [recentThinks, setRecentThinks] = useState([])

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
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/thinks-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentThinks(data)
      })
      .catch((err) => console.error('Failed to fetch Thinks blogs', err))
  }, [])

  return (
    <div className="scroll-smooth w-full mx-auto font-gellix md:px-8">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center gap-y-0 bg-black px-4 sm:px-6 md:px-0">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">Create Different.</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl font-medium mt-3 md:mt-4"
          >
            Design, technology, and intelligence
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-2 md:gap-4 justify-center items-center mt-12"
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

      {/* Two Divisions */}
      <motion.section
        ref={ref2}
        initial="hidden"
        animate={controls2}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="font-gellix sm:pt-28 px-4 sm:px-6"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">Two Divisions.</h1>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">One Vision.</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-md font-semibold mt-6 sm:mt-11 w-full md:w-1/3 mx-auto"
          >
            We partner with ambitious teams to design, build, and scale modern brands — through two
            focused divisions: Studio and Tech.
          </motion.p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 mt-12">
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
              { text: 'Explore Tech', color: 'white', href: '/tech' },
              { text: 'Services', color: 'none', href: '/studio' },
            ]}
          />
        </div>
      </motion.section>

      {/* Meet kOne */}
      <motion.section
        ref={ref3}
        initial="hidden"
        animate={controls3}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="font-gellix lg:px-6 text-center mt-20 md:mt-32"
      >
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
        <div className="relative mt-5 md:mt-16 w-full md:w-10/12 mx-auto md:p-7">
          <Image
            src="/assets/images/Webapp/Home/Research_Hero.png"
            alt="Video Background"
            width={1200}
            height={1200}
            className="w-full md:p-5 rounded-md md:rounded-3xl"
          />
          <Image
            src="/assets/images/icons/play_arrow.svg"
            alt="Play Button"
            width={100}
            height={100}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer h-14 md:h-28"
            priority
          />
        </div>
      </motion.section>

      {/* AI Description */}
      <motion.section
        ref={ref4}
        initial="hidden"
        animate={controls4}
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        className="font-gellix px-4 sm:px-6 lg:px-28 text-center my-16 md:w-2/3 md:mx-auto"
      >
        <p className="text-base sm:text-lg md:text-2xl font-semibold">From ideation to launch,</p>
        <p className="text-base sm:text-lg md:text-2xl font-semibold mb-8">
          {`kOne is the world's first AI-powered brand ecosystem — designed to create, manage, and
          scale modern brands with one unified intelligence.`}
        </p>
        <LandingPageButton text="Visit kOne" color="white" />
      </motion.section>

      {/* <ScrollSection /> */}

      {/* Blog Cards */}
      <motion.section
        ref={ref5}
        initial="hidden"
        animate={controls4}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="font-gellix text-center mb-10 md:my-0 px-0 md:px-3 lg:px-5"
      >
        <div className="flex justify-between items-baseline mb-4 md:mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">Latest News</h4>
          <Link href="/" className="text-sm">
            View All
          </Link>
        </div>

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
                  aspectRatio="16/9"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="overflow-x-auto">
          <div className="flex gap-5 justify-center">
            {recentLatestNews.map((blog, index) => (
              <div
                key={blog.id}
                className={`w-full ${index % 2 === 0 ? 'md:w-[68%]' : 'md:w-[32%]'}`}
              >
                <BlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category.name}
                  date={blog.formatted_date}
                  readTime={blog.read_time || '2 min read'}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Blog Section */}
        {/* <div className="flex justify-between items-baseline mt-8 md:mt-20 mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">Build</h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>
        <div className="overflow-x-auto md:overflow-x-hidden">
          <div className="flex gap-5 md:px-0 w-full">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="w-[150px] md:max-w-[32vw] md:w-full flex-shrink-0">
                <BlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category?.name || 'Uncategorized'} // ✅ Safe fallback
                  date={blog.formatted_date} // ✅ Use backend-formatted date
                  readTime={blog.read_time || '1 min read'}
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className="flex justify-between items-baseline mb-4 md:mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold mt-10 md:mt-10">Build</h4>
          <Link href="/" className="text-sm">
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

        {/* Thinks Blog */}
        <div className="flex justify-between items-baseline mt-8 md:mt-20 mb-8">
          <h4 className="text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">Thinks</h4>
          <Link href={'/'} className="text-sm">
            View All
          </Link>
        </div>

        <div className="overflow-x-auto md:overflow-x-hidden">
          <div className="flex gap-5 md:px-0 w-full">
            {recentThinks.map((blog) => (
              <div key={blog.id} className="w-[150px] md:max-w-[49%] md:w-full flex-shrink-0">
                <BlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category?.name || 'Uncategorized'} // ✅ Safe fallback
                  date={blog.formatted_date} // ✅ Use backend-formatted date
                  readTime={blog.read_time || '1 min read'}
                  aspectRatio="16/9"
                />
              </div>
            ))}
          </div>
        </div>
        {/*         
        <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center">
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
        </div> */}
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 md:p-28 bg-[#151515] text-center mt-16 md:mt-32">
          <h4 className=" text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-8">
            Join kOne waitlist.
          </h4>
          <LandingPageButton text="Visit kOne" color="white" />
        </div>
      </motion.section>
    </div>
  )
}
