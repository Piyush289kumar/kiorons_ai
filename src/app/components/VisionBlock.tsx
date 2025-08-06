import { ArrowUpRight } from "lucide-react";
import GlassButtonWithText from "./GlassButtonWithText";

export default function VisionBlock() {
  return (
    <section className=" font-gellix w-full md:w-10/12 mx-auto">
      <div className="mx-auto w-full xl:max-w-7xl">
        <div className={`group relative my-44`}>
          <div
            className={`
              flex flex-col gap-10 py-24 md:gap-12 md:flex-row
            `}
          >
            {/* Left/Text Block */}
            <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
              {/* Main content */}
              <div className="flex flex-1 flex-col space-y-6 px-24">
                <div className="block grow space-y-4">
                  <div className="absolute inset-0" />
                  <h3 className="!text-5xl leading-14 font-semibold">
                    Our vision for
                  </h3>
                  <h3 className="!text-5xl leading-0 font-semibold">
                    sthe future
                  </h3>
                  <p className="grow text-balance text-lg mt-18 md:w-2/3">
                    {
                      "To create the world's first truly intelligent operating system — an AI ecosystem built for the next generation of builders."
                    }
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <GlassButtonWithText
                    as="a"
                    href="#loadmore"
                    text="Read the Vision"
                    icon={<ArrowUpRight className="w-3 h-3" />}
                    iconPosition="right"
                    className="!px-3 !py-0"
                  />
                </div>
              </div>
            </div>
            {/* Right/Image Block */}
            <div className="flex-1 w-[800px] order-1 md:order-2 overflow-hidden rounded-sm">
              <div
                className="
                    flex items-center w-full aspect-[1/1] text-4xl tracking-tight leading-[2.5rem] rounded-sm bg-[#0C0C0B] overflow-hidden shadow
                     transition-transform duration-300 will-change-transform hover:scale-105 cursor-pointer"
                style={{
                  backgroundImage: `url('/images/vision.png')`,
                  backgroundSize: "cover", // Ensures the image covers the box
                  backgroundPosition: "center", // Perfectly centers the image
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
