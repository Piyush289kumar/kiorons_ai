import Image from 'next/image'

export default function LandingInAnalysisCard({ label, heading, subheading }) {
  return (
    <div className="bg-[#151515] !flex !flex-col !justify-between !p-4 md:!p-8 !text-white !w-full">
      {/* Logo and Label */}
      <div className="!mb-4">
        <span className="!text-4xl md:!text-5xl !font-semibold">{label}</span>
      </div>

      {/* Heading */}
      <h3 className="!text-xl md:!text-3xl !font-semibold !mb-2 md:!w-7/12">{heading}</h3>

      {/* Sub Heading */}
      <h4 className="!text-[#A2A2A2] !text-sm !font-medium md:!w-9/12 !tracking-tight">{subheading}</h4>
    </div>
  )
}
