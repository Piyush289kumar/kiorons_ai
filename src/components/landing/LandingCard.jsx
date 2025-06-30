import Image from 'next/image'
import { LandingPageButton } from './LandingPageButton' // Adjust path

export default function LandingCard({ logo, label, heading, points, buttons }) {
  return (
    <div className="bg-[#151515] flex flex-col justify-between p-8 rounded-xl text-white w-full max-w-xl">
      {/* Logo and Label */}
      <div className="flex items-center gap-1 mb-20">
        <Image src={logo} alt="Logo" width={20} height={20} className="animate-fade-up w-auto h-7 mt-1.5" />
        <span className="text-4xl font-semibold">{label}</span>
      </div>

      {/* Heading */}
      <h3 className="text-5xl font-medium mb-14 w-10/12">{heading}</h3>

      {/* Bullet Points */}
      <ul className="list-disc list-inside mb-28 space-y-2">
        {points.map((point, idx) => (
          <li className="text-2xl font-semibold" key={idx}>
            {point}
          </li>
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
