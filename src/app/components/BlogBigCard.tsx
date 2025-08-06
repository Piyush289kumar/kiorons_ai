// src/components/BlogCard.tsx
import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  timespan: string;
  read_time: string;
  title: string;
  body: string;
  slug: string;
  img: string;
  big?: boolean;
}

export default function BlogBigCard({
  timespan,
  read_time,
  title,
  body,
  slug,
  img,
  big = false,
}: BlogCardProps) {
  return (
    <Link
      href={slug}
      className={`
        border-t border-b border-white/10
        py-10
        font-gellix group
        w-full max-w-7xl
        mx-auto
        flex flex-col md:flex-row items-stretch
        overflow-hidden
        shadow-lg
        transition-all duration-300
        hover:scale-[1.015] hover:shadow-2xl
        relative
        cursor-pointer
        min-h-[25rem]
      `}
    >
      {/* 1: Left - Read Time */}
      <div
        className="
        flex flex-col items-start justify-start
        min-w-[7rem]
      "
      >
        <div className="text-xs text-zinc-400 mb-2 pt-3">{timespan}</div>
      </div>

      {/* 2: Center - Title */}
      <div className="flex flex-col justify-start flex-1 px-8">
        <h3 className="font-bold text-zinc-50 text-2xl md:text-2xl mb-6">
          {title}
        </h3>

        <p className="!text-zinc-500 font-medium text-sm mb-6 w-2/3 text-justify">
          {body.length > 200 ? body.slice(0, 200) + "..." : body}
        </p>
      </div>

      {/* 3: Right - Image */}

      <div className="flex-1 xl:max-w-[500px] order-1 md:order-2">
      <div
        className="
          flex duration-150 items-center 
          w-full aspect-[16/10] 
          bg-[#0C0C0B]
          text-4xl tracking-tight leading-[2.5rem]
          rounded-xl overflow-hidden
          shadow
          whitespace-pre-wrap break-words
        "
        style={{
          backgroundImage: `${img}`,
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex bg-background/90 px-4 py-2 rounded-sm">
            <h2 className="uppercase text-balance text-primary text-2xl font-semibold">
              Grok 4
            </h2>
          </div>
        </div>
      </div>
    </div>

      {/* Bottom center: Read more CTA */}
      <div
        className="
        absolute left-1/2 bottom-5
        -translate-x-1/2
        flex items-center gap-2
        z-20
      "
      >
        <span className="text-zinc-200 text-sm font-medium">Read more</span>
        <GlassButton
          aria-label="Read More"
          href={slug}
          className="cursor-pointer !p-3"
          tabIndex={-1}
        >
          <ArrowUpRight className="w-4 h-4 text-blue-200" />
        </GlassButton>
      </div>
    </Link>
  );
}
