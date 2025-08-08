import Image from "next/image";
import GlassButton from "./GlassButton";

export default function KoneSection() {
  return (
    <section className="font-gellix w-full py-16 md:py-20 bg-transparent mx-auto flex justify-center items-center">
      <div
        className="
          relative flex flex-col items-center justify-start w-full mx-auto
          h-2/3 md:h-screen bg-kone-mobile
        "
      >
        {/* Top Black Blur */}
        <div className="absolute inset-x-0 top-0 h-[0%] md:h-[10%] bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />
        {/* Bottom Black Blur */}
        <div className="absolute inset-x-0 bottom-0 h-[0%] md:h-[10%] bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-30 flex flex-col items-center justify-center pt-24 md:pt-12">
          <p className="text-lg md:text-2xl font-medium text-zinc-50 mb-5 md:mb-2">
            Introducing
          </p>
          <h2 className="text-5xl md:text-7xl font-semibold text-zinc-50 mb-8 max-w-2xl text-center break-words">
            The Future of Building
          </h2>
          <div className="mt-8 md:mt-0 hidden md:block">
            <GlassButton className="px-6 py-2 text-sm font-normal">
              Learn more
            </GlassButton>
          </div>
        </div>
      </div>
    </section>
  );
}
