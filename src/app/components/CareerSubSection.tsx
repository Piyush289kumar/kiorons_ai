import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Cpu,
  PieChart,
} from "lucide-react";
import React from "react";
import GlassButtonWithText from "./GlassButtonWithText";

// Reusable PrincipleBlock component
function PrincipleBlock({ Icon, ariaLabel, heading, summary, className = "" }) {
  return (
    <div
      className={`flex flex-col items-start gap-4 pr-10 group cursor-pointer ${className}`}
    >
      <span className="mt-1 mb-16">
        <Icon aria-label={ariaLabel} className="w-10 h-10" />
      </span>
      <div>
        <h3 className="text-3xl font-medium mb-8">{heading}</h3>
        <p className="text-md !text-white/50 group-hover:!text-white transition-all duration-500">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default function CareerSubSection() {
  return (
    <section className=" font-gellix mx-auto w-full px-4 xl:px-12 xl:max-w-7xl pt-24">
      <div className="w-full">
        <div className="space-y-10">
          <div>
            <div className="mono-tag flex items-center uppercase pl-1 text-sm">
              <span>Career</span>
            </div>
          </div>
          <div>
            <h2 className="text-balance font-semibold text-6xl tracking-tight">
              The Code
            </h2>
            <h2 className="text-balance font-semibold text-6xl tracking-tight">
              Beneath It All.
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row my-44 mt-32 space-y-12 lg:space-y-0 lg:space-x-12">
          <PrincipleBlock
            Icon={Cpu}
            ariaLabel="CPU Icon"
            heading="Build with Intent"
            summary="We build what matters — with clarity, conviction, and craft. Every decision is deliberate. Every product is made to last."
            className="border-r border-zinc-900"
          />
          <PrincipleBlock
            Icon={PieChart}
            ariaLabel="Pie Chart Icon"
            heading="Beauty is Built-In"
            summary="No handoffs. No silos. From sketch to system, we think and build as one. Great design isn’t an afterthought — it’s engineered into the core."
            className="border-r border-zinc-900"
          />
          <PrincipleBlock
            Icon={Activity}
            ariaLabel="Activity Icon"
            heading="Always Forward"
            summary="Progress is our habit. We iterate, refine, and reimagine — constantly. We’re not trying to catch up. We’re here to define what’s next."
          />
        </div>
      </div>
    </section>
  );
}
