// src/components/NewsFeaturedCard.tsx
import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight } from "lucide-react";
// If you want, import NewsCardImageTitle from earlier!
export interface NewsFeaturedCardProps {
  slug: string;
  img: string;
  date: string;
  title: string;
  body: string;
  category?: string;
  className?: string;
  reverse?: boolean;
}
export default function NewsFeaturedCard({
  slug,
  img,
  date,
  title,
  body,
  category,
  className = "",
  reverse = false,
}: NewsFeaturedCardProps) {
  return (
    <div
      className={`group relative !border-b !border-t border-zinc-900 ${className}`}
    >
      <div
        className={`
        flex flex-col gap-10 py-12 md:gap-12
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
      >
        {/* Left/Text Block */}
        <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
          {/* Date above block */}
          <div>
            <p className="mono-tag text-xs leading-6 uppercase">{date}</p>
          </div>
          {/* Main content */}
          <div className="flex flex-1 flex-col space-y-6">
            <div className="block grow space-y-4 pr-20">
              <Link href={slug}>
                <div className="absolute inset-0" />
                <h3 className="!text-4xl leading-10 font-semibold">{title}</h3>
              </Link>
              <p className="grow text-balance text-sm !text-zinc-200 mt-12">
                {body}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                {category && (
                  <span className="mono-tag text-xs uppercase">{category}</span>
                )}
              </div>
              <div>
                Read
                <GlassButton as="a" href={slug} className="!px-3 !py-0 mx-2 group-hover:scale-110 transition-all duration-500">
                  <ArrowUpRight className="w-3 h-3" />
                </GlassButton>
              </div>
            </div>
          </div>
        </div>
        {/* Right/Image Block */}
        <div className="flex-1 xl:max-w-[600px] order-1 md:order-2 overflow-hidden rounded-sm">
          <div
            className="
              flex items-center w-full aspect-[16/10] text-4xl tracking-tight leading-[2.5rem] rounded-sm bg-[#0C0C0B] overflow-hidden shadow
               transition-transform duration-300 will-change-transform group-hover:scale-105 cursor-pointer"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover", // Ensures the image covers the box
              backgroundPosition: "center", // Perfectly centers the image
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
