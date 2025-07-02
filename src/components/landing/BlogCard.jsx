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

      <p className="text-lg md:text-3xl font-semibold text-start mt-2 text-wrap overscroll-auto">{title}</p>

      <div className="flex flex-wrap gap-3 items-baseline mt-4">
        <p className="text-sm md:text-[15px] font-semibold">{category}</p>
        <span className="text-sm md:text-[15px] text-[#767676] font-semibold">{date}</span>
        <span className="text-sm md:text-[15px] text-[#767676] font-semibold">{readTime}</span>
      </div>
    </div>
  )
}
