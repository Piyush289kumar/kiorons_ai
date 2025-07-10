'use client'
import { DockDemo } from '@/components/landing/Dock'
const FooterDataSet = {
  Terms: ['Privacy', 'Security', 'Other Policies', 'Terms of use'],
  Social: ['Instagram', 'LinkedIn', 'X (Twitter)'],
  Services: ['System Design', 'DevOps', 'AI Integration', 'Brand Development', 'Consult'],
  Company: ['About Us', 'Careers', 'Contact'],
  kOne: ['Feature', 'Join early access', 'Pricing'],
}
export default function Footer() {
  return (
    <footer className="w-full mx-auto text-white font-gellix md:px-10 mb-12 md:mb-12 mt-20 md:mt-52">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-20 gap-10">
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight md:mb-8">Kiorons</h3>
        {/* Section Template */}
        {[
          { title: 'Terms & Policies', items: FooterDataSet.Terms },
          { title: 'Social', items: FooterDataSet.Social },
          { title: 'Services', items: FooterDataSet.Services },
          { title: 'Company', items: FooterDataSet.Company },
          { title: 'kOne', items: FooterDataSet.kOne },
        ].map((section, idx) => (
          <div className="space-y-4" key={idx}>
            <h4 className="text-[#3a3a3a] text-md tracking-tight font-semibold">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-white tracking-tight cursor-pointer text-sm font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-[#B8B8B8] text-sm sm:text-md font-semibold text-center mt-12 md:mt-28">
        © 2025 Kiorons. All rights reserved.
      </p>
    </footer>
  )
}
