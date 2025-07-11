'use client'

import Image from 'next/image'
import Link from 'next/link'

const aspectRatioClassMap = {
  '1/1': 'md:aspect-[1/1]',
  '16/9': 'md:aspect-[16/9]',
  '4/3': 'md:aspect-[4/3]',
  '3/2': 'md:aspect-[3/2]',
}

export default function SmallBlogCard({
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
    <>
      <div className="group relative">
        <div className="group flex w-full items-center overflow-hidden">
          <div className="relative aspect-square flex-[0_0_7.5rem] md:flex-[0_0_11.563rem]">
            <div
              className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
              style={{ aspectRatio: '1/1' }}
            ></div>
            <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_video]:absolute [&amp;_video]:top-1/2 [&amp;_video]:translate-y-[-50%] [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.04] group-hover:[&amp;_video]:scale-[1.04]">
              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <div className="h-full w-full">
                  <div className="relative h-full w-full overflow-hidden rounded-none aspect-1/1 bg-surface-loading">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-center text-transparent"
                      sizes="(min-width: 768px) 11.563rem, 7.5rem"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            aria-label="Preparing for future AI risks in biology - Safety - Jun 18, 2025"
            className="transition ease-curve-a duration-250 pl-xs @lg:pl-md text-primary-100 @xl:pr-xl flex-auto after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
            data-analytics="2-0-home-card-grid-latest-news-preparing-for-future-ai-capabilities-in-biology"
            id="7jqGtVlmEffaXqxdjhsBHJ"
            href={`/blogs/${slug}`}
          >
            <div>
              <div className="mb-2xs text-h5">{title}</div>
              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap">
                <span className="text-nowrap">{category}</span>
                <span className="gap-x-3xs gap-y-4xs flex flex-wrap">
                  <time className="text-primary-44 text-nowrap" dateTime="2025-06-18T10:00">
                    {date}
                  </time>
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
