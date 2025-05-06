"use client";
import { DotPatternBackground } from "@/components/landing/DotPatternBackground";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center align-middle !gap-y-0 bg-black overflow-hidden">
      <DotPatternBackground />
      <div className="absolute z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-white text-8xl font-semibold leading-[88px] font-gellix">
          Just say
        </h1>
        <h1 className="font-semibold text-8xl leading-[88px] font-gellix gradient-text pt-4">
          what you want.
        </h1>
        <p className="text-white text-2xl font-normal leading-[88px] font-gellix py-2">
          From ‘I have an idea’ to ‘It’s live’ — in minutes.
        </p>
        <ShimmerButton className="px-5 py-2">Join Early</ShimmerButton>
      </div>
    </section>
  );
}
