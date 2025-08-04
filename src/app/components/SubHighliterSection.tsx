import Image from "next/image";
import React from "react";
import PrincipalsSection from "./PrincipalsSection";

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
      <section className="py-16 sm:py-0 pt-44 sm:pt-52 font-gellix mx-auto px-4 text-center">
        <p className="text-xs uppercase text-primary font-medium">{label}</p>
        <h2 className="text-4xl sm:text-4xl font-semibold my-8 mb-20 text-zinc-50 max-w-2xl mx-auto">
          {title}
        </h2>
        <div className="w-8/12 mx-auto h-auto rounded-sm shadow-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={label}
            width={1200}
            height={700}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </section>
      <PrincipalsSection />
    </>
  );
}
