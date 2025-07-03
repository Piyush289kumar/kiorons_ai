'use client'

import Image from 'next/image'
import Link from 'next/link'

const aspectRatioClassMap = {
  '1/1': 'md:aspect-[1/1]',
  '16/9': 'md:aspect-[16/9]',
  '4/3': 'md:aspect-[4/3]',
  '3/2': 'md:aspect-[3/2]',
}

export default function BlogCard({
  img,
  title,
  category,
  date,
  readTime,
  slug,
  aspectRatio = '1/1',
}) {
  const mdAspectClass = aspectRatioClassMap[aspectRatio] || 'md:aspect-[1/1]'
  return (
    <Link href={`/blogs/${slug}`} className="w-full block group">
      <div className="w-full">
        {/* ✅ Aspect Ratio Box */}
        <div
          className={`aspect-[1/1] ${mdAspectClass} w-full bg-gray-100 rounded-lg overflow-hidden relative`}
        >
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover object-center transition duration-300 group-hover:opacity-90"
            priority
          />
        </div>
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
