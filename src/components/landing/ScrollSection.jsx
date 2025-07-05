'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import BlogCard from './BlogCard'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollSection() {
  const containerRef = useRef(null)
  const rightRef = useRef(null)

  const [recentLatestNews, setRecentLatestNews] = useState([])

  // Fetch blogs
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/latest-news-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentLatestNews(data.slice(0, 4))
      })
      .catch((err) => console.error('Fetch Error:', err))
  }, [])

  // GSAP scroll animation
  useEffect(() => {
    const right = rightRef.current
    const container = containerRef.current

    if (!right || !container || recentLatestNews.length < 2) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const ctx = gsap.context(() => {
      const updateScrollTrigger = () => {
        const rightHeight = right.scrollHeight
        const totalScroll = rightHeight - window.innerHeight

        ScrollTrigger.killAll()

        ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: `+=${rightHeight + window.innerHeight}`,
          pin: true,
          scrub: true,
        })

        gsap.to(right, {
          y: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: `+=${rightHeight + window.innerHeight}`,
            scrub: true,
          },
        })

        ScrollTrigger.refresh()
      }

      setTimeout(updateScrollTrigger, 100) // Wait for DOM layout

      window.addEventListener('resize', updateScrollTrigger)
    }, container)

    return () => {
      ctx.revert()
      ScrollTrigger.killAll()
    }
  }, [recentLatestNews])

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col md:flex-row relative z-10 md:h-screen overflow-hidden"
    >
      {/* Left sticky section */}
      <div className="w-full md:w-[70%] h-screen sticky top-0 flex items-start justify-center md:pl-20 mb-32 md:mb-0">
        {recentLatestNews[0] ? (
          <div className="w-full">
            <BlogCard
              img={recentLatestNews[0].image_url}
              title={recentLatestNews[0].title}
              slug={recentLatestNews[0].slug}
              category={recentLatestNews[0].category?.name || 'Uncategorized'}
              date={recentLatestNews[0].formatted_date}
              readTime={recentLatestNews[0].read_time || '1 min read'}
              aspectRatio="16/9"
            />
          </div>
        ) : (
          <div className="text-2xl font-bold">Loading...</div>
        )}
      </div>

      {/* Right scrollable section */}
      <div
        ref={rightRef}
        className="w-full md:w-[30%] flex flex-col gap-14 md:mt-20 h-screen md:pr-20"
      >
        {recentLatestNews.slice(1).map((blog) => (
          <div key={blog.id} className="panel flex items-center justify-center md:px-4">
            <div className="w-full">
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
          </div>
        ))}
      </div>
    </section>
  )
}
