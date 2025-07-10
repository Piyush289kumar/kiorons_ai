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

export default function HeroProdulctSection() {
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
    <div
  style={{
    scrollBehavior: 'smooth',
    width: '100%',
    maxWidth: '90vw',
    margin: '0 auto',
    fontFamily: 'Gellix, sans-serif',
  }}
>
  {/* Hero Section */}
  <section
    style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: '0 1rem',
    }}
  >
    <motion.div
      ref={ref1}
      initial="hidden"
      animate={controls1}
      variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.8 }}
      style={{ textAlign: 'center', zIndex: 10 }}
    >
      <h1 style={{ fontSize: '6rem', fontWeight: 600, letterSpacing: '-0.03em', color: '#fff' }}>
        Create Different.
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          marginTop: '1rem',
          color: '#fff',
        }}
      >
        Design, technology, and intelligence
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
        }}
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
        style={{ marginTop: '8rem', width: '100%' }}
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
    style={{ paddingTop: '7rem', paddingLeft: '1rem', paddingRight: '1rem', textAlign: 'center' }}
  >
    <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>Two Divisions.</h1>
    <h1 style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>One Vision.</h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      style={{
        fontSize: '1rem',
        fontWeight: 600,
        marginTop: '3rem',
        maxWidth: '33%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      We partner with ambitious teams to design, build, and scale modern brands — through two focused divisions: Studio and Tech.
    </motion.p>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '3rem',
      }}
    >
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
    style={{ marginTop: '5rem', textAlign: 'center' }}
  >
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      style={{ fontSize: '2rem', fontWeight: 500, marginTop: '1.5rem' }}
    >
      Meet
    </motion.p>
    <h1
      style={{
        fontSize: '10rem',
        fontWeight: 600,
        backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-0.03em',
        margin: 0,
      }}
    >
      kOne
    </h1>
    <div
      style={{
        position: 'relative',
        marginTop: '4rem',
        width: '66%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1rem',
      }}
    >
      <Image
        src="/assets/images/Webapp/Home/Research_Hero.png"
        alt="Video Background"
        width={1200}
        height={1200}
        style={{ width: '100%', padding: '1rem', borderRadius: '1.5rem' }}
      />
      <Image
        src="/assets/images/icons/play_arrow.svg"
        alt="Play Button"
        width={100}
        height={100}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
          height: '4rem',
        }}
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
    style={{
      textAlign: 'center',
      margin: '4rem auto',
      padding: '0 2rem',
      width: '66%',
    }}
  >
    <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>From ideation to launch,</p>
    <p style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '2rem' }}>
      {`kOne is the world's first AI-powered brand ecosystem — designed to create, manage, and
      scale modern brands with one unified intelligence.`}
    </p>
    <LandingPageButton text="Visit kOne" color="white" />
  </motion.section>
</div>

  )
}
