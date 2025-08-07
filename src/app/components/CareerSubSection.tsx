import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Cpu,
  PieChart,
} from "lucide-react";
import React from "react";
import GlassButtonWithText from "./GlassButtonWithText";
import PrincipalsSection from "./PrincipalsSection";

// Reusable PrincipleBlock component
function PrincipleBlock({ Icon, ariaLabel, heading, summary, className = "" }) {
  return (
    <div
      className={`flex flex-col items-start gap-4 pr-10 group cursor-pointer ${className}`}
    >
      <span className="mt-1 mb-16">
        <Icon aria-label={ariaLabel} className="w-10 h-10" />
      </span>
      <div>
        <h3 className="text-3xl font-medium mb-8">{heading}</h3>
        <p className="text-md !text-white/50 group-hover:!text-white transition-all duration-500">
          {summary}
        </p>
      </div>
    </div>
  );
}

export default function CareerSubSection() {
  return (
    <>
      <PrincipalsSection />
    </>
  );
}
