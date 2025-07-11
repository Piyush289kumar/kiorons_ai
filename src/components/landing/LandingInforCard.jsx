import Image from 'next/image'

export default function LandingInfoCard({ logo, label, heading, subheading }) {
  return (
    <div className="!font-gellix !border-[#434343] !border-[1px] md:!border-2 !flex !flex-col !justify-between !p-8 !py-12 !rounded-xl !text-white !w-full !max-w-xl">
      {/* Logo and Label */}
      <div className="!mb-6 md:!mb-12">
        <Image
          src={logo}
          alt="Logo"
          width={20}
          height={20}
          className="!animate-fade-up !w-auto !h-5 md:!h-8 !mb-2 md:!mb-5"
        />
        <span className="!text-xl md:!text-2xl !font-semibold">{label}</span>
      </div>

      {/* Heading */}
      <h3 className="!text-3xl md:!text-4xl !font-medium !mb-8 md:!w-10/12">{heading}</h3>

      {/* Sub Heading */}
      <h4 className="!text-md !font-medium md:!mb-8 md:!w-10/12 !tracking-tight">{subheading}</h4>
    </div>
  )
}
