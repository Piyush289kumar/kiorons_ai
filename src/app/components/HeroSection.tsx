import Image from "next/image";
import { useCallback } from "react";
import { ChevronDown, Play } from "lucide-react";
import GlassButton from "./GlassButton";

const SCROLL_TARGET_ID = "next-section";

export default function HeroSection() {
  // Smooth scroll to target section
  const handleScroll = useCallback(() => {
    const el = document.getElementById(SCROLL_TARGET_ID);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="relative w-full h-screen min-h-[520px] flex flex-col justify-center overflow-hidden bg-black font-gellix">
      {/* Background Image */}
      <Image
        src="/images/video.png"
        alt="Hero Background"
        fill
        className="object-cover w-full h-full"
        priority
      />

      {/* Content container */}
      <div
        className="
        relative z-10 w-full md:w-10/12 mx-auto 
        flex flex-col lg:flex-row 
        items-end lg:items-end
        justify-between
        md:pt-32 md:pb-36
      "
      >
        {/* LEFT: Headline */}
        <div className="flex flex-col items-start max-w-xl">
          <h1
            className="
            text-6xl md:text-8xl lg:text-8xl
            font-semibold font-gellix text-zinc-50
             leading-16 md:leading-24 tracking-tight
            text-balance
          "
          >
            Reimagining the Future
          </h1>
        </div>
        {/* Right-side action/buttons could go here for large screens if needed */}
      </div>

      {/* WATCH FILM button bar — Bottom center, adapt for mobile */}
      <div
        className="
        absolute left-1/2 
        -translate-x-1/2 
        flex items-center space-x-2
        z-20
        bottom-28 md:bottom-40
        px-3
      "
      >
        <span className="text-sm md:text-md text-zinc-50 font-semibold select-none whitespace-nowrap">
          Watch Film
        </span>
        <GlassButton
          aria-label="Play film"
          className="cursor-pointer !p-4 md:!p-6"
        >
          <Play className="w-6 h-6 md:w-4 md:h-4 text-blue-200" />
        </GlassButton>
      </div>

      {/* SCROLL DOWN cue — bottom center, never overlaps Watch Film */}
      <div
        className="
        absolute left-1/2 
        -translate-x-1/2 
        flex items-center z-20
        bottom-5 sm:bottom-5
      "
      >
        <GlassButton
          aria-label="Scroll down"
          className="!bg-transparent !px-3 py-4 cursor-pointer"
          style={{
            animation: "small-bounce 1.4s infinite cubic-bezier(0.6,0,0.4,1)",
          }}
          onClick={handleScroll}
        >
          <ChevronDown className="w-3 h-3 text-blue-200" />
        </GlassButton>
      </div>
    </section>
  );
}
