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
    <footer className="w-full mx-auto py-10 text-white gap-20 font-gellix px-20 my-36">
      <div className="flex justify-between font-gellix">
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">Explore</h4>
          <ul className="space-y-2">
            {FooterDataSet.Company.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">kOne</h4>
          <ul className="space-y-2">
            {FooterDataSet.kOne.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">Services</h4>
          <ul className="space-y-2">
            {FooterDataSet.Services.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">Terms & Policies</h4>
          <ul className="space-y-2">
            {FooterDataSet.Terms.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-lg font-gellix">Social</h4>
          <ul className="space-y-2">
            {FooterDataSet.Social.map((item, index) => (
              <li key={index} className="hover:text-gray-400 cursor-pointer font-gellix text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Policies Section */}
        <div className="space-y-4 font-gellix">
          <h4 className="text-sm text-[#B8B8B8] font-gellix tracking-tight">
            © 2025 Kiorons. All <br />
            rights reserved.
            <br />
            <span>Crafted with intent in India.</span>
          </h4>
        </div>
      </div>
    </footer>
  )
}
