'use client'

import { DockDemo } from '@/components/landing/Dock'

const FooterDataSet = {
  Company: ['About Us', 'Careers', 'Contact'],
  kOne: ['Feature', 'Join early access', 'Pricing'],
  Services: ['System Design', 'DevOps', 'AI Integration', 'Brand Development', 'Consult'],
  Terms: ['Privacy', 'Security', 'Other Policies', 'Terms of use'],
  Social: ['Instagram', 'LinkedIn', 'X (Twitter)'],
}

export default function Footer() {
  return (
    <footer className="w-full max-w-[90%] mx-auto py-10 text-white font-gellix px-5 md:px-20 my-4 md:my-20">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-20 gap-10">
        {/* Section Template */}
        {[
          { title: 'Explore', items: FooterDataSet.Company },
          { title: 'kOne', items: FooterDataSet.kOne },
          { title: 'Services', items: FooterDataSet.Services },
          { title: 'Terms & Policies', items: FooterDataSet.Terms },
          { title: 'Social', items: FooterDataSet.Social },
        ].map((section, idx) => (
          <div className="space-y-4" key={idx}>
            <h4 className="text-[#B8B8B8] text-md md:text-xl tracking-tight font-medium">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-white tracking-tight font-semibold cursor-pointer text-sm md:text-lg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Footer Text */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-sm md:text-lg tracking-tight font-medium w-full">
            © 2025 Kiorons. All rights reserved.
            <br />
            <span>Crafted with intent in India.</span>
          </h4>
        </div>
      </div>
    </footer>
  )
}
