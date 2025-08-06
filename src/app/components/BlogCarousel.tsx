import { ChevronRight } from "lucide-react";
import Link from "next/link";
import NewsGridCard from "./NewsGridCard";

const blogData = [
  // Big card (first)
  {
    slug: "/news/grok-4",
    img: "/images/blogs/news1.png",
    label: "kOne",
    date: "July 09, 2025",
    title: "kOne",
    summary:
      "kOne 4 is the most intelligent model in the world. It includes native tool use and real-time search integration, and is available now to SuperkOne and Premium+ subscriber tool use and real-time search integration, and is available now to SuperkOne and Premium+ subscriber ...",
    tag: "Company",
  },
  // Grid cards
  {
    slug: "/news/government",
    img: "/images/blogs/news2.png",
    label: "kOne for Government",
    date: "July 14, 2025",
    title: "Announcing kOne for Government",
    summary:
      "We are excited to announce kOne For Government – a suite of frontier AI products available first to United States Government customers.",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news3.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
    tag: "Company",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news3.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
    tag: "Company",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news3.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
    tag: "Company",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news1.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news1.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
  },
  {
    slug: "/news/grok-3",
    img: "/images/blogs/news1.png",
    label: "kOne 3",
    date: "Feb 19, 2025",
    title: "kOne 3 Beta — The Age of Reasoning Agents",
    summary:
      "We are thrilled to unveil kOne 3, our most advanced model yet, blending superior reasoning with extensive pretraining knowledge.",
  },
  // ...add more grid cards as needed
];

export default function BlogCarousel({
  heading = "Latest Blogs",
  apiUrl = "#",
  limit = 3,
}) {
  return (
    <>
      {/*  Blog Header */}

      <section className="py-16 sm:py-32 font-gellix">
        <div className="mx-auto w-full px-4 xl:px-12 xl:max-w-8xl">
          <div className="space-y-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between font-gellix">
              <div className="max-w-xl space-y-12">
                <h2 className="text-balance font-semibold text-3xl md:text-2xl lg:text-4xl tracking-tight">
                  {heading || "Latest Blogs"}
                </h2>
              </div>
              <Link
                href="/blogs"
                className="flex items-center gap-1 group w-fit"
              >
                <span className="mt-3 text-xs text-balance leading-6 transition-colors group-hover:text-blue-300">
                  View more
                </span>
                <ChevronRight className="w-4 h-4 mt-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-300" />
              </Link>
            </div>
          </div>
          <div className="pt-16">
            <div className="grid gap-10 sm:gap-6 !gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
              {blogData.slice(0, limit).map((blog, idx) => (
                <NewsGridCard key={blog.slug} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
