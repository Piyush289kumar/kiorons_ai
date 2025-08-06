// src/components/NewsGridCard.tsx
import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight } from "lucide-react";
export interface NewsGridCardProps {
  slug: string;
  img: string;
  label: string;
  date: string;
  title: string;
  summary: string;
}
export default function NewsGridCard({
  slug,
  img,
  label,
  date,
  title,
  summary,
}: NewsGridCardProps) {
  return (
    <div className="flex flex-col group relative">
      <div className="w-full aspect-square mb-4">
        <div className="relative group w-full aspect-[1/1] rounded-xl overflow-hidden">
          {/* Scalable Background Image */}
          <div
            className="
      absolute inset-0
      transition-transform duration-300
      bg-cover bg-center bg-no-repeat
      will-change-transform
      group-hover:scale-105
      z-0
    "
            style={{
              backgroundImage: `url(${img})`,
            }}
          />
        </div>
      </div>
      <div className="block mt-0 pb-7">
        <Link href={slug} className="absolute inset-0 z-10" tabIndex={-1} />
        <h4 className="text-2xl font-medium leading-8 pr-6">{title}</h4>
        {/* <p className="mt-2 leading-6 text-secondary line-clamp-3">{summary}</p> */}
      </div>
      <div className="flex justify-start items-center gap-3 mt-auto pt-0 z-20 relative">
        <span className="mono-tag text-sm font-normal uppercase">{label}</span>
        <span className="!text-white/60 mono-tag text-sm font-normal uppercase">{date}</span>
      </div>
    </div>
  );
}
