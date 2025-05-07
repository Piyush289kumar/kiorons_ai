'use client'
import FadeUpSection from '@/components/animation/FadeUpSection'
import { ContactCard } from '@/components/landing/ContactForm'
const dataSet = ['One environment.', 'One brain.', 'One command.']
export default function ContactSection() {
  return (
    <FadeUpSection>
      <section className="w-full max-w-4xl mx-auto py-10 px-4 md:py-40 font-gellix">
        <div>
          <h4 className="text-white text-5xl md:text-7xl font-semibold mb-2 font-gellix">
            The future of <br /> building is here.
          </h4>
          <p className="text-gray-300 text-md md:text-xl font-gellix pt-3 font-gellix">
            Everything you need to think, create,
            <br /> and publish — without switching tools.
          </p>
          <p className="text-white text-sm md:text-xl font-semibold font-gellix pt-5 font-gellix">
            Built with KAI. Powered by purpose.
          </p>
        </div>
        <FadeUpSection>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 pt-16 md:pt-32 ">
            {/* Left Text Section */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <p className="text-white text-3xl md:text-5xl font-semibold font-gellix  leading-7 md:leading-12 font-gellix">
                Get early access.
                <br />
                No noise, <br />
                just signal.
              </p>
            </div>
            {/* Right Side - Contact Card */}
            <div className="flex justify-center w-full md:w-1/2">
              <ContactCard className="w-full max-w-sm" />
            </div>
          </div>
        </FadeUpSection>
      </section>
    </FadeUpSection>
  )
}
