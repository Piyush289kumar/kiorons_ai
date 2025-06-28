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

      <p className="text-base md:text-xl font-semibold text-start mt-2 h-14 overscroll-auto">{title}</p>

      <div className="flex flex-wrap gap-3 items-baseline mt-4">
        <p className="text-[13px] font-semibold">{category}</p>
        <span className="text-[13px] text-[#767676]">{date}</span>
        <span className="text-[13px] text-[#767676]">{readTime}</span>
      </div>
    </div>
  )
}
