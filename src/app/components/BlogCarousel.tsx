"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import NewsGridCard from "./NewsGridCard";
import truncateHtml from "../lib/truncateHtml";
import { useEffect, useState } from "react";
import {
  fetchNewsBlogs,
  fetchThinkBlogs,
  fetchStudieskBlogs,
  fetchResourcesBlogs,
} from "../lib/apiClient";
export default function BlogCarousel({
  category = "news", // news, think, studies, resources
  limit = 3,
}) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        let data;
        switch (category.toLowerCase()) {
          case "news":
            data = await fetchNewsBlogs(limit);
            break;
          case "think":
            data = await fetchThinkBlogs(limit);
            break;
          case "studies":
            data = await fetchStudieskBlogs(limit);
            break;
          case "resources":
            data = await fetchResourcesBlogs(limit);
            break;
          default:
            console.warn(`Unknown category: ${category}`);
            return;
        }
        setBlogs(data.data || []);
      } catch (err) {
        console.error(`Error fetching ${category} blogs:`, err);
      }
    }
    fetchBlogs();
  }, [category, limit]);
  return (
    <>
      {/*  Blog Header */}
      <section className="py-16 sm:py-32 font-gellix">
        <div className="mx-auto w-full px-4 xl:px-12 xl:max-w-8xl">
          <div className="space-y-12">
            <div className="flex gap-6 flex-row items-start lg:items-start justify-between font-gellix">
              <div className="max-w-xl space-y-12">
                <h2 className="font-medium text-2xl md:text-5xl tracking-tight capitalize">
                  {category || "Latest Blogs"}
                </h2>
              </div>
              <Link
                href="/blogs"
                className="flex items-center gap-1 group w-fit"
              >
                <span className="mt-3 text-md text-balance leading-6 transition-colors group-hover:text-blue-300">
                  View more
                </span>
                <ChevronRight className="w-4 h-4 mt-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-300" />
              </Link>
            </div>
          </div>
          <div className="pt-16">
            <div className="grid gap-10 sm:gap-6 !gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map((blog) => (
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
    </>
  );
}
