'use client'

import FadeUpSection from "@/components/animation/FadeUpSection"

const dataSet = ['One environment.', 'One brain.', 'One command.']

export default function IdeaSection() {
  return (
    <section className="w-full max-w-6xl px-4 sm:px-6 md:px-10 mx-auto py-20 md:py-32">
      <div>
        <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
          Everything you need from <br /> idea to launch..
        </h4>

        <FadeUpSection>
          <div className="space-y-4">
            {dataSet.map((data, idx) => (
              <h3
                key={idx}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight font-gellix"
              >
                {data}
              </h3>
            ))}
          </div>
        </FadeUpSection>
      </div>
    </section>
  )
}
