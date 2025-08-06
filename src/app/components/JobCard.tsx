import Link from "next/link";
import GlassButton from "./GlassButton";
import { ArrowUpRight } from "lucide-react";

interface JobCardProps {
  designation: string;
  area: string;
  type: string;
  apply_link: string;
}

export default function JobCard({
  designation,
  area,
  type,
  apply_link,
}: JobCardProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 p-5 gap-4 max-w-4xl mx-auto transition-all duration-300 hover:border-white/70 cursor-pointer">
      {/* Left: Role & Area */}
      <div className="flex gap-4 items-center">
        <span className="text-xl font-medium text-zinc-100">
          {designation}
        </span>
        <span className="!text-white/50 text-md font-normal mx-5">{area}</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <span className="!text-white/50 text-md font-normal mx-5">{type}</span>
        <Link href={apply_link} target="_blank" rel="noopener noreferrer">
          <span className="mr-3 text-md font-medium">Apply</span>
          <GlassButton className="!px-3 !py-1">
            <ArrowUpRight className="w-3 h-3" />
          </GlassButton>
        </Link>
      </div>
    </div>
  );
}
