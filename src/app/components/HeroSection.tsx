import Image from "next/image";
import { useCallback } from "react";
import { ChevronDown, Play } from "lucide-react";
import GlassButton from "./GlassButton";
const SCROLL_TARGET_ID = "next-section";
export default function HeroSection() {
  const handleScroll = useCallback(() => {
    const el = document.getElementById(SCROLL_TARGET_ID);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    // <section className="relative w-full h-screen min-h-[520px] flex flex-col justify-center overflow-hidden bg-black font-gellix">
    //   {/* Background Image */}
    //   <Image
    //     src="/images/video.png"
    //     alt="Hero Background"
    //     fill
    //     className="object-cover w-full h-full"
    //     priority
    //     sizes="100vw"
    //   />
    //   {/* Content */}
    //   <div
    //     className="
    //       relative z-10 w-full max-w-7xl mx-auto
    //       flex flex-col lg:flex-row
    //       items-start lg:items-end
    //       justify-between
    //       px-4 sm:px-8 md:pt-32 md:pb-36
    //     "
    //   >
    //     {/* Headline */}
    //     <div className="flex flex-col max-w-xl w-full">
    //       <h1
    //         className="
    //           text-5xl sm:text-6xl md:text-7xl lg:text-8xl
    //           font-semibold font-gellix text-zinc-50
    //           leading-12 md:leading-none
    //           tracking-tight text-balance
    //           break-words
    //           max-w-full
    //         "
    //       >
    //         Reimagining the Future
    //       </h1>
    //     </div>
    //     {/* <div> — right-side actions or image etc (optional)</div> */}
    //   </div>
    //   {/* Watch Film Button Bar */}
    //   <div
    //     className="
    //       absolute left-1/2
    //       -translate-x-1/2
    //       flex items-center space-x-2 z-20
    //       bottom-24 sm:bottom-28 md:bottom-36
    //       px-3
    //     "
    //   >
    //     <span className="text-sm md:text-base text-zinc-50 font-semibold select-none whitespace-nowrap">
    //       Watch Film
    //     </span>
    //     <GlassButton
    //       aria-label="Play film"
    //       className="cursor-pointer !p-4 md:!p-5"
    //     >
    //       <Play className="w-4 h-4 md:w-6 md:h-6 text-blue-200" />
    //     </GlassButton>
    //   </div>
    //   {/* Scroll Down Cue */}
    //   <div
    //     className="
    //       hidden md:flex absolute left-1/2
    //       -translate-x-1/2
    //       items-center z-20
    //       bottom-5
    //     "
    //   >
    //     <GlassButton
    //       aria-label="Scroll down"
    //       className="!bg-transparent !px-3 py-4 cursor-pointer"
    //       style={{
    //         animation: "small-bounce 1.4s infinite cubic-bezier(0.6,0,0.4,1)",
    //       }}
    //       onClick={handleScroll}
    //     >
    //       <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-blue-200" />
    //     </GlassButton>
    //   </div>
    // </section>
    <section
      className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-black font-gellix"
      style={{
        backgroundImage: 'url("/images/video.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
        backgroundPosition: "top",
      }}
    >
      {/* Content */}
      <div
        className="
          relative z-10 w-full max-w-7xl mx-auto
          flex flex-col lg:flex-row
          items-start lg:items-end
          justify-between
          px-4 sm:px-8 md:pt-32 md:pb-36
        "
      >
        {/* Headline */}
        <div className="flex flex-col max-w-xl w-full">
          <h1
            className="
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-semibold font-gellix text-zinc-50
              leading-12 md:leading-none
              tracking-tight text-balance
              break-words
              max-w-full
            "
          >
            Reimagining the Future
          </h1>
        </div>
        {/* <div> — right-side actions or image etc (optional)</div> */}
      </div>
      {/* Scroll Down Cue */}
      <div
        className="
          hidden md:flex absolute left-1/2
          -translate-x-1/2
          items-center z-20
          bottom-5
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
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-blue-200" />
        </GlassButton>
      </div>
    </section>
  );
}
