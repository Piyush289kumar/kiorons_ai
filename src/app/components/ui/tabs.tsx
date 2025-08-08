"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};
export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(false);
  return (
    <>
      <div className="w-full">
        <div
          className={cn(
            "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-fit mx-auto bg-[#404040]/25 backdrop-blur-md border border-white/10 rounded-full p-1 font-gellix",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-4 md:px-5 py-2 rounded-full text-sm cursor-pointer",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.0, duration: 0 }}
                  className={cn(
                    "absolute inset-0 bg-[#404040]/25 rounded-full ",
                    activeTabClassName
                  )}
                />
              )}
              <span className="relative block text-black dark:text-white">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <h2 className="font-medium text-xl md:text-2xl tracking-tight capitalize text-center my-10 mt-8 md:mt-16 w-full">
        The new and Productive way of Startegize everything
      </h2>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-0", contentClassName)}
      />
    </>
  );
};
export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            top: hovering ? idx * -0 : 0,
            zIndex: -idx,
            // filter: activeTab ? "none" : "blur(4px)", // 👈 apply blur if not active
            transition: "filter 0.3s ease",
          }}
          animate={{
            y: isActive(tab) ? [0, 0, 0] : 0,
          }}
          className={cn("w-full h-screen md:h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     <div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             // scale: 1 - idx * 0.1,
//             top: hovering ? idx * -0 : 0,
//             zIndex: -idx,
//             // opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 0, 0] : 0,
//           }}
//           className={cn("w-full h-full absolute top-0 left-0", className)}
//         >
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>
//   );
// };
