'use client'

import '@/styles/assets/css/4105e979b7485bff.css'
import '@/styles/assets/css/ba2e6b7c939be632.css'
import '@/styles/assets/css/1be87e885847316b.css'
import '@/styles/assets/css/833eabf499e625b2.css'
import '@/styles/assets/css/9cd2a96b2ee898ce.css'

import '@/styles/assets/css/1bfffb9d5bad202f.css'

import '@/styles/assets/css/97e3c45dcae8ebe6.css'
import '@/styles/assets/css/d1cfe8dedc57da26.css'
import '@/styles/assets/css/d230b7644f178243.css'
import '@/styles/assets/css/9db570bb1a7b37d9.css'
import '@/styles/assets/css/e2c5b4cbada55ed0.css'
import '@/styles/assets/css/3e6a8afa8b7ca6ac.css'
import '@/styles/assets/css/877938fdea4e370b.css'
import '@/styles/assets/css/8154015444e20430.css'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroProdulctSection from './HeroProdulctSection'
import SmallBlogCard from '@/components/landing/SmallBlogCard'
import LargeBlogCard from '@/components/landing/LargeBlogCard'
import BlogCard from '@/components/landing/BlogCard'
import CTA from '@/components/landing/CTA'

export default function HeroSection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowLogo(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSidebarOpen(window.innerWidth >= 1024) // Default sidebar open only on large screens
    }

    window.addEventListener('resize', checkMobile)
    checkMobile()

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Constants simulating Tailwind theme values
  const navWidthMobile = '4rem' // same as theme(spacing.nav-width-mobile)
  const navWidth = '16rem' // same as theme(spacing.nav-width)

  const getGridTemplateColumns = () => {
    if (isMobile) {
      return isSidebarOpen
        ? `${navWidthMobile} 1fr` // Mobile + open sidebar
        : `0 1fr` // Mobile + closed sidebar
    } else {
      return isSidebarOpen
        ? `0 ${navWidth} 1fr` // Desktop + open sidebar
        : `0 0 1fr` // Desktop + closed sidebar
    }
  }

  // Apis

  const [recentBlogs, setRecentBlogs] = useState([])
  const [recentLatestNews, setRecentLatestNews] = useState([])
  const [recentThinks, setRecentThinks] = useState([])
  const [informationalBigBlog, setInformationalBigBlog] = useState([])
  const [informationalSmallBlog, setInformationalSmallBlog] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/build-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentBlogs(data.slice(0, 3))
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
        setRecentThinks(data.slice(0, 2))
      })
      .catch((err) => console.error('Failed to fetch Thinks blogs', err))
  }, [])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/informational-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setInformationalBigBlog(data.slice(0, 1))
        setInformationalSmallBlog(data.slice(1, 2))
      })
      .catch((err) => console.error('Failed to fetch Informational blogs', err))
  }, [])

  return (
    <>
      <HeroProdulctSection />
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        Kiorons
      </span>

      <article className="flex flex-col gap-2xl @md:gap-3xl">
        <div className="@container w-full">
          <div className="@lg:max-w-container @lg:grid-cols-4 gap-sm grid w-full grid-cols-1 items-start">
            <div className="@lg:col-span-3 @lg:sticky @lg:mb-0 mb-sm duration-medium grid-cols-1 self-start transition-[top] @lg:top-header-h">
              <div className="px-sm block md:hidden">
                <div className="group relative">
                  <div
                    className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                    style={{ aspectRatio: 4 / 5 }}
                  ></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.0125] group-hover:[&amp;_video]:scale-[1.0125]">
                    <div className="relative w-full" style={{ aspectRatio: 4 / 5 }}>
                      <div className="h-full w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-none aspect-4/5 bg-surface-loading">
                          {/* <img alt="Sam Altman and Jony Ive" data-nosnippet="true" loading="lazy" decoding="async"
                                data-nimg="fill" className="object-cover object-center"
                                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="(min-width: 1728px) 1728px, 100vw"
                                srcSet="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/15kshpgxK5cIDIeI2eHCCI/70cf68c982fc0da3bae51e6388a56c37/CMD_250406_VIRGO_001_346_05a-BW-1200x630.jpg?w=3840&amp;q=90&amp;fm=webp" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    aria-label="A letter from Sam &amp; Jony - Company - Jul 9, 2025"
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                    data-analytics="2-0-home-card-grid-featured-sam-and-jony"
                    id="48bHYUWfdD9gvoHFsnbXln"
                    href="/sam-and-jony/"
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h2 @md:pr-2xl">
                        <p>A letter from Sam &amp; Jony</p>
                      </div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-md">
                        <span className="text-nowrap">Company Demo</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                          <span className="text-primary-44 text-nowrap">3 min read</span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="px-sm @md:px-md @lg:px-0 @lg:pb-[var(--pb)] relative hidden md:block">
                {informationalBigBlog.map((blog) => (
                  <>
                    <div className="group relative">
                      <div
                        className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                        style={{ aspectRatio: 16 / 9 }}
                      ></div>
                      <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.0125] group-hover:[&amp;_video]:scale-[1.0125]">
                        <div className="relative w-full" style={{ aspectRatio: 16 / 9 }}>
                          <div className="h-full w-full">
                            <div className="relative h-full w-full overflow-hidden rounded-none aspect-16/9 bg-surface-loading">
                              <Image
                                data-nosnippet="true"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover object-center"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  color: 'transparent',
                                }}
                                sizes="(min-width: 1728px) 1728px, 100vw"
                                src={blog.image_url}
                                alt={blog.title}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                        data-analytics="2-0-home-card-grid-featured-sam-and-jony"
                        id="48bHYUWfdD9gvoHFsnbXln"
                        aria-label={blog.title}
                        href={`/blogs/${blog.slug}`}
                      >
                        <div className="text-primary-100 relative w-full">
                          <div className="mb-2xs text-h2 @md:pr-2xl">
                            <p>{blog.title || 'N/A'}</p>
                          </div>
                          <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-md">
                            <span className="text-nowrap">
                              {blog.category?.name || 'Uncategorized'}
                            </span>
                            <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-primary-44 text-nowrap">
                                {blog.read_time || '1 min read'}
                              </span>
                            </span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="px-sm @md:px-md @lg:px-0 @lg:grid-cols-1 gap-y-xl gap-x-2xs col-span-1 grid grid-cols-1 @md:grid-cols-3">
              {informationalSmallBlog.map((blog) => (
                <>
                  <div className="@lg:pb-[var(--pb)] relative">
                    <div className="group relative">
                      <div
                        className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                        style={{ aspectRatio: 1 / 1 }}
                      ></div>
                      <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                        <div className="relative w-full" style={{ aspectRatio: 1 / 1 }}>
                          <div className="h-full w-full">
                            <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                              <Image
                                data-nosnippet="true"
                                loading="lazy"
                                decoding="async"
                                fill
                                className="object-cover object-center"
                                style={{
                                  position: 'absolute',
                                  height: '100%',
                                  width: '100%',
                                  left: 0,
                                  top: 0,
                                  right: 0,
                                  bottom: 0,
                                  color: 'transparent',
                                }}
                                sizes="(min-width: 1728px) 1728px, 100vw"
                                src={blog.image_url}
                                alt={blog.title}
                              />
                            </div>
                          </div>

                          <div className="aspect-1/1  :min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                            <button
                              type="button"
                              className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                              aria-label="Pause video"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                viewBox="0 0 11 16"
                                fill="none"
                              >
                                <path
                                  d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                                  fill="currentColor"
                                ></path>
                                <path
                                  d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                        data-analytics="2-0-home-card-grid-featured-small-codex"
                        id="5Jp3tazBlA8Cj0dABwshH7"
                        aria-label={blog.title}
                        href={`/blogs/${blog.slug}`}
                      >
                        <div className="text-primary-100 relative w-full">
                          <div className="mb-2xs text-h5 @md:pr-md">{blog.title || 'N/A'}</div>
                          <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                            <span className="text-nowrap">
                              {' '}
                              {blog.category?.name || 'Uncategorized'}
                            </span>
                            <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                              <span className="text-primary-44 text-nowrap">
                                {' '}
                                {blog.read_time || '1 min read'}
                              </span>
                            </span>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </>
              ))}

              {/* <div className="@lg:pb-[var(--pb)] relative">
                <div className="group relative">
                  <div
                    className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                    style={{ aspectRatio: 1 / 1 }}
                  ></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                    <div className="relative w-full" style={{ aspectRatio: 1 / 1 }}>
                      <div className="h-full w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                           <img
                                alt="[2.0] home &gt; card grid &gt; featured &gt; large &gt; o3 and o4-mini &gt; media background &gt; poster image"
                                data-nosnippet="true" loading="lazy" decoding="async" data-nimg="fill"
                                className="object-cover object-center"
                                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="(min-width: 1728px) 1728px, 100vw"
                                srcSet="https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/2s46ST9v2svyn8qwtXgG4u/0a749f35cfe7fc78eaefc11b4721f237/o3o4mini_16x9.png?w=3840&amp;q=90&amp;fm=webp" />
                        </div>
                      </div>
                      <div className="aspect-1/1  :min-h-full min-w-full overflow-hidden absolute left-0 top-0 h-full w-full object-cover">
                        <button
                          type="button"
                          className="text-secondary-100 bg-primary-44 focus:outline-primary-44 backdrop-blur-[4.375rem] ease-curve-a flex items-center justify-center disabled:text-gray-40 focus-visible:outline focus-visible:outline-1 outline-offset-2 focus-visible:outline-offset-0 rounded-full w-[32px] h-[32px] hover:bg-primary-60 right-2xs top-2xs absolute z-[1] opacity-0 transition duration-200 hover:opacity-100 group-hover:opacity-100"
                          aria-label="Pause video"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            viewBox="0 0 11 16"
                            fill="none"
                          >
                            <path
                              d="M0.302795 4.13636C0.302795 3.50877 0.811563 3 1.43916 3H2.8028C3.43039 3 3.93916 3.50877 3.93916 4.13636V11.8636C3.93916 12.4912 3.43039 13 2.8028 13H1.43916C0.811563 13 0.302795 12.4912 0.302795 11.8636V4.13636Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M6.66643 4.13636C6.66643 3.50877 7.1752 3 7.8028 3H9.16643C9.79403 3 10.3028 3.50877 10.3028 4.13636V11.8636C10.3028 12.4912 9.79403 13 9.16643 13H7.8028C7.1752 13 6.66643 12.4912 6.66643 11.8636V4.13636Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <a
                    aria-label="OpenAI o3 and o4-mini - Release - Apr 16, 2025"
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                    data-analytics="2-0-home-card-grid-featured-small-audio-models"
                    id="282yXxMfiMVjYVDHXM289b"
                    href="/index/introducing-o3-and-o4-mini/"
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h5 @md:pr-md">
                        <p>OpenAI o3 and o4-mini</p>
                      </div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                        <span className="text-nowrap">Release</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                          <span className="text-primary-44 text-nowrap">11 min read</span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div> */}
              {/* <div className="@lg:pb-[var(--pb)] relative">
                <div className="group relative">
                  <div
                    className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
                    style={{ aspectRatio: 1 / 1 }}
                  ></div>
                  <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
                    <div className="relative w-full" style={{ aspectRatio: 1 / 1 }}>
                      <div className="h-full w-full">
                        <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                          <img alt="Math Tutor &gt; Cover media " data-nosnippet="true" loading="lazy"
                                decoding="async" data-nimg="fill" className="object-cover object-center"
                                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="(min-width: 1728px) 1728px, 100vw"
                                srcSet="https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=640&amp;q=90&amp;fm=webp 640w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=750&amp;q=90&amp;fm=webp 750w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=828&amp;q=90&amp;fm=webp 828w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=1080&amp;q=90&amp;fm=webp 1080w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=1200&amp;q=90&amp;fm=webp 1200w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=1920&amp;q=90&amp;fm=webp 1920w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=2048&amp;q=90&amp;fm=webp 2048w, https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=3840&amp;q=90&amp;fm=webp 3840w"
                                src="https://images.ctfassets.net/kftzwdyauwt9/2oDKH92TW20YedrGjlZ2bO/aee7f60283553fa4f600d6f38fddbd0f/My_dog__the_math_tutor.jpg?w=3840&amp;q=90&amp;fm=webp" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    aria-label="Building a custom math tutor powered by ChatGPT - ChatGPT - Feb 4, 2025"
                    className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
                    data-analytics="my-dog-the-math-tutor"
                    id="oAiPe1oLiuAS7Z4af7Bpj"
                    href="/index/my-dog-the-math-tutor/"
                  >
                    <div className="text-primary-100 relative w-full">
                      <div className="mb-2xs text-h5 @md:pr-md">
                        Building a custom math tutor powered by ChatGPT
                      </div>
                      <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
                        <span className="text-nowrap">ChatGPT</span>
                        <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                          <span className="text-primary-44 text-nowrap">4 min read</span>
                        </span>
                      </p>
                    </div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="@container w-full">
          <div className="max-w-container mb-md flex items-baseline justify-between">
            <div>
              <h2 className="text-h4 text-primary-100">Latest news</h2>
            </div>
            <a
              className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
              data-analytics="homepage-latest-news"
              href="/news/"
            >
              View all
            </a>
          </div>
          {/* Latest Newsu */}
          <div className="max-w-container grid w-full grid-cols-1 gap-sm @lg:grid-cols-2">
            {recentLatestNews.map((blog) => (
              <>
                <SmallBlogCard
                  img={blog.image_url}
                  title={blog.title}
                  slug={blog.slug}
                  category={blog.category?.name || 'Uncategorized'}
                  date={blog.formatted_date}
                  readTime={blog.read_time || '1 min read'}
                  aspectRatio="1/1"
                />
              </>
            ))}
          </div>
        </div>

        <div className="@container w-full">
          <div className="max-w-container mb-md flex items-baseline justify-between">
            <div>
              <h2 className="text-h4 text-primary-100">Thinks</h2>
            </div>
            <a
              className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
              data-analytics="homepage-research-view-all"
              href="/research/index/"
            >
              View all
            </a>
          </div>
          <div className="@lg:max-w-container flex w-auto">
            <div className="w-full">
              <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 @md:grid @md:grid-cols-2 flex-none">
                {recentThinks.map((blog) => (
                  <>
                    <LargeBlogCard
                      img={blog.image_url}
                      title={blog.title}
                      slug={blog.slug}
                      category={blog.category?.name || 'Uncategorized'}
                      date={blog.formatted_date}
                      readTime={blog.read_time || '1 min read'}
                      aspectRatio="1/1"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="@container w-full">
          <div className="max-w-container mb-md flex items-baseline justify-between">
            <div>
              <h2 className="text-h4 text-primary-100">Build</h2>
            </div>
            <a
              className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
              data-analytics="homepage-business-stories"
              href="/stories/"
            >
              View all
            </a>
          </div>
          <div className="@lg:max-w-container flex w-auto">
            <div className="w-full no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
              <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 pr-sm @md:min-w-[unset] flex min-w-[56rem] grid flex-none grid-cols-3">
                {recentBlogs.map((blog) => (
                  <>
                    <BlogCard
                      img={blog.image_url}
                      title={blog.title}
                      slug={blog.slug}
                      category={blog.category?.name || 'Uncategorized'}
                      date={blog.formatted_date}
                      readTime={blog.read_time || '1 min read'}
                      aspectRatio="1/1"
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <CTA heading="Join kOne waitlist." btnText="Visit kOne" href="/kone" />
      </article>

      <div></div>
      <div className="@container ease-curve-sidebar sticky bottom-4 left-0 right-0 z-50 mx-auto h-[48px] w-[200px] transition [transition:transform_500ms,opacity_200ms,left_200ms,width_400ms] focus-within:w-[355px] hover:scale-105 focus-within:hover:scale-100 translate-y-20 opacity-0">
        <form className="relative">
          <label className="shadow-black-4 bg-tertiary-60 relative flex w-full rounded-[24px] p-2 shadow-sm backdrop-blur-xl">
            <input
              className="placeholder:text-primary-60 text-nav-mobile md:text-p2 h-md pr-md mx-3 w-full bg-transparent focus:outline-none"
              placeholder="Ask Kiorons"
              aria-label="Message Kiorons"
            />
          </label>
          <button
            className="bg-primary-100 text-secondary-100 disabled:bg-primary-44 disabled:text-secondary-60 absolute right-2 top-2 h-8 w-8 flex-none rounded-full p-0 hover:opacity-70 disabled:hover:opacity-100"
            type="submit"
            disabled=""
            aria-label="Send prompt to Kiorons"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 22L16 10M16 10L11 15M16 10L21 15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
