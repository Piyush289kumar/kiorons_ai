// app/blog/[slug]/page.tsx
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

// Your API
const baseApi = "http://localhost:8000";

async function fetchBlogBySlug(slug: string) {
  const res = await fetch(`${baseApi}/api/blogs/${slug}`, {
    cache: "no-store", // optional for SSR freshness
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await fetchBlogBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <section className="w-full">
      <div className="max-w-full md:max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8 md:mb-16 text-center">
          <p className="text-sm font-medium mb-5 text-blue-400 uppercase">
            {blog.category || "Uncategorized"}
          </p>
          <h1 className="text-3xl md:text-6xl font-semibold mb-5">
            {blog.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
            <span>{blog.formatted_date}</span>
            <span>{blog.read_time} min read</span>
          </div>
        </div>

        {blog.image_url && (
          <Image
            src={blog.image_url}
            alt={blog.title}
            width={1600}
            height={900}
            className="rounded-lg w-full mb-6"
          />
        )}

        <article
          className="prose prose-lg prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog?.body || "" }}
        />

      
      </div>
    </section>
  );
}
