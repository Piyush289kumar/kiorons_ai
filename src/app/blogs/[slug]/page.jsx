import React from 'react'
import Image from 'next/image'
import BlogsSlider from '@/components/landing/BlogsSlider'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import Footer from '@/app/layouts/Footer'
import CTA from '@/components/landing/CTA'

export async function generateMetadata({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${params.slug}`, {
    cache: 'no-store',
  })
  const blog = await res.json()

  return {
    title: `${blog.meta_title || blog.title} | Kiorons`,
    description: blog.meta_description,
  }
}

export default async function BlogDetailPage({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${params.slug}`, {
    cache: 'no-store',
  })

  if (!res.ok) return <div className="text-red-500">Blog not found.</div>

  const blog = await res.json()

  return (
    <article className="flex flex-col gap-2xl @md:gap-3xl !font-gellix">
      <div className="@container w-full my-20">
        <div className="max-w-container mb-md">
          <div className="mb-8 md:mb-16 !text-center">
            <p className="!text-sm !font-medium mb-5">{blog.category || 'Uncategorized'}</p>
            <h1 className="!text-3xl md:!text-6xl !font-semibold !mb-5">{blog.title}</h1>

            <div className="!flex !flex-wrap !justify-center !gap-2 !text-sm">
              <span>{blog.formatted_date}</span>
              <span>{blog.read_time}</span>
            </div>
          </div>

          <Image
            src={blog.image_url}
            alt={blog.title}
            width={5000}
            height={5000}
            className="rounded-[0.4rem] md:!rounded-sm mx-auto !w-full md:!w-10/12"
          />

          <article
            className="!prose !prose-lg !prose-invert !w-full md:!w-8/12 mx-auto my-10 md:my-20"
            dangerouslySetInnerHTML={{ __html: blog?.body || '' }}
          />

          {/* Optional gallery images */}
          {blog.gallery_images?.length > 0 && (
            <div className="!mt-10 !grid !grid-cols-2 !md:grid-cols-3 gap-4">
              {blog.gallery_images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={300}
                  className="!rounded"
                />
              ))}
            </div>
          )}
          <BlogsSlider
            apiRoute={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/build-recent-blogs`}
            heading="Build"
            viewAllLink="/blogs"
          />
        </div>
      </div>

      <CTA heading="Join kOne waitlist." btnText="Visit kOne" href="/kone" />
    </article>
  )
}
