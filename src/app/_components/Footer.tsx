import CTA from "../components/CTA";

export default function Footer() {
  return (
    <div
      className="relative px-2 md:px-8 mb-0 mt-0 md:mt-24 min-h-[80vh] h-fit overflow-hidden"
      style={{
        backgroundImage: "url('/images/footerbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0) 60%),
            linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0) 65%),
            linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0) 65%)
          `,
        }}
      />

      {/* Main content */}
      <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 w-full px-4  xl:max-w-7xl">
        <CTA />
        <footer className="
          bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
          shadow-lg rounded-t-3xl transition-all border border-white/10 mt-8
        ">
          <div className="flex flex-col md:flex-row justify-between items-center px-4 py-8 gap-6">
            {/* Left: Navigation */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <a href="/policies" className="hover:underline text-zinc-200 transition">
                Policies
              </a>
              <a href="/contact" className="hover:underline text-zinc-200 transition">
                Contact
              </a>
              {/* Add more links as needed */}
            </nav>
            {/* Center: Socials or logo (optional) */}
            {/* <div>
              <img src="/logo.svg" alt="Your Brand" className="h-8" />
            </div> */}
            {/* Right: Copyright */}
            <div className="text-center md:text-right text-xs text-gray-400 pt-4 md:pt-0">
              &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
