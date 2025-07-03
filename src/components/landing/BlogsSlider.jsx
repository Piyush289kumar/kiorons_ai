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
      .then((data) => setBlogs(data))
      .catch((err) => console.error('Failed to load blogs:', err))
  }, [apiRoute])

  if (!blogs.length) return null

  return (
    <>
      <div className="flex justify-between items-baseline mt-8 md:mt-20 mb-8">
        <h4 className="text-2xl md:text-3xl font-semibold mt-6 sm:mt-8 md:mt-4">{heading}</h4>
        <Link href={viewAllLink} className="text-sm">
          View All
        </Link>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-5 md:px-0 w-max">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-[70%] sm:w-[60%] md:w-[30%] min-w-[250px]">
              <BlogCard
                img={blog.image_url}
                title={blog.title}
                slug={blog.slug}
                category={blog.category || 'Uncategorized'}
                date={blog.formatted_date}
                readTime={blog.read_time || '1 min read'}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
