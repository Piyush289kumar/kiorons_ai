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
    <footer className="w-9/12 mx-auto py-10 text-white gap-20 font-gellix px-20 my-20">
      <div className="flex justify-between font-gellix">
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-xl font-gellix tracking-tight font-medium">
            Explore
          </h4>
          <ul className="space-y-2">
            {FooterDataSet.Company.map((item, index) => (
              <li
                key={index}
                className="text-white tracking-tight font-semibold cursor-pointer font-gellix text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-xl font-gellix tracking-tight font-medium">kOne</h4>
          <ul className="space-y-2">
            {FooterDataSet.kOne.map((item, index) => (
              <li
                key={index}
                className="text-white tracking-tight font-semibold cursor-pointer font-gellix text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-xl font-gellix tracking-tight font-medium">
            Services
          </h4>
          <ul className="space-y-2">
            {FooterDataSet.Services.map((item, index) => (
              <li
                key={index}
                className="text-white tracking-tight font-semibold cursor-pointer font-gellix text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-xl font-gellix tracking-tight font-medium">
            Terms & Policies
          </h4>
          <ul className="space-y-2">
            {FooterDataSet.Terms.map((item, index) => (
              <li
                key={index}
                className="text-white tracking-tight font-semibold cursor-pointer font-gellix text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Explore Section */}
        <div className="space-y-4">
          <h4 className="text-[#B8B8B8] text-xl font-gellix tracking-tight font-medium">
            Social
          </h4>
          <ul className="space-y-2">
            {FooterDataSet.Social.map((item, index) => (
              <li
                key={index}
                className="text-white tracking-tight font-semibold cursor-pointer font-gellix text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Policies Section */}
        <div className="space-y-4 font-gellix">
          <h4 className="text-[#B8B8B8] text-lg font-gellix tracking-tight font-medium">
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
