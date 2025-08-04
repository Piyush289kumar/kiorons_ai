import BlogCardInnerText from "./BlogCardInnerText";

const blogs = [
  {
    timespan: "Aug 4, 2025",
    read_time: "6",
    title: "Meet kOne: The OS for Web Creators",
    slug: "/blog/kone-os",
    img: "/images/blogs/news1.png",
  },
  {
    timespan: "Aug 1, 2025",
    read_time: "3",
    title: "AI Product Design: Our Invisible Approach",
    slug: "/blog/ai-product-design",
    img: "/images/blogs/news2.png",
  },
  {
    timespan: "July 29, 2025",
    read_time: "5",
    title: "Why Human-First Tech Matters",
    slug: "/blog/human-first-tech",
    img: "/images/blogs/news3.png",
  },
];

export default function NewsSection() {
  return (
    <section className="font-gellix w-full max-w-7xl px-4 py-20 mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Big Blog (70%) */}
        <div className="w-full md:w-[70%]">
          <BlogCardInnerText {...blogs[0]} big />
        </div>
        {/* Right: Two Stacked Blogs (30%) */}
        <div className="w-full md:w-[30%] flex flex-col gap-8">
          <BlogCardInnerText {...blogs[1]} />
          <BlogCardInnerText {...blogs[2]} />
        </div>
      </div>
    </section>
  );
}
