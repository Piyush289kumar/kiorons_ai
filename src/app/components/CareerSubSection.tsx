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
      <section className="font-gellix mx-auto w-full my-24 md:my-44 px-4 sm:px-6 md:px-8 xl:px-12 xl:max-w-7xl">
            <div className="w-full">
              <div className="space-y-12 md:mb-0">
                <div>
                  <div className="mono-tag flex items-center uppercase pl-1 text-sm">
                    <span>Principles</span>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-5xl md:text-6xl tracking-tight">
                    Built Different,
                  </h2>
                  <h2 className="font-semibold text-5xl md:text-6xl tracking-tight">
                    Built to Last
                  </h2>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row my-5 md:my-44 gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-12">
                <PrincipleBlock
                  Icon={Cpu}
                  ariaLabel="CPU Icon"
                  heading="First Principles Thinking"
                  summary="We break everything down to its atomic truth—no assumptions, no fluff. Just logic, clarity, and sharp execution."
                  className="md:border-r border-zinc-900"
                />
                <PrincipleBlock
                  Icon={PieChart}
                  ariaLabel="Pie Chart Icon"
                  heading="Data-Driven Decisions"
                  summary="Every action we take is powered by reliable, actionable data—not guesswork. This keeps us sharp and focused."
                  className="md:border-r border-zinc-900"
                />
                <PrincipleBlock
                  Icon={Activity}
                  ariaLabel="Activity Icon"
                  heading="Relentless Execution"
                  summary="We value speed with precision. Our teams turn strategy into results, consistently and efficiently."
                />
              </div>
            </div>
          </section>
  );
}
