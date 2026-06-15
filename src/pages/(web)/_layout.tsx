import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function LayoutMain() {
  return (
    <div className="relative">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
