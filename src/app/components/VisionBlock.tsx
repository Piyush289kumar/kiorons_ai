import { ArrowUpRight } from "lucide-react";
import GlassButtonWithText from "./GlassButtonWithText";

export default function VisionBlock() {
  return (
    <div className="group relative mb-24 md:mb-44 px-7 sm:px-6 md:px-8 xl:px-12 xl:max-w-8xl mx-auto">
      <div className="flex flex-col md:gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-0 md:flex-row py-10">
        {/* Left/Text Block */}
        <div className="flex flex-col gap-4 md:gap-12 xl:flex-row flex-1 order-2 md:order-1">
          <div className="flex flex-1 flex-col space-y-10 sm:space-y-16 my-auto px-0 sm:pl-4 md:pl-16">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-6xl leading-0 md:leading-5 font-semibold">
                Our vision for
              </h3>
              <h3 className="text-4xl md:text-6xl font-semibold">the future</h3>
              <p className="text-md mt-6 w-10/12 max-w-full break-words">
                {
                  "To create the world's first truly intelligent operating system — an AI ecosystem built for the next generation of builders."
                }
              </p>
            </div>
            <div className="flex items-center gap-2">
              <GlassButtonWithText
                as="a"
                href="#loadmore"
                text="Read the Vision"
                icon={<ArrowUpRight className="w-3 h-3" />}
                iconPosition="right"
                className=""
              />
            </div>
          </div>
        </div>
        {/* Right/Image Block */}
        <div className="flex-1 w-full max-w-full md:max-w-3xl order-1 md:order-2 overflow-hidden rounded-xl">
          <div
            className="flex items-center w-full aspect-square text-4xl tracking-tight leading-[2.5rem] rounded-xl bg-[#0C0C0B] overflow-hidden shadow transition-transform duration-300 will-change-transform hover:scale-105 cursor-pointer"
            style={{
              backgroundImage: `url('/images/vision.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
