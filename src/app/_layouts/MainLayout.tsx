// /src/app/_layouts/MainLayout.tsx
// import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="">{children}</main> {/* add padding only if navbar is fixed */}
      {/* <Footer /> */}
    </div>
  );
}
