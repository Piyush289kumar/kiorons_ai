import NewsFeaturedCard from "./NewsFeaturedCard";
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

export default function NewsSection() {
  return (
    <section className="py-16 sm:py-32 pt-44 sm:pt-52 font-gellix">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        {/* Header */}
        <div className="space-y-12">
          <div>
            <div className="mono-tag flex items-center gap-2 text-sm">
              <span>[</span> <span>What new</span> <span>]</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between font-gellix">
            <div className="max-w-xl space-y-12">
              <h2 className="text-balance text-3xl md:text-2xl lg:text-5xl tracking-tight">
                Latest news
              </h2>
            </div>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-12">
              <p className="mt-3 w-full max-w-md flex-1 text-balance leading-6 underline text-xs">
                View more
              </p>
            </div>
          </div>
        </div>
        {/* Featured Card */}
        {blogData.slice(0, 3).map((blog, idx) => (
          <NewsFeaturedCard
            key={blog.slug}
            {...blog}
            className={`
      ${idx === 0 ? "border-t border-zinc-700 mt-32" : ""}
      ${idx === 2 ? "border-b border-zinc-700" : ""}
    `}
          />
        ))}
        {/* News Card Grid */}
        <div className="pt-16">
          <div className="grid gap-10 sm:gap-6 !gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.slice(3, 6).map((blog, idx) => (
              <NewsGridCard key={blog.slug} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
