'use client'
import FadeUpSection from '@/components/animation/FadeUpSection'
import { ContactCard } from '@/components/landing/ContactForm'
const dataSet = ['One environment.', 'One brain.', 'One command.']
export default function ContactSection() {
  return (
    <FadeUpSection>
      <section className="w-full max-w-4xl mx-auto py-40">
        <div>
          <h4 className="text-white text-6xl font-semibold mb-2">
            The future of <br /> building is here.
          </h4>
          <p className="text-gray-400 text-2xl font-semibold font-gellix pt-7">
            Everything you need to think, create,
            <br /> and publish — without switching tools.
          </p>
          <p className="text-white text-2xl font-semibold font-gellix pt-2">
            Built with KAI. Powered by purpose.
          </p>
        </div>
        <FadeUpSection>
          <div className="flex justify-between items-center gap-8 pt-32">
            {/* Left Image */}
            <div className="flex-shrink-0">
              <p className="text-white text-5xl font-semibold font-gellix pt-2 leading-16">
                Get early access.
                <br />
                No noise, <br />
                just signal.
              </p>
            </div>
            {/* Right Side - Contact Card */}
            <div className="flex justify-end w-full">
              <ContactCard className="w-full max-w-sm" />
            </div>
          </div>
        </FadeUpSection>
      </section>
    </FadeUpSection>
  )
}
