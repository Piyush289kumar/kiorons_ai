import GlassButton from "./GlassButton";

// Add 'dangerouslySetInnerHTML' for summary rendering
export default function AboutSection({ heading, summary, btnText, btnUrl = "#" }) {
  return (
    <section className="font-gellix w-full xl:px-12 xl:max-w-8xl px-4 md:px-0 pb-44 pt-24 bg-transparent mx-auto">
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col md:flex-row items-start
          justify-between
          gap-12
        "
      >
        {/* Left Part */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:px-10">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-medium text-zinc-50 mb-2">
            {heading || "N/A"}
          </h2>
          <GlassButton className="mt-16" href={btnUrl}>
            {btnText || "N/A"}
          </GlassButton>
        </div>
        {/* Right Part */}
        <div
          className="w-full md:w-1/2 p-6 text-zinc-100 font-normal text-sm leading-relaxed shadow max-h-80 overflow-y-auto"
          // Render summary as HTML (for <br /> support)
          dangerouslySetInnerHTML={{
            __html: summary || "N/A"
          }}
        />
      </div>
    </section>
  );
}
