'use client'
import { DotPatternDemo } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { File, Settings, Search } from 'lucide-react'
import FadeUpSection from '@/components/animation/FadeUpSection'

const dataSet = ['Born.', 'Organized.', 'Designed.', 'and Launched.']

export default function MeetHumanOSSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 md:py-24 font-gellix">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold  font-gellix">Meet</h1>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-10 font-gellix">
          Human<span className="gradient-text-4 font-gellix">OS</span>
        </h1>
      </div>
      
      {/* Orbiting Icons */}
      <FadeUpSection>
        <div className="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] w-full my-8 md:my-12">
          <OrbitingCircles className="scale-75 sm:scale-90 md:scale-100">
            <File className="w-6 h-6 sm:w-8 sm:h-8" />
            <Settings className="w-6 h-6 sm:w-8 sm:h-8" />
            <File className="w-6 h-6 sm:w-8 sm:h-8" />
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse className="scale-75 sm:scale-90 md:scale-100">
            <File className="w-6 h-6 sm:w-8 sm:h-8" />
            <Settings className="w-6 h-6 sm:w-8 sm:h-8" />
            <File className="w-6 h-6 sm:w-8 sm:h-8" />
            <Search className="w-6 h-6 sm:w-8 sm:h-8" />
          </OrbitingCircles>
        </div>
      </FadeUpSection>

      {/* Description and Data List */}
      <FadeUpSection>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8">
          <p className="text-white text-sm sm:text-2xl font-gellix items-start md:text-left">
            An environment <br /> where ideas
          </p>
          <div className="space-y-1 text-center md:text-left">
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