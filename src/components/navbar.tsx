// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const navClass = ({ isActive }: { isActive: boolean }) =>
//     isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600";
//   const [open, setOpen] = useState(false);
//   type SubMenu = {
//     name: string;
//     path: string;
//   };

//   const informasiMenu: SubMenu[] = [
//     { name: "Berita", path: "/informasi/berita" },
//     // { name: "Non Perizinan", path: "/pelayanan/non-perizinan" },
//     // { name: "Tracking", path: "/pelayanan/tracking" },
//   ];
//   return (
//     <nav className="z-auto">
//       <div className="bg-blue-900 text-white text-xs px-4 md:px-16 py-2 flex justify-between">
//         <div className="flex gap-4">
//           <span>📞 (0967) 536 635</span>
//           <span>✉️ info@papuatengah.go.id</span>
//         </div>
//         <div className="hidden md:flex gap-4">
//           {/* <span>Bahasa Indonesia</span>
//           <span>Aksesibilitas</span> */}
//         </div>
//       </div>
//       <div className="bg-white shadow px-4 md:px-16 py-4 flex items-center justify-between">
//         <div className="font-bold text-blue-900">DPM-PTSP PAPUA TENGAH</div>

//         <div className="hidden md:flex gap-6 text-sm">
//           <NavLink to="/" className={navClass}>
//             Beranda
//           </NavLink>

//           <NavLink to="/tentang-kami" className={navClass}>
//             Tentang Kami
//           </NavLink>
//           {/* <NavLink to="/layanan">Layanan</NavLink> */}
//           <div
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button className="hover:text-blue-600">Informasi ▾</button>

//             {open && (
//               <div className="absolute top-full left-0 pt-2 w-48 z-50">
//                 {" "}
//                 {/* pt-2 menggantikan mt-2 */}
//                 <div className="bg-white shadow-lg rounded-md py-2">
//                   {informasiMenu.map((item) => (
//                     <NavLink
//                       key={item.path}
//                       to={item.path}
//                       className="block px-4 py-2 hover:bg-blue-50"
//                     >
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* <NavLink to="/informasi" className={navClass}>
//             Informasi
//           </NavLink> */}
//           <NavLink to="/Pelayanan" className={navClass}>
//             Pelayanan
//           </NavLink>
//           <NavLink to="/aplikasi" className={navClass}>
//             Aplikasi
//           </NavLink>
//           <NavLink to="/kontak" className={navClass}>
//             Kontak
//           </NavLink>
//         </div>
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

type SubMenu = {
  name: string;
  path: string;
};

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileInformasi, setOpenMobileInformasi] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600";

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block py-3 text-blue-600 font-semibold"
      : "block py-3 text-gray-700 hover:text-blue-600";

  const informasiMenu: SubMenu[] = [
    { name: "Berita", path: "/informasi/berita" },
    { name: "Wisata", path: "/informasi/wisata" },
  ];

  const closeMobileMenu = () => {
    setOpenMobile(false);
    setOpenMobileInformasi(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-xs px-4 md:px-16 py-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
            <span>📞 (0967) 536 635</span>
            <span className="break-all">✉️ info@papuatengah.go.id</span>
          </div>

          <div className="hidden md:flex gap-4">
            {/* <span>Bahasa Indonesia</span>
            <span>Aksesibilitas</span> */}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow px-4 md:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          {/* <NavLink
            to="/"
            className="flex items-center gap-2 text-blue-900"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo_1.png"
              alt="Logo"
              className="h-10 w-auto sm:h-12 md:h-14"
            />

            <div className="leading-tight">
              <p className="font-bold text-xs sm:text-sm md:text-base">
                DPM-PTSP
              </p>
              <p className="font-bold text-[10px] sm:text-xs md:text-sm text-blue-600">
                PAPUA TENGAH
              </p>
            </div>
          </NavLink> */}
          <NavLink
            to="/"
            className="font-bold text-blue-900 text-sm sm:text-base leading-tight flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <img
              src="/logo_1.png"
              alt="Logo"
              className="h-6 w-auto sm:h-6 md:h-7"
            />
            DPM-PTSP PAPUA TENGAH
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavLink to="/" className={navClass}>
              Beranda
            </NavLink>

            <NavLink to="/tentang-kami" className={navClass}>
              Tentang Kami
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(true)}
              onMouseLeave={() => setOpenDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-600">
                Informasi <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown && (
                <div className="absolute top-full left-0 pt-2 w-48 z-50">
                  <div className="bg-white shadow-lg rounded-md py-2">
                    {informasiMenu.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/pelayanan" className={navClass}>
              Pelayanan
            </NavLink>

            <NavLink to="/aplikasi" className={navClass}>
              Aplikasi
            </NavLink>

            <NavLink to="/kontak" className={navClass}>
              Kontak
            </NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setOpenMobile((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 text-blue-900"
          >
            {openMobile ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMobile && (
          <div className="md:hidden mt-4 border-t border-gray-100 pt-3 text-sm">
            <NavLink
              to="/"
              className={mobileNavClass}
              onClick={closeMobileMenu}
            >
              Beranda
            </NavLink>

            <NavLink
              to="/tentang-kami"
              className={mobileNavClass}
              onClick={closeMobileMenu}
            >
              Tentang Kami
            </NavLink>

            {/* Mobile Informasi Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => setOpenMobileInformasi((prev) => !prev)}
                className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600"
              >
                <span>Informasi</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMobileInformasi ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMobileInformasi && (
                <div className="pl-4 border-l border-gray-100">
                  {informasiMenu.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block py-3 text-gray-600 hover:text-blue-600"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/pelayanan"
              className={mobileNavClass}
              onClick={closeMobileMenu}
            >
              Pelayanan
            </NavLink>

            <NavLink
              to="/aplikasi"
              className={mobileNavClass}
              onClick={closeMobileMenu}
            >
              Aplikasi
            </NavLink>

            <NavLink
              to="/kontak"
              className={mobileNavClass}
              onClick={closeMobileMenu}
            >
              Kontak
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
