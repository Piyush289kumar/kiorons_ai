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

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/latest-news-recent-blogs`)
      .then((res) => res.json())
      .then((data) => {
        setRecentLatestNews(data.slice(0, 6)) // 1 for left, 3 for right
      })
      .catch((err) => console.error('Failed to fetch blogs', err))
  }, [])
  useEffect(() => {
    if (!rightRef.current || !containerRef.current) return

    const isMobile = window.innerWidth < 768
    if (isMobile) return // ✅ Don't run GSAP on mobile

    const ctx = gsap.context(() => {
      const rightHeight = rightRef.current.scrollHeight
      const pinSectionHeight = rightHeight + window.innerHeight

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${pinSectionHeight}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      })

      gsap.to(rightRef.current, {
        y: () => -rightHeight + window.innerHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${pinSectionHeight}`,
          scrub: true,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [recentLatestNews])

  return (
    <section
      ref={containerRef}
      className="w-full flex flex-col md:flex-row relative z-10 md:h-screen overflow-hidden"
    >
      {/* Left (Fixed 70%) */}
      <div className="w-full md:w-[70%] h-fit sticky top-20 flex items-start justify-center md:pl-20 mb-32 md:mb-0">
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

      {/* Right (Scrollable Panels - 30%) */}
      <div ref={rightRef} className="w-full md:w-[30%] flex flex-col gap-14 md:mt-20 h-auto">
        {recentLatestNews.slice(1).map((blog) => (
          <div key={blog.id} className="panel flex items-center justify-center md:px-4 md:pr-20">
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
