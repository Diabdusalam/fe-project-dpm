import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet />

        {/* <div className="absolute inset-0 z-10 flex items-center">
          <HeroContent />
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
// <header>
{
  /* <div className="p-4 font-black justify-center items-center">
          <div className="text-center">
            {" "}
            <h1 className="text-2xl font-bold mb-4">Layout Main</h1>
            <p>
              Ini adalah layout utama untuk halaman-halaman di dalam folder
              pages.
            </p> */
}
{
  /* <div className="p-[36px]"> */
}
{
  /* <Outlet />; */
}
{
  /* </div> */
}
{
  /* <footer className="text-center text-sm text-gray-500 mt-4">
              &copy; 2026 My Website. All rights reserved.
            </footer>
          </div>
        </div> */
}
// </header>
