'use client'

import { DockDemo } from '@/components/landing/Dock'

const FooterDataSet = {
  Explore: ['About Us', 'HumanOS (Coming Soon)', 'KAI (Coming Soon)', 'Careers', 'Contact'],
  'Terms & Policies': ['Privacy', 'Security', 'Other Policies', 'Terms of Use'],
  'Social Media': ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'], // You can modify this or add more sections
}

export default function Footer() {
  return (
    <footer className="w-full max-w-4xl mx-auto py-10 text-white font-gellix">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-gellix">
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">Explore</h4>
          <ul className="space-y-2">
            {FooterDataSet.Explore.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Policies Section */}
        <div className="space-y-4">
          <h4 className="text-lg text-[#B8B8B8] font-gellix">Terms & Policies</h4>
          <ul className="space-y-2">
            {FooterDataSet['Terms & Policies'].map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4 flex flex-col items-start font-gellix">
          <h4 className="text-lg text-[#B8B8B8]">Social</h4>
          <DockDemo className="text-start" />
          <p className="text-[#B8B8B8] leading-0 mt-3">© 2025 Kiorons. All rights reserved.</p>
          <p className="text-white leading-3">Crafted with intent in India.</p>
        </div>
      </div>
    </footer>
  )
}
