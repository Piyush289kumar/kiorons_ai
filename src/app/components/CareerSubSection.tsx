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
    <div className={`flex flex-col items-start gap-4 pr-10 ${className}`}>
      <span className="mt-1 mb-16">
        <Icon aria-label={ariaLabel} className="w-12 h-12" />
      </span>
      <div>
        <h3 className="text-3xl font-semibold mb-8">{heading}</h3>
        <p className="text-lg">{summary}</p>
      </div>
    </div>
  );
}
export default function CareerSubSection() {
  return (
    <section className="py-16 sm:py-32 pt-44 sm:pt-52 font-gellix w-full md:w-10/12 mx-auto">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="space-y-12">
          {/* <div>
            <div className="mono-tag flex items-center pl-1 text-sm">
              <span>Principles</span>
            </div>
          </div> */}
          <div>
            <h2 className="text-balance font-semibold text-3xl md:text-2xl lg:text-5xl tracking-tight">
              The Code
            </h2>
            <h2 className="text-balance font-semibold text-3xl md:text-2xl lg:text-5xl tracking-tight">
              Beneath It All.
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-24 space-y-12 lg:space-y-0 lg:space-x-12">
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
