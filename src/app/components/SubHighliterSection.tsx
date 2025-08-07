import Image from "next/image";
import React from "react";
import PrincipalsSection from "./PrincipalsSection";
import AboutSection from "./AboutSection";
interface SubHighlighterSectionProps {
  label: string;
  title: string;
  imageSrc: string;
}
export default function SubHighlighterSection({
  label,
  title,
  imageSrc,
}: SubHighlighterSectionProps) {
  return (
    <>
      <section className="py-16 sm:py-0 pt-26 sm:pt-44 font-gellix mx-auto px-4 text-center w-full xl:px-12 xl:max-w-8xl">
        <p className="text-xs uppercase text-primary font-medium">{label}</p>
        <h2 className="text-4xl px-5 md:px-0 md:text-7xl font-semibold my-8 mb-20 text-zinc-50 max-w-4xl mx-auto">
          {title}
        </h2>
        <div className="w-11/12 md:w-9/12 mx-auto h-auto shadow-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={label}
            width={8000}
            height={8000}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
        </div>
      </section>
      <AboutSection
        heading="Come build with us. Come build with us."
        btnText="View Manifesto"
        summary={`
         We're creating a future where software, systems, and creators move at the speed of AI.
         We're creating a future where software, systems, and creators move at the speed of AI.
         <br /><br />
         If you're obsessed with building great things — this is your invitation.
          We're creating a future where software, systems, and creators move at the speed of AI.
        `}
      />
      <PrincipalsSection />
    </>
  );
}
