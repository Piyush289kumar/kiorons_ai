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
    <footer className="w-9/12 mx-auto pt-10 text-white font-gellix md:my-24">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-20 gap-10">
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Kiorons</h3>
        {/* Section Template */}
        {[
          { title: 'Terms & Policies', items: FooterDataSet.Terms },
          { title: 'Social', items: FooterDataSet.Social },
          { title: 'Services', items: FooterDataSet.Services },
          { title: 'Company', items: FooterDataSet.Company },
          { title: 'kOne', items: FooterDataSet.kOne },
        ].map((section, idx) => (
          <div className="space-y-4" key={idx}>
            <h4 className="text-[#B8B8B8] text-md tracking-tight font-semibold">{section.title}</h4>
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
      <p className="text-[#B8B8B8] text-sm sm:text-md font-semibold text-center mt-28">
        © 2025 Kiorons. All rights reserved.
      </p>
    </footer>
  )
}
