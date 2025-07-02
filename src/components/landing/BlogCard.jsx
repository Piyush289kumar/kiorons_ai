'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ img, title, category, date, readTime, slug }) {
  return (
    <Link href={`/blogs/${slug}`} className="w-full block group">
      <div className="w-full">
        <Image
          src={img}
          alt={title}
          width={900}
          height={900}
          className="w-full rounded-lg group-hover:opacity-90 transition duration-300"
          priority
        />
        <p className="text-md md:text-xl font-semibold text-start mt-2 text-wrap">{title}</p>
        <div className="flex flex-wrap gap-1 md:gap-3 items-baseline mt-2">
          <p className="text-sm md:text-[15px] font-semibold">{category}</p>
          <span className="text-sm md:text-[15px] text-[#767676] font-semibold">{date}</span>
          <span className="text-sm md:text-[15px] text-[#767676] font-semibold">{readTime}</span>
        </div>
      </div>
    </Link>
  )
}
