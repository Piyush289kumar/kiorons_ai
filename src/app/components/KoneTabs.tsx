"use client";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
type DummyContentProps = {
  images: [string, string, string]; // left, top-right, bottom-right
};
export function KoneTabs() {
  const tabs = [
    {
      title: "Think",
      value: "product",
      content: (
        <TabWrapper>
          <DummyContent
            images={[
              "/images/blogs/news1.png",
              "/images/blogs/news2.png",
              "/images/blogs/news3.png",
            ]}
          />
        </TabWrapper>
      ),
    },
    {
      title: "Design",
      value: "services",
      content: (
        <TabWrapper>
          <DummyContent
            images={[
              "/images/blogs/news3.png",
              "/images/blogs/news1.png",
              "/images/blogs/news2.png",
            ]}
          />
        </TabWrapper>
      ),
    },
    {
      title: "Build",
      value: "playground",
      content: (
        <TabWrapper>
          <DummyContent
            images={[
              "/images/blogs/news2.png",
              "/images/blogs/news3.png",
              "/images/blogs/news1.png",
            ]}
          />
        </TabWrapper>
      ),
    },
    {
      title: "Manage",
      value: "content",
      content: (
        <TabWrapper>
          <DummyContent
            images={[
              "/images/blogs/news1.png",
              "/images/blogs/news3.png",
              "/images/blogs/news2.png",
            ]}
          />
        </TabWrapper>
      ),
    },
    {
      title: "Scale",
      value: "random",
      content: (
        <TabWrapper>
          <DummyContent
            images={[
              "/images/blogs/news2.png",
              "/images/blogs/news1.png",
              "/images/blogs/news3.png",
            ]}
          />
        </TabWrapper>
      ),
    },
  ];
  return (
    <div className="h-fit md:h-screen [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-center my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
// Optional wrapper to reduce repetition
const TabWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-hidden relative h-full rounded-2xl p-2 text-xl md:text-4xl font-bold text-white bg-black">
    {children}
  </div>
);
export const DummyContent = ({ images }: DummyContentProps) => {
  const [key, setKey] = useState(0);
  // Trigger re-render and animation on images prop change
  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [images]);
  const fadeBlurVariant = {
    initial: {
      opacity: 0,
      filter: "blur(8px)",
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };
  const [leftImg, topRightImg, bottomRightImg] = images;
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={key}
        // variants={fadeBlurVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col gap-6 md:flex-row w-full h-[90vh]"
      >
        {/* Left full-height image */}
        <div className="w-full md:w-1/2 h-full md:h-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
            style={{ backgroundImage: `url("${leftImg}")` }}
          />
        </div>
        {/* Right two stacked images */}
        <div className="w-full md:w-1/2 flex gap-6 flex-col h-full">
          {/* Top image */}
          <div className="h-full md:h-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url("${topRightImg}")` }}
            />
          </div>
          {/* Bottom image */}
          <div className="h-full md:h-1/2 relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{ backgroundImage: `url("${bottomRightImg}")` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
