"use client";

import { useCallback } from "react";
import AboutSection from "./components/AboutSection";
import KoneSection from "./components/KoneSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <KoneSection />
    </>
  );
}
