'use client'

import Image from 'next/image'
import Link from 'next/link'

const aspectRatioClassMap = {
  '1/1': 'md:aspect-[1/1]',
  '16/9': 'md:aspect-[16/9]',
  '4/3': 'md:aspect-[4/3]',
  '3/2': 'md:aspect-[3/2]',
}

export default function LargeBlogCard({
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
      <div className="mb-md @md:mb-0 relative min-w-1/2">
        <div className="group relative">
          <div
            className="bg-primary-12 absolute left-0 top-0 w-full rounded-md"
            style={{ aspectRatio: '4/3' }}
          ></div>
          <div className="ease-curve-c duration-normal max-w-container-desktop relative mx-auto overflow-hidden transition-opacity rounded-md [&amp;_img]:scale-100 [&amp;_img]:transform-gpu [&amp;_video]:transform-gpu [&amp;_img]:transition-transform [&amp;_img]:duration-300 [&amp;_video]:transition-transform [&amp;_video]:duration-200 group-hover:[&amp;_img]:scale-[1.025] group-hover:[&amp;_video]:scale-[1.025]">
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <div className="h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-none aspect-4/3 bg-surface-loading">
                  <Image
                    src={img}
                    alt={title}
                    data-nosnippet="true"
                    loading="lazy"
                    decoding="async"
                    fill // enables `position: absolute` + `height/width 100%` automatically
                    sizes="(min-width: 1728px) 1728px, 100vw"
                    className="object-cover object-center !absolute !inset-0 !h-full !w-full text-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            aria-label="Toward understanding and preventing misalignment generalization - Publication - Jun 18, 2025"
            className="transition ease-curve-a duration-250 pt-2xs duration-normal ease-curve-d block w-full transition-[opacity,background] after:absolute after:inset-0 after:content-[&#x27;&#x27;]"
            data-analytics="emergent-misalignment"
            id="5PjPj89RGyoHWvnc5t5Bwn"
            href={`/blogs/${slug}`}
          >
            <div className="text-primary-100 relative w-full">
              <div className="mb-2xs text-h4 @md:pr-md">{title}</div>
              <p className="text-meta gap-x-3xs gap-y-4xs flex flex-wrap @md:pr-3xs">
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
