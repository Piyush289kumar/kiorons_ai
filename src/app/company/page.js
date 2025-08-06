"use client";

import BlogCarousel from "../components/BlogCarousel";
import SubHighlighterSection from "../components/SubHighliterSection";
import { Timelines } from "../components/Timelines";
export default function Blogs() {
  return (
    <>
      <SubHighlighterSection
        label="Mission"
        title="Make the future. smarter, and faster for the next generation of creators, founders, and builders"
        imageSrc="/images/team.png"
      />
      <Timelines />      
      <BlogCarousel heading="Studies" limit={3} />
    </>
  );
}
