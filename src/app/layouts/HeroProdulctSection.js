'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import LandingCard from '@/components/landing/LandingCard'
import BlogCard from '@/components/landing/BlogCard'
import ScrollSection from '@/components/landing/ScrollSection'

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
      <section className="relative min-h-screen flex flex-col justify-center items-center gap-y-0 bg-black px-4 sm:px-6 md:px-0">
        <div className="text-center z-10">
          <h1 className="text-7xl md:text-9xl font-semibold tracking-tight">Create Different.</h1>
          <p className="text-base sm:text-lg md:text-2xl font-medium mt-3 md:mt-4">
            Design, technology, and intelligence
          </p>
          <div className="flex gap-2 md:gap-4 justify-center items-center mt-12">
            <LandingPageButton text="Visit kOne" color="white" />
            <LandingPageButton text="Explore Services" color="black" />
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/Webapp/Home/line.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mt-32 w-full"
            priority
          />
        </div>
      </section>
    </>
  )
}
