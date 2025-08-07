"use client";

import BlogCarousel from "../components/BlogCarousel";
import SubHighlighterSection from "../components/SubHighliterSection";
import { Timelines } from "../components/Timelines";
export default function Blogs() {
  return (
    <>
      <SubHighlighterSection
        label="Mission"
        title="Make the future, smarter, and faster."
        imageSrc="/images/team.png"
      />
      <Timelines />            
      <BlogCarousel category="studies" limit={3}/>
    </>
  );
}
