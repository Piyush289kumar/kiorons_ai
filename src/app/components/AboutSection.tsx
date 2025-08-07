import GlassButton from "./GlassButton";

export default function AboutSection({
  heading,
  summary,
  btnText,
  btnUrl = "#",
}) {
  return (
    <section className="font-gellix w-full max-w-8xl mx-auto bg-transparent py-16 md:py-24 px-5 pr-10 sm:px-8 xl:px-12 mb-12 md:mb-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 md:gap-16 items-start justify-between">
        {/* Left */}
        <div className="w-full flex flex-col items-start space-y-2 md:px-6">
          <h2 className="text-2xl md:text-4xl font-medium text-zinc-50 mb-2">
            {heading || "N/A"}
          </h2>
          <div className="mt-5 hidden md:block">
            <GlassButton className="px-5 pt-1" href={btnUrl}>
              {btnText || "N/A"}
            </GlassButton>
          </div>
        </div>
        {/* Right */}
        <div
          className="
            w-full       
            text-zinc-100 font-normal text-md leading-6
          "
          dangerouslySetInnerHTML={{
            __html: summary || "N/A",
          }}
        />
      </div>
      <div className="mt-16 md:hidden block">
        <GlassButton className="px-5 py-3" href={btnUrl}>
          {btnText || "N/A"}
        </GlassButton>
      </div>
    </section>
  );
}
