'use client'
import { DotPatternDemo } from '@/components/landing/DotPatternBackground'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { File, Settings, Search } from 'lucide-react'
import FadeUpSection from '@/components/animation/FadeUpSection'
const dataSet = ['Born.', 'Organized.', 'Designed.', 'and Launched.']
export default function MeetHumanOSSection() {
  return (
    <section className="w-full max-w-4xl mx-auto">
      {/* Heading */}
      <div className="px-4 flex flex-col items-center text-center">
        <h1 className="text-white text-7xl font-semibold leading-none font-gellix">Meet</h1>
        <h1 className="text-white text-7xl font-semibold leading-none font-gellix">
          Human <span className="gradient-text-4 font-gellix">OS</span>
        </h1>
      </div>
      {/* Orbiting Icons */}
     
      <FadeUpSection>
     
      <div className="relative overflow-hidden h-[500px] w-full my-12">
        <OrbitingCircles>
          <File />
          <Settings />
          <File />
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse>
          <File />
          <Settings />
          <File />
          <Search />
        </OrbitingCircles>
      </div>
      </FadeUpSection>

      {/* Description and Data List */}
     
     
      <FadeUpSection>
         <div className="px-4 flex items-start justify-center space-y-4">
        <p className="text-white text-2xl font-gellix px-5">
          An environment <br /> where ideas
        </p>
        <div className="space-y-1">
          {dataSet.map((data, idx) => (
            <h3 key={idx} className="text-white text-3xl font-semibold leading-14 font-gellix">
              {data}
            </h3>
          ))}
        </div>
      </div>

      </FadeUpSection>
    </section>
  )
}
