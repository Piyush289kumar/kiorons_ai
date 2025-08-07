"use client";
import { ChevronRight } from "lucide-react";
import NewsFeaturedCard from "./NewsFeaturedCard";
import NewsGridCard from "./NewsGridCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchNewsBlogs, fetchThinkBlogs } from "../lib/apiClient";
import truncateHtml from "../lib/truncateHtml";
export default function NewsSection() {
  const [newsBlogs, setNewsBlogs] = useState([]);
  const [thinkBlogs, setThinkBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const LIMIT = 3;
    fetchNewsBlogs(LIMIT)
      .then((data) => {
        setNewsBlogs(data.data); // ✅ directly use array, not data.data
        // setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        // setLoading(false);
      });
    fetchThinkBlogs(LIMIT)
      .then((data) => {
        setThinkBlogs(data.data); // ✅ directly use array, not data.data
        // setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        // setLoading(false);
      });
  }, []);
  return (
    <section className="py-16 sm:py-32 sm:pt-52 font-gellix">
      <div className="mx-auto w-full px-4 xl:px-12 xl:max-w-8xl">
        {/*  News Header */}
        <div className="space-y-6 md:space-y-12">
          <div className="hidden md:">
            <div className="mono-tag flex items-center gap-2 text-sm">
              <span>[</span> <span>What new</span> <span>]</span>
            </div>
          </div>
          <div className="flex gap-6 flex-row items-start lg:items-start justify-between font-gellix">
            <div className="max-w-xl space-y-12">
              <h2 className="font-medium text-2xl md:text-5xl tracking-tight">
                Latest news
              </h2>
            </div>
            <Link href="/blogs" className="flex items-center gap-1 group w-fit">
              <span className="mt-3 text-md text-balance leading-6 transition-colors group-hover:text-blue-300">
                View more
              </span>
              <ChevronRight className="w-4 h-4 mt-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-300" />
            </Link>
          </div>
        </div>
        {/* Featured Card */}
        {newsBlogs.map((blog, idx) => (
          <NewsFeaturedCard
            key={blog.slug}
            slug={`/blogs/${blog.slug}`} // assuming blog route
            title={blog.title}
            body={truncateHtml(blog.body, 120)}
            img={blog.image_url || "/default-blog.jpg"} // fallback image
            date={blog.formatted_date}
            category={blog.category}
            className={`
      ${idx === 0 ? "border-t border-zinc-700 mt-10 md:mt-32" : ""}
      ${idx === 2 ? "border-b border-zinc-700" : ""}
    `}
          />
        ))}
        {/* Blog Card Grid */}
        {/*  Blog Header */}
        <div className="space-y-12 mt-10 md:mt-32">
          <div className="flex gap-6 flex-row items-start lg:items-start justify-between font-gellix">
            <div className="max-w-xl space-y-12">
              <h2 className="font-medium text-2xl md:text-5xl tracking-tight">
                Think
              </h2>
            </div>
            <Link href="/blogs" className="flex items-center gap-1 group w-fit">
              <span className="mt-3 text-md text-balance leading-6 transition-colors group-hover:text-blue-300">
                View more
              </span>
              <ChevronRight className="w-4 h-4 mt-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-300" />
            </Link>
          </div>
        </div>
        <div className="pt-16">
          <div className="grid gap-10 sm:gap-6 !gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {thinkBlogs.map((blog) => (
              <NewsGridCard
                key={blog.slug}
                slug={`/blogs/${blog.slug}`}
                img={blog.image_url || "/default-blog.jpg"}
                label={blog.category}
                date={blog.formatted_date}
                title={blog.title}
                body={truncateHtml(blog.body, 120)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
