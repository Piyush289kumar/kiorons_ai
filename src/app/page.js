"use client";

import AboutSection from "./components/AboutSection";
import KoneSection from "./components/KoneSection";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection
        heading="At Kiorons, we build AI to serve humanity’s long-term well-being."
        btnText="Manifesto"
        summary={`
    At Kiorons, we build AI to serve humanity’s long-term well-being.
    At Kiorons, we build AI to serve humanity’s long-term well-being.
    <br /><br />
    At Kiorons, we build AI to serve humanity’s long-term well-being.
    At Kiorons, we build AI to serve humanity’s long-term well-being.
  `}
      />
      <KoneSection />
      <NewsSection />
    </>
  );
}
