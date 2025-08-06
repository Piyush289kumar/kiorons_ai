import React from "react";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

export function Timelines() {
  const data = [
    {
      title: "2024",
      summary:
        "Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch",
    },
    {
      title: "Early 2023",
      summary:
        "Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch",
    },
    {
      title: "Changelog",
      summary:
        "Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch",
    },
    {
      title: "kOne",
      summary:
        "Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch. Built and launched Kiorons from scratch",
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
