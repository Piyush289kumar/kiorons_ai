// components/BlogCard.jsx
import Image from 'next/image'

export default function BlogCard({ img, title, category, date, readTime }) {
  return (
    <div className="w-full">
      <Image
        src={img}
        alt={title}
        width={900}
        height={900}
        className="w-full rounded-none"
        priority
      />

      <p className="text-base md:text-2xl font-semibold text-start mt-2">{title}</p>

      <div className="flex flex-wrap gap-3 items-baseline mt-4">
        <p className="text-md md:text-lg font-semibold">{category}</p>
        <span className="text-sm text-[#767676]">{date}</span>
        <span className="text-sm text-[#767676]">{readTime}</span>
      </div>
    </div>
  )
}
