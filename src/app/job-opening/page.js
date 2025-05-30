import Image from 'next/image'

export const dynamic = 'force-dynamic'

export default function HumanosPage() {
  return (
    <section className="flex flex-col justify-center items-center px-4 w-full font-gellix my-24">
      <div className="text-center w-11/12 md:w-6/12 mx-auto mt-16">
        <div className="text-center mb-40">
          <h1 className="text-6xl md:text-5xl sm:text-4xl font-semibold tracking-tight">Open Positions</h1>
          <p className="text-xl md:text-lg sm:text-base font-semibold mt-4">
            {'We’re looking for curious minds from a wide range of disciplines'}
          </p>
        </div>

        <div className="w-10/12 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-5 pr-10 py-3 rounded-4xl bg-[#292929] text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-white font-gellix"
            />
            <span className="absolute inset-y-0 right-0 pr-14 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-12">
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
      </div>

      <div className="text-center w-11/12 md:w-6/12 mx-auto mt-44">
        <h1 className="text-4xl md:text-5xl sm:text-3xl font-semibold tracking-tight">
          {'Didn’t See Your Role?'}
        </h1>
        <h1 className="text-4xl md:text-5xl sm:text-3xl font-semibold tracking-tight">
          {'We’d still love to hear from you.'}
        </h1>
        <p className="text-xl md:text-lg sm:text-base font-semibold mt-6">
          {'Send us a message about what you’d like to work on.'}
        </p>
        <p className="text-xl md:text-lg sm:text-base font-semibold">
          {'If it fits our mission, we’ll reach out.'}
        </p>

        <h4 className="text-xl md:text-2xl font-semibold mt-12 flex justify-center items-center gap-x-4">
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
        className="p-10 text-white w-full max-w-4xl text-center mt-28 rounded-lg"
        style={{ background: 'linear-gradient(71deg, #71D8E1 10.04%, #1B364B 69.45%)' }}
      >
        <h1 className="text-4xl md:text-5xl sm:text-3xl font-semibold tracking-tight">
          {'Build something the world’s never'}
        </h1>
        <h1 className="text-4xl md:text-5xl sm:text-3xl font-semibold tracking-tight">{'seen before.'}</h1>
        <button className="text-sm border border-white bg-white hover:bg-transparent hover:text-white text-black transition-all duration-300 p-2 px-6 rounded-3xl mt-12">
          Explore Roles
        </button>
      </div>
    </section>
  )
}
