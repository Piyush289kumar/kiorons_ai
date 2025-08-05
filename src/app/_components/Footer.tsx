import CTA from "../components/CTA";
export default function Footer() {
  return (
    <div
      className="relative px-8 mb-0 mt-44 h-[95vh] overflow-hidden"
      style={{
        backgroundImage: "url('/images/footerbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
      }}
    >
      {/* Black gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0) 50%),
            linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0) 50%),
            linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0) 50%)
          `
        }}
      />
      {/* Main content over the image and overlay */}
      <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 w-full px-12 xl:max-w-8xl">
        <CTA />
        <footer className="bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-lg rounded-t-3xl transition-all border border-white/10">
          {/* Your repeated content goes here */}
          <div className="mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className="space-x-4">
              <a href="/policies" className="hover:underline">Policies</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="text-center pt-12 text-sm text-gray-500 py-4">
            &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
