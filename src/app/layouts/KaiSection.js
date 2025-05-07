'use client'
import Image from 'next/image'

const working = [
  {
    title: 'He listens.',
    description:
      'Describe what you want — a website, a business idea, a content plan — and he gets it.',
  },
  {
    title: 'He thinks.',
    description: 'Understands your goal, your audience, your product. Learns your style.',
  },
  {
    title: 'He builds.',
    description: 'From strategy to execution — content, design, structure — he does the work.',
  },
  {
    title: 'He evolves.',
    description: 'The more you create, the better he gets. KAI grows with you.',
  },
]
export default function KaiSection() {
  return (
    <section className="w-full max-w-4xl mx-auto py-24 md:py-5 px-4 font-gellix">
      <div>
        <h4 className="text-white text-center text-5xl md:text-7xl font-semibold mb-4 font-gellix">
          Introducing <br /> KAI
        </h4>
        <Image
          src="/assets/images/icons/Human/Ellipse1.png"
          alt="Kiorons Logo"
          width={100}
          height={100}
          className="mx-auto h-72 w-auto"
        />
        <h3 className="text-white text-3xl md:text-6xl font-semibold font-gellix pt-7 leading-7 md:leading-14">
          Your co-founder. <br /> Your creative partner.
        </h3>
        <p className="text-gray-300 text-sm md:text-2xl font-medium font-gellix pt-2 md:pt-4">
          The intelligence behind <br /> everything you build.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-32">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/images/icons/Human/Ellipse1.png"
            alt="Kiorons Logo"
            width={200}
            height={200}
            className="h-72 md:h-96 w-auto"
          />
        </div>

        {/* Right Text List */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 font-gellix">
          {working.map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-semibold text-white font-gellix">{item.title}</h3>
              <p className="text-gray-300 text-base md:text-sm font-gellix">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
