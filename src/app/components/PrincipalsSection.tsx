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
      className={`flex flex-col items-start gap-4 md:pr-10 px-5 group cursor-pointer my-16 ${className}`}
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

// Replace PrincipleBlock container and the vision section as shown below
export default function PrincipalsSection() {
  return (
    <>
      <section className="font-gellix mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-12 xl:max-w-7xl">
        <div className="w-full">
          <div className="space-y-10 mb-12 md:mb-0">
            <div>
              <div className="mono-tag flex items-center uppercase pl-1 text-sm">
                <span>Principles</span>
              </div>
            </div>
            <div>
              <h2 className="text-balance font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">
                Built Different,
              </h2>
              <h2 className="text-balance font-semibold text-4xl sm:text-5xl md:text-6xl tracking-tight">
                Built to Last
              </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-32 md:my-44 gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-12">
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

      <div className="group relative mb-24 md:mb-44 px-4 sm:px-6 md:px-8 xl:px-12 xl:max-w-8xl mx-auto">
        <div className="flex flex-col md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-0 md:flex-row py-10">
          {/* Left/Text Block */}
          <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
            <div className="flex flex-1 flex-col space-y-10 sm:space-y-16 my-auto px-0 sm:pl-4 md:pl-16">
              <div className="space-y-4 mt-24 md:mt-0">
                <h3 className="text-5xl md:text-6xl leading-0 md:leading-5 font-semibold">Our vision for</h3>
                <h3 className="text-5xl md:text-6xl font-semibold">the future</h3>
                <p className="text-md mt-6 md:w-2/3 max-w-full break-words">
                  {"To create the world's first truly intelligent operating system — an AI ecosystem built for the next generation of builders."}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <GlassButtonWithText
                  as="a"
                  href="#loadmore"
                  text="Read the Vision"
                  icon={<ArrowUpRight className="w-3 h-3" />}
                  iconPosition="right"
                  className="!px-4 !py-1"
                />
              </div>
            </div>
          </div>
          {/* Right/Image Block */}
          <div className="flex-1 w-full max-w-full md:max-w-3xl order-1 md:order-2 overflow-hidden rounded-xl">
            <div
              className="flex items-center w-full aspect-square text-4xl tracking-tight leading-[2.5rem] rounded-xl bg-[#0C0C0B] overflow-hidden shadow transition-transform duration-300 will-change-transform hover:scale-105 cursor-pointer"
              style={{
                backgroundImage: `url('/images/vision.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}