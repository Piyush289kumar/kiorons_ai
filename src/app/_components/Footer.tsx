// /src/app/_components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 text-sm">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
        <div className="space-x-4">
          <a href="/policies" className="hover:underline">Policies</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
