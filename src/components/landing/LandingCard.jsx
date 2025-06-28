import Image from 'next/image'
import { LandingPageButton } from './LandingPageButton' // Adjust path

export default function LandingCard({ logo, label, heading, points, buttons }) {
  return (
    <div className="bg-[#151515] flex flex-col justify-between p-8 rounded-xl text-white w-full max-w-md">
      {/* Logo and Label */}
      <div className="flex items-center gap-1 mb-16">
        <Image src={logo} alt="Logo" width={18} height={18} className="animate-fade-up" />
        <span className="text-2xl font-semibold">{label}</span>
      </div>

      {/* Heading */}
      <h3 className="text-4xl font-medium mb-10 w-10/12">{heading}</h3>

      {/* Bullet Points */}
      <ul className="list-disc list-inside mb-28 space-y-2">
        {points.map((point, idx) => (
          <li className='text-lg font-semibold' key={idx}>{point}</li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        {buttons.map((btn, idx) => (
          <LandingPageButton key={idx} text={btn.text} color={btn.color} />
        ))}
      </div>
    </div>
  )
}
