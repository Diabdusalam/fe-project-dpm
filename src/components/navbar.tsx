import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600";
  const [open, setOpen] = useState(false);
  type SubMenu = {
    name: string;
    path: string;
  };

  const informasiMenu: SubMenu[] = [
    { name: "Berita", path: "/informasi/berita" },
    // { name: "Non Perizinan", path: "/pelayanan/non-perizinan" },
    // { name: "Tracking", path: "/pelayanan/tracking" },
  ];
  return (
    <nav className="z-auto">
      <div className="bg-blue-900 text-white text-xs px-4 md:px-16 py-2 flex justify-between">
        <div className="flex gap-4">
          <span>📞 (0967) 536 635</span>
          <span>✉️ info@papuatengah.go.id</span>
        </div>
        <div className="hidden md:flex gap-4">
          {/* <span>Bahasa Indonesia</span>
          <span>Aksesibilitas</span> */}
        </div>
      </div>
      <div className="bg-white shadow px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="font-bold text-blue-900">DPM-PTSP PAPUA TENGAH</div>

        <div className="hidden md:flex gap-6 text-sm">
          <NavLink
            to="/beranda
"
            className={navClass}
          >
            Beranda
          </NavLink>

          <NavLink to="/tentang-kami" className={navClass}>
            Tentang Kami
          </NavLink>
          {/* <NavLink to="/layanan">Layanan</NavLink> */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-blue-600">Informasi ▾</button>

            {open && (
              <div className="absolute top-full left-0 pt-2 w-48 z-50">
                {" "}
                {/* pt-2 menggantikan mt-2 */}
                <div className="bg-white shadow-lg rounded-md py-2">
                  {informasiMenu.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-blue-50"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <NavLink to="/informasi" className={navClass}>
            Informasi
          </NavLink> */}
          <NavLink to="/Pelayanan" className={navClass}>
            Pelayanan
          </NavLink>
          <NavLink to="/aplikasi" className={navClass}>
            Aplikasi
          </NavLink>
          <NavLink to="/kontak" className={navClass}>
            Kontak
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
