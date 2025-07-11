'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import BlogCard from './BlogCard' // Adjust path if needed

export default function BlogsSlider({ apiRoute, heading = 'Blogs', viewAllLink = '/' }) {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (!apiRoute) return

    fetch(apiRoute)
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 3)))
      .catch((err) => console.error('Failed to load blogs:', err))
  }, [apiRoute])

  if (!blogs.length) return null

  return (
    <>
      <div className="@container w-full">
        <div className="max-w-container mb-md flex items-baseline justify-between md:px-8">
          <div>
            <h2 className="text-h4 text-primary-100">{heading}</h2>
          </div>
          <Link
            className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0 !rounded"
            data-analytics="homepage-business-stories"
            href={viewAllLink}
          >
            View all
          </Link>
        </div>
        <div className="@lg:max-w-container flex w-auto !-ml-6 md:!-ml-0">
          <div className="w-full no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-hidden">
            <div className="@md:gap-sm px-sm @md:px-md @lg:px-0 pr-0 @md:min-w-[unset] min-w-[56rem] grid flex-none grid-cols-3">
              {blogs.map((blog) => (
                <>
                  <BlogCard
                    img={blog.image_url}
                    title={blog.title}
                    slug={blog.slug}
                    category={blog.category?.name || 'Uncategorized'}
                    date={blog.formatted_date}
                    readTime={blog.read_time || '1 min read'}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
