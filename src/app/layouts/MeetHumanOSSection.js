'use client'
import FadeUpSection from '@/components/animation/FadeUpSection'
import Image from 'next/image'
const dataSet = ['Born.', 'Organized.', 'Designed.', 'and Launched.']
export default function MeetHumanOSSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 md:py-24 font-gellix">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-14">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold  font-gellix">
          Meet
        </h1>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-10 font-gellix">
          Human<span className="gradient-text-4 font-gellix">OS</span>
        </h1>
      </div>
      {/* Orbiting Icons */}
      <div className="h-[120px] md:h-[155px] overflow-hidden flex items-center justify-center">
        <Image
          src="/assets/images/gif/2.gif"
          alt="Menu Icon"
          width={400}
          height={400}
          className="w-full max-w-[400px] md:w-auto object-contain md:object-cover"
        />
      </div>
      {/* Description and Data List */}
      <FadeUpSection>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8">
          <p className="text-white text-sm sm:text-2xl font-gellix items-start md:text-left">
            An environment <br /> where ideas
          </p>
          <div className="space-y-1 text-start md:text-left">
            {dataSet.map((data, idx) => (
              <h3 key={idx} className="text-white text-2xl sm:text-3xl font-semibold font-gellix">
                {data}
              </h3>
            ))}
          </div>
        </div>
      </FadeUpSection>
    </section>
  )
}
