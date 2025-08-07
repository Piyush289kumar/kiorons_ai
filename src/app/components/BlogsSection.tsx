import { ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import NewsFeaturedCard from "./NewsFeaturedCard";
import NewsGridCard from "./NewsGridCard";
import Link from "next/link";
import GlassButton from "./GlassButton";
import GlassButtonWithText from "./GlassButtonWithText";

const blogData = [
  // Big card (first)
  {
    slug: "/news/grok-4",
    img: "/images/blogs/news1.png",
    label: "kOne Beta 3",
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

export default function BlogsSection() {
  return (
    <section className="py-16 sm:py-0 pt-24 sm:pt-44 font-gellix">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        {/*  News Header */}
        <div className="max-w-xl space-y-12">
          <h2 className="text-balance font-medium text-3xl md:text-2xl lg:text-4xl tracking-tight">
            {"Latest Blogs"}
          </h2>
        </div>

        {/* Featured Card */}
        {blogData.slice(0, 1).map((blog, idx) => (
          <NewsFeaturedCard
            key={blog.slug}
            {...blog}
            reverse={idx % 2 === 1}
            className={`
      ${idx === 0 ? "border-t border-zinc-700 mt-10 md:mt-32" : ""}
      ${idx === 2 ? "border-b border-zinc-700" : ""}
    `}
          />
        ))}
        {/* Blog Card Grid */}

        <div className="pt-16">
          <div className="grid gap-10 sm:gap-6 !gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.map((blog, idx) => (
              <NewsGridCard key={blog.slug} {...blog} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center my-16">
          <GlassButtonWithText
            as="a"
            href="#loadmore"
            text="Load More"
            icon={<ChevronDown className="w-3 h-3" />}
            iconPosition="right"
            className="!px-3 !py-0"
          />
        </div>
      </div>
    </section>
  );
}
