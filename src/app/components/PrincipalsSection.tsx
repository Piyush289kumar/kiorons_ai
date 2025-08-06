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
export default function PrincipalsSection() {
  return (
    <>
      <section className=" font-gellix mx-auto w-full px-4 xl:px-12 xl:max-w-7xl">
        <div className="w-full">
          <div className="space-y-10">
            <div>
              <div className="mono-tag flex items-center uppercase pl-1 text-sm">
                <span>Principles</span>
              </div>
            </div>
            <div>
              <h2 className="text-balance font-semibold text-6xl tracking-tight">
                Built Different,
              </h2>
              <h2 className="text-balance font-semibold text-6xl tracking-tight">
                Built to Last
              </h2>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row my-44 space-y-12 lg:space-y-0 lg:space-x-12">
            <PrincipleBlock
              Icon={Cpu}
              ariaLabel="CPU Icon"
              heading="First Principles Thinking"
              summary="We break everything down to its atomic truth—no assumptions, no fluff. Just logic, clarity, and sharp execution."
              className="border-r border-zinc-900"
            />
            <PrincipleBlock
              Icon={PieChart}
              ariaLabel="Pie Chart Icon"
              heading="Data-Driven Decisions"
              summary="Every action we take is powered by reliable, actionable data—not guesswork. This keeps us sharp and focused."
              className="border-r border-zinc-900"
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

      <div className={`group relative mb-44 px-4 xl:px-12 xl:max-w-8xl`}>
        <div
          className={`
        flex flex-col gap-10 py-24 md:gap-12 md:flex-row
      `}
        >
          {/* Left/Text Block */}
          <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
            {/* Main content */}
            <div className="flex flex-1 flex-col space-y-24 self-start h-2/3 my-auto pl-16">
              <div className="block grow space-y-4">
                <div className="absolute inset-0" />
                <h3 className="!text-6xl leading-20 font-semibold">
                  Our vision for
                </h3>
                <h3 className="!text-6xl leading-0 font-semibold">
                  the future
                </h3>
                <p className="grow text-balance text-md mt-18 md:w-2/3">
                  {
                    "To create the world's first truly intelligent operating system — an AI ecosystem built for the next generation of builders."
                  }
                </p>
              </div>
              <div className="flex items-center justify-between gap-3">
                <GlassButtonWithText
                  as="a"
                  href="#loadmore"
                  text="Read the Vision"
                  icon={<ArrowUpRight className="w-3 h-3" />}
                  iconPosition="right"
                  className="!px-3 !py-0"
                />
              </div>
            </div>
          </div>
          {/* Right/Image Block */}
          <div className="flex-1 w-[800px] order-1 md:order-2 overflow-hidden rounded-xl">
            <div
              className="
              flex items-center w-full aspect-[1/1] text-4xl tracking-tight leading-[2.5rem] rounded-xl bg-[#0C0C0B] overflow-hidden shadow
               transition-transform duration-300 will-change-transform hover:scale-105 cursor-pointer"
              style={{
                backgroundImage: `url('/images/vision.png')`,
                backgroundSize: "cover", // Ensures the image covers the box
                backgroundPosition: "center", // Perfectly centers the image
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
