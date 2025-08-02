// /src/app/_components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700">
          YourBrand
        </Link>

        {/* Main navigation links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/home" className="hover:text-blue-500">Home</Link>
          <Link href="/services" className="hover:text-blue-500">Services</Link>
          <Link href="/blogs" className="hover:text-blue-500">Blogs</Link>
          <Link href="/careers" className="hover:text-blue-500">Careers</Link>
          <Link href="/job-openings" className="hover:text-blue-500">Jobs</Link>
          <Link href="/policies" className="hover:text-blue-500">Policies</Link>
          <Link href="/contact" className="hover:text-blue-500">Contact Us</Link>
        </div>

        {/* Mobile menu toggle (optional, for responsiveness) */}
        <div className="md:hidden">
          {/* You can add a hamburger icon and drawer logic here if desired */}
        </div>
      </div>
    </nav>
  );
}
