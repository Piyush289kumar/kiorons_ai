import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function HumanosPage() {
  return (
    <section className="flex flex-col justify-center items-center px-4 w-full font-gellix my-24">
      <div className="text-center max-w-6xl mx-auto">
        {/* Headings - Responsive font sizes */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
          Build the future.
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
          Together.
        </h1>
        <p className="text-lg sm:text-xl font-semibold mt-11 max-w-xl mx-auto">
          {"If you're driven to create, challenge norms, and shape"}
        </p>
        <p className="text-lg sm:text-xl font-semibold max-w-xl mx-auto">
          the next big thing, Kiorons is for you.
        </p>
      </div>

      <Image
        src="/assets/images/Webapp/career/careerhero.png"
        alt="Logo"
        width={900}
        height={900}
        className="animate-fade-up w-5/6 sm:w-4/6 my-20 max-w-[900px] mx-auto"
      />

      <div className="text-center max-w-6xl mx-auto px-4 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
          A place for makers.
        </h1>
        <p className="text-xl md:text-2xl font-semibold mt-8 max-w-xl mx-auto">
          {'We’re not a 9-to-5 machine. We’re a company for'}
        </p>
        <p className="text-xl md:text-2xl font-semibold max-w-xl mx-auto">
          {'builders, thinkers, and dreamers who want to leave'}
        </p>
        <p className="text-xl md:text-2xl font-semibold max-w-xl mx-auto">
          {'a mark. Everything you create here matters.'}
        </p>

        {/* Responsive container for images */}
        <div className="relative w-full h-[500px] mt-12 overflow-visible">
          {/* For small screens, make these images stack or scale */}
          {/* Left Future (L3) */}
          <Image
            src="/assets/images/Webapp/career/showcase3.png"
            alt="L3"
            width={350}
            height={350}
            className="absolute z-0 shadow-lg
              -left-[65%] top-[5%]
              sm:-left-[40%] sm:top-[10%]
              xs:static xs:mx-auto xs:mb-6 xs:relative"
          />

          {/* Left Near (L2) */}
          <Image
            src="/assets/images/Webapp/career/showcase2.png"
            alt="L2"
            width={350}
            height={350}
            className="absolute z-10 shadow-lg
              -left-[25%] top-[25%]
              sm:-left-[15%] sm:top-[25%]
              xs:static xs:mx-auto xs:mb-6 xs:relative"
          />

          {/* Right Near (R2) */}
          <Image
            src="/assets/images/Webapp/career/showcase4.png"
            alt="R2"
            width={350}
            height={350}
            className="absolute z-10 shadow-lg
              -right-[25%] top-[25%]
              sm:-right-[15%] sm:top-[25%]
              xs:static xs:mx-auto xs:mb-6 xs:relative"
          />

          {/* Right Future (R3) */}
          <Image
            src="/assets/images/Webapp/career/showcase5.png"
            alt="R3"
            width={350}
            height={350}
            className="absolute z-0 shadow-lg
              -right-[65%] top-[5%]
              sm:-right-[40%] sm:top-[10%]
              xs:static xs:mx-auto xs:mb-6 xs:relative"
          />

          {/* Center (overlapping L2 and R2) */}
          <Image
            src="/assets/images/Webapp/career/showcase1.png"
            alt="Center"
            width={350}
            height={350}
            className="absolute left-1/2 top-[45%] transform -translate-x-1/2 z-20 shadow-2xl
              sm:top-[40%]
              xs:static xs:mx-auto xs:mb-6 xs:relative xs:transform-none"
          />
        </div>
      </div>

      <div className="text-center w-11/12 md:w-6/12 mx-auto mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight">Open Positions</h1>
        <p className="text-lg md:text-xl font-semibold mt-8">
          We’re looking for curious minds from a wide range
        </p>
        <p className="text-lg md:text-xl font-semibold">of disciplines and backgrounds.</p>

        <div className="my-12">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="group border-t border-b border-gray-600 py-5 px-4 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex flex-row justify-between items-start sm:items-center transition-all duration-300 ease-in-out gap-4">
                <div className="flex gap-4 items-center flex-wrap">
                  <h3 className="font-semibold text-white transition-all duration-300">
                    Product Designer
                  </h3>
                  <span className="text-[#A2A2A2] text-sm transition-all duration-300 hidden md:block">Design</span>
                </div>

                <div className="flex gap-4 items-center flex-wrap">
                  <span className="text-[#A2A2A2] text-sm transition-all duration-300 hidden md:block">
                    Full Time
                  </span>
                  <span className="text-[#A2A2A2] text-sm transition-all duration-300 hidden md:block">Remote</span>
                  <button className="text-sm border border-white transition-all duration-300 p-2 px-6 rounded-3xl whitespace-nowrap">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="job-opening"
          className="text-sm border border-white bg-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-8 md:mt-12 cursor-pointer inline-block"
        >
          View open roles
        </a>
      </div>

      <div className="text-center w-11/12 md:w-6/12 mx-auto mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {'Didn’t See Your Role?'}
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {'We’d still love to hear from you.'}
        </h1>
        <p className="text-lg md:text-xl font-semibold mt-6">
          {'Send us a message about what you’d like to work on.'}
        </p>
        <p className="text-lg md:text-xl font-semibold">
          {'If it fits our mission, we’ll reach out.'}
        </p>

        <h4 className="text-lg md:text-2xl font-semibold mt-12 flex justify-center items-center gap-x-4">
          <Image
            src="/assets/images/icons/mails.svg"
            alt="Mail Icon"
            width={24}
            height={24}
            className="animate-fade-up"
          />
          <span>info@kiorons.com</span>
        </h4>
      </div>

      <div
        className="p-10 text-white w-11/12 md:w-8/12 text-center mt-28 rounded-xl"
        style={{ background: 'linear-gradient(71deg, #71D8E1 10.04%, #1B364B 69.45%)' }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {'Build something the world’s never'}
        </h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          {'seen before.'}
        </h1>
        <button className="text-sm border border-white bg-white hover:bg-transparent hover:text-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12">
          Explore Roles
        </button>
      </div>
    </section>
  )
}
