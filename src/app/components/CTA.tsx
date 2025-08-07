import GlassButton from "./GlassButton";

export default function CTA() {
  return (
    <div
      className="
        bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg rounded-3xl
        transition-all border border-white/10 py-10 md:py-14 my-10 mx-auto
      "
    >
      <div className="w-full flex flex-col items-center text-center px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-50 mb-1">
          The world’s first
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-zinc-50 mb-4">
          AI ecosystem
        </h2>
        <div className="mt-10">
          <GlassButton className="px-8 py-3 text-base md:text-lg">
            View Manifesto
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
