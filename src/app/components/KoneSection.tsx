import Image from "next/image";
import GlassButton from "./GlassButton";

export default function KoneSection() {
  return (
    <section className="font-gellix w-full py-20 bg-transparent mx-auto flex justify-center items-center">
      <div
        className="relative flex flex-col items-center justify-start w-full mx-auto h-[85vh] shadow-lg md:py-12 text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/svg/chip.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // or "contain" if you want the SVG to be fully visible
          backgroundPosition: "bottom",
        }}
      >
        {/* Top Black Blur */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />

        {/* Bottom Black Blur */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-20 pointer-events-none" />

        {/* Content starting from top */}
        <div className="relative z-30 flex flex-col items-center !justify-center">
          <p className="text-xl font-medium text-zinc-50 mb-2">Introducing</p>
          <h2 className="text-5xl font-medium text-zinc-50 mb-8">
            The Future of Building
          </h2>
          <GlassButton className="mt-2 !py-2 text-xs font-normal">
            Learn more
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
