// src/components/BlogCard.tsx
import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight, ChevronRight } from "lucide-react";

interface BlogCardProps {
  timespan: string;
  read_time: string;
  title: string;
  slug: string;
  img: string;
  big?: boolean;
}

export default function BlogCardInnerText({
  timespan,
  read_time,
  title,
  slug,
  img,
  big = false,
}: BlogCardProps) {
  return (
    <div
      className={`
        font-gellix 
        relative rounded-2xl overflow-hidden shadow
        flex items-end
        ${big ? "h-96" : "h-44"}
        transition-all duration-300
        cursor-pointer
        bg-cover bg-center bg-no-repeat
        group
      `}
      style={{
        backgroundImage: `url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glass overlay for subtlety & readability */}
      <div className="absolute inset-0 bg-[#232323]/50 z-0" />

      {/* Top left: timespan & read_time */}
      <div className="absolute top-4 left-4 z-10 flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-xs font-medium text-zinc-50">
            {timespan}
          </span>
          <GlassButton className="px-3 py-1 text-xs font-medium">
            {read_time} min
          </GlassButton>
        </div>
      </div>

      {/* Bottom row: title (left), read more + arrow (right) */}
      <div className="relative z-10 w-full flex items-end justify-between px-6 pb-6">
        <h3
          className={`font-semibold text-zinc-50 ${
            big ? "text-2xl" : "text-base"
          } max-w-[70%]`}
        >
          {title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-zinc-100 text-xs font-medium hidden sm:inline">
            Read More
          </span>
          <GlassButton
            aria-label="Read More"
            href={slug}
            className="cursor-pointer !p-2 md:!p-3"
          >
            <ArrowUpRight className="w-6 h-6 md:w-4 md:h-4 text-blue-200" />
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
