import Image from "next/image";
import GlassButton from "./GlassButton";
export default function KoneSection() {
  return (
    <section className="font-gellix w-full md:w-10/12 px-4 md:px-0 py-20 bg-transparent mx-auto flex justify-center items-center">
      <div
        className="
          flex flex-col items-center justify-center
          w-full
          mx-auto
          rounded-3xl          
          backdrop-blur-md
          border border-white/10
          shadow-lg
          p-8 md:p-12
          text-center
          overflow-hidden
        "
      >
        <Image
          src="/logo/kiorons_logo.svg"
          alt="Kiorons Logo"
          width={30}
          height={30}
          priority
          className="h-8 w-8 mb-6"
        />
        <h2 className="text-2xl font-semibold text-zinc-50 mb-8 md:w-7/12 md:mx-auto">
          kOne is not a software. it’s a new operating system for the web-- for
          creatioves, builders, and thinkers.
        </h2>
        <GlassButton className="mt-2 px-6 py-3 text-base font-medium">
          View Manifesto
        </GlassButton>

        <h1
          className="text-[20rem] font-extrabold text-transparent -mt-20 -mb-44"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px #525252", // Use your desired color here
          }}
        >
          kOne
        </h1>
      </div>
    </section>
  );
}
