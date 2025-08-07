// src/components/GlassButtonWithText.tsx
import React from "react";
import GlassButton from "./GlassButton";
type GlassButtonWithTextProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "button" | "a";
    href?: string;
    text: string;
    icon: React.ReactNode;
    iconPosition?: "left" | "right";
    className?: string;
  };
export function GlassButtonWithText({
  as = "button",
  href,
  text,
  icon,
  iconPosition = "right",
  className = "",
  ...rest
}: GlassButtonWithTextProps) {
  // Button with icon inside, text outside:
  return (
    <div className="flex items-center justify-center">
      {/* Text */}
      {iconPosition === "left" && (
        <GlassButton as={as} href={href} className={className} {...rest}>
          {icon}
        </GlassButton>
      )}
      <span className="text-zinc-50 font-medium text-sm mr-2 select-none">{text}</span>
      {iconPosition === "right" && (
        <GlassButton as={as} href={href} className={className} {...rest}>
          {icon}
        </GlassButton>
      )}
    </div>
  );
}
export default GlassButtonWithText;
