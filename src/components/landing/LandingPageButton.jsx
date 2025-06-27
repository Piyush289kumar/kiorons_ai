export function LandingPageButton({ text, color = "white" }) {
  const isWhite = color === "white";

  const buttonClasses = `
    w-full sm:w-auto text-sm md:text-lg border border-white
    ${isWhite ? "bg-white text-black" : "bg-black text-white"}
    transition-all duration-300 px-2 p-2 md:px-6 rounded-3xl cursor-pointer
  `;

  return <button className={buttonClasses}>{text}</button>;
}
