import GlassButton from "./GlassButton";
export default function CTA() {
  return (
    <div
      className="bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg rounded-3xl transition-all border border-white/10 py-12 my-10
      "
    >
      {/* Left Part */}
      <div className="w-full md:w-2/3 mx-auto flex flex-col items-center">
        <h2 className="text-5xl font-semibold text-zinc-50 mb-1">
          The world’s first
        </h2>
        <h2 className="text-5xl font-semibold text-zinc-50 mb-2">
          AI ecosystem
        </h2>
        <GlassButton className="mt-16">View Manifesto</GlassButton>
      </div>
    </div>
  );
}
