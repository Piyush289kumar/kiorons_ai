import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight } from "lucide-react";

export default function JobCard({ designation, area, type, apply_link }) {
  return (
    <div
      className="
        flex flex-col md:flex-row
        justify-between items-start md:items-center
        border-b border-white/10
        p-4 sm:p-5 gap-5 sm:gap-4
        max-w-4xl mx-auto
        transition-all duration-300 hover:border-white/70
        cursor-pointer
      "
    >
      {/* Left: Role & Area */}
      <div className="flex flex-col md:flex-row gap-2 sm:gap-4 items-start md:items-center w-full md:w-auto">
        <span className="text-lg sm:text-xl font-medium text-zinc-100">
          {designation}
        </span>
        <span className="!text-white/50 text-md font-normal sm:mx-5">
          {area}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-row flex-wrap justify-between md:justify-center items-center gap-2 sm:gap-4 w-full md:w-auto mt-0 md:mt-0">
        <span className="!text-white/50 text-md font-normal sm:mx-5">
          {type}
        </span>
        <Link
          href={apply_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className="mr-3 text-md font-medium">Apply</span>
          <GlassButton className="!px-3 !py-1">
            <ArrowUpRight className="w-3 h-3" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
