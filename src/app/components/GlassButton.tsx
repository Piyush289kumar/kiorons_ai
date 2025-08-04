// /src/components/GlassButton.tsx
import React from "react";
const baseBtn =
  "inline-flex items-center justify-center rounded-full bg-[#404040]/25 backdrop-blur-md border border-white/10 transition-all active:scale-95 focus-visible:outline-none min-h-[2.5rem] px-4 py-2 cursor-pointer";
type GlassButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "button" | "a";
    href?: string;
    children: React.ReactNode;
    className?: string;
  };
export function GlassButton({
  as = "button",
  href,
  children,
  className = "",
  ...rest
}: GlassButtonProps) {
  if (as === "a" && href) {
    return (
      <a
        href={href}
        className={`${baseBtn} ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type="button"
      className={`${baseBtn} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
export default GlassButton;
