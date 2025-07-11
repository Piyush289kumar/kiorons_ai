'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import LandingCard from '@/components/landing/LandingCard'
import BlogCard from '@/components/landing/BlogCard'
import ScrollSection from '@/components/landing/ScrollSection'
import LandingInfoCard from '@/components/landing/LandingInforCard'

export default function HeroProdulctSection() {
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
    <>
      <section className="relative !min-h-screen flex flex-col justify-center items-center !gap-y-0 !bg-black !px-4 sm:!px-6 md:!px-0">
        <div className="!text-center z-10 !mt-10 md:!mt-44">
          <h1 className="!text-7xl md:!text-9xl !font-semibold !tracking-tight">
            Create Different.
          </h1>
          <p className="!text-base sm:!text-lg md:!text-2xl !font-medium !mt-3 md:!mt-4">
            Design, technology, and intelligence
          </p>
          <div className="flex !gap-2 md:!gap-4 justify-center items-center !mt-12">
            <LandingPageButton text="Visit kOne" color="white" />
            <LandingPageButton text="Explore Services" color="black" />
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/Webapp/Home/line.svg"
            alt="Logo"
            width={900}
            height={900}
            className="!mt-32 !w-full"
            priority
          />
        </div>
      </section>

      {/* Two Divisions */}
      <section className="!font-gellix px-5">
        <div className="text-center">
          <h1 className="!text-5xl md:!text-6xl !font-semibold !tracking-tight">Two Divisions.</h1>
          <h1 className="!text-5xl md:!text-6xl !font-semibold !tracking-tight">One Vision.</h1>
          <p className="!text-sm md:!text-xl !font-semibold !mt-6 sm:!mt-11 !w-full md:!w-1/3 !mx-auto">
            We partner with ambitious teams to design, build, and scale modern brands — through two
            focused divisions: Studio and Tech.
          </p>
        </div>
        <div className="flex flex-col lg:!flex-row !justify-center !gap-4 !mt-12">
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
      </section>

      {/* Meet kOne */}
      <section className="font-gellix lg:!px-6 text-center !mt-20 md:!mt-32 px-5">
        <p className="!text-base sm:!text-lg md:!text-4xl !font-medium !mt-6 sm:!mt-8 md:!mt-4">
          Meet
        </p>
        <h1
          className="!text-5xl sm:!text-7xl md:!text-[160px] !font-semibold !text-transparent bg-clip-text !tracking-tight"
          style={{
            backgroundImage: 'linear-gradient(91deg, #FFF 50%, #80D3D7 61.75%, #0D335D 93.49%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          kOne
        </h1>
        <div className="!relative !mt-5 md:!mt-16 w-full">
          <Image
            src="/assets/images/Webapp/Home/Research_Hero.png"
            alt="Video Background"
            width={900}
            height={900}
            className="rounded-[0.4rem] md:!rounded-sm mx-auto"
          />
          <Image
            src="/assets/images/icons/play_arrow.svg"
            alt="Play Button"
            width={100}
            height={100}
            className="!absolute !top-1/2 !left-1/2 !transform !-translate-x-1/2 !-translate-y-1/2 !cursor-pointer !h-14 md:!h-28"
            priority
          />
        </div>
      </section>

      {/* AI Description */}
      <section className="font-gellix  px-5 lg:!px-28 text-center !my-16 md:!w-2/3 md:!mx-auto">
        <p className="!text-base sm:!text-lg md:!text-2xl font-normal md:!font-semibold">
          From ideation to launch,
        </p>
        <p className="!text-base sm:!text-lg md:!text-2xl font-normal md:!font-semibold !mb-8">
          {`kOne is the world's first AI-powered brand ecosystem — designed to create, manage, and scale modern brands with one unified intelligence.`}
        </p>
        <LandingPageButton text="Visit kOne" color="white" />
      </section>
    </>
  )
}
