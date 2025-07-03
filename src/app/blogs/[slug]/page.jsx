import React from 'react'
import Image from 'next/image'
import BlogsSlider from '@/components/landing/BlogsSlider'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import Footer from '@/app/layouts/Footer'

export async function generateMetadata({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${params.slug}`,{
    cache: 'no-store',
  })
  const blog = await res.json()

  return {
    title: `${blog.meta_title || blog.title} | Kiorons`,
    description: blog.meta_description,
  }
}

export default async function BlogDetailPage({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${params.slug}`,{
    cache: 'no-store',
  })

  if (!res.ok) return <div className="text-red-500">Blog not found.</div>

  const blog = await res.json()

  return (
    <section className="w-full">
      <div className="max-w-full md:max-w-7xl mx-auto px-4 py-10 mt-[5%]">
        <div className="mb-8 md:mb-16 text-center">
          <p className="text-sm font-medium mb-5">{blog.category || 'Uncategorized'}</p>
          <h1 className="text-3xl md:text-6xl font-semibold mb-5">{blog.title}</h1>

          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span>{blog.formatted_date}</span>
            <span>{blog.read_time}</span>
          </div>
        </div>

        <Image
          src={blog.image_url}
          alt={blog.title}
          width={5000}
          height={5000}
          className="rounded-lg w-full mb-6"
        />

        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.body }} />

        {/* Optional gallery images */}
        {blog.gallery_images?.length > 0 && (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
            {blog.gallery_images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                width={400}
                height={300}
                className="rounded"
              />
            ))}
          </div>
        )}
        <BlogsSlider
          apiRoute={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/build-recent-blogs`}
          heading="Thinks"
          viewAllLink="/blogs/thinks"
        />

        {/* CTA */}
        <section>
          <div className="p-8 md:p-28 bg-[#151515] text-center mt-32">
            <h4 className=" text-3xl md:text-5xl font-semibold tracking-tight mb-3 md:mb-8">
              Join kOne waitlist.
            </h4>
            <LandingPageButton text="Visit kOne" color="white" />
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
