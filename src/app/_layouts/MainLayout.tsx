// /src/app/_layouts/MainLayout.tsx
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen font-gellix overflow-hidden">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
