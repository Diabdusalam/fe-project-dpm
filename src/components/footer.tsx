// import {
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
// } from "react-icons/fa";
// import { HiOutlineArrowRight } from "react-icons/hi";
// import { MdVerified } from "react-icons/md";

// const menuUtama = [
//   "Beranda",
//   "Tentang Kami",
//   "Informasi",
//   "Pelayanan",
//   "Publikasi",
//   "Kontak",
// ];

// const layananPopuler = [
//   "Perizinan Berusaha",
//   "Perizinan Non Berusaha",
//   "Pengaduan Online",
//   "Informasi Investasi",
//   "Layanan Informasi Publik",
// ];

// const socialLinks = [
//   { icon: <FaFacebookF />, label: "Facebook", href: "#" },
//   { icon: <FaInstagram />, label: "Instagram", href: "#" },
//   { icon: <FaYoutube />, label: "YouTube", href: "#" },
//   { icon: <FaTwitter />, label: "Twitter", href: "#" },
// ];

// const stats = [
//   { value: "500+", label: "Izin Terbit" },
//   { value: "10", label: "Kabupaten/Kota" },
// ];

// export default function FooterDPMPTSP() {
//   return (
//     <footer className="bg-[#0f2d4a] text-white font-sans">
//       {/* Top strip */}
//       <div className="bg-[#0a2035] border-b border-white/10 py-2 px-10">
//         <div className="flex items-center gap-2 text-xs text-blue-300">
//           <MdVerified className="text-blue-400 text-sm" />
//           <span>Pelayanan Resmi Pemerintah Provinsi Papua Tengah</span>
//         </div>
//       </div>

//       {/* Main footer content */}
//       <div className="px-10 pt-10 pb-0">
//         <div className="grid grid-cols-1 md:grid-cols-[1.9fr_0.9fr_1.3fr_1fr] gap-10">
//           {/* Brand & Contact */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
//                 <svg
//                   viewBox="0 0 100 100"
//                   className="w-8 h-8"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect
//                     x="8"
//                     y="8"
//                     width="84"
//                     height="84"
//                     rx="10"
//                     fill="#0f2d4a"
//                   />
//                   <text
//                     x="50"
//                     y="66"
//                     textAnchor="middle"
//                     fontSize="48"
//                     fontWeight="900"
//                     fill="#fff"
//                     fontFamily="Arial"
//                   >
//                     D
//                   </text>
//                 </svg>
//               </div>
//               <div>
//                 <p className="text-sm font-bold tracking-wide leading-tight text-white uppercase">
//                   DPM-PTSP
//                 </p>
//                 <p className="text-[11px] text-blue-300 font-medium uppercase tracking-widest">
//                   Papua Tengah
//                 </p>
//               </div>
//             </div>

//             <p className="text-[12.5px] leading-relaxed text-slate-300 mb-5">
//               Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Provinsi
//               Papua Tengah. Memberikan pelayanan perizinan dan non perizinan
//               investasi yang cepat, mudah, dan transparan.
//             </p>

//             <div className="space-y-3">
//               <div className="flex items-start gap-3 text-[12.5px] text-slate-300">
//                 <FaPhone className="text-blue-400 mt-0.5 flex-shrink-0 text-xs" />
//                 <span>(0967) 536 400</span>
//               </div>
//               <div className="flex items-start gap-3 text-[12.5px] text-slate-300">
//                 <FaEnvelope className="text-blue-400 mt-0.5 flex-shrink-0 text-xs" />
//                 <span>dpmptsp@papuatengah.go.id</span>
//               </div>
//               <div className="flex items-start gap-3 text-[12.5px] text-slate-300">
//                 <FaMapMarkerAlt className="text-blue-400 mt-0.5 flex-shrink-0 text-xs" />
//                 <span>Jl. Mandala No. 19, Nabire, Papua Tengah</span>
//               </div>
//             </div>
//           </div>

//           {/* Menu Utama */}
//           <div>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
//               Menu Utama
//             </h3>
//             <ul className="space-y-2.5">
//               {menuUtama.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="flex items-center gap-1.5 text-[12.5px] text-slate-300 hover:text-white hover:gap-2.5 transition-all duration-200 group"
//                   >
//                     <HiOutlineArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all text-xs" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Layanan Populer */}
//           <div>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
//               Layanan Populer
//             </h3>
//             <ul className="space-y-2.5">
//               {layananPopuler.map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="flex items-center gap-1.5 text-[12.5px] text-slate-300 hover:text-white hover:gap-2.5 transition-all duration-200 group"
//                   >
//                     <HiOutlineArrowRight className="text-blue-400 opacity-0 group-hover:opacity-100 transition-all text-xs" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Ikuti Kami & Statistik */}
//           <div>
//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4 pb-2 border-b border-white/10">
//               Ikuti Kami
//             </h3>
//             <div className="flex gap-2.5 mb-8">
//               {socialLinks.map(({ icon, label, href }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   aria-label={label}
//                   className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center text-white text-sm transition-all duration-200 hover:scale-110"
//                 >
//                   {icon}
//                 </a>
//               ))}
//             </div>

//             <h3 className="text-[11px] font-bold uppercase tracking-widest text-white mb-4">
//               Statistik Layanan
//             </h3>
//             <div className="flex gap-6">
//               {stats.map(({ value, label }) => (
//                 <div key={label}>
//                   <p className="text-3xl font-extrabold text-white leading-none">
//                     {value}
//                   </p>
//                   <p className="text-[11px] text-blue-300 mt-1">{label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="mx-10 mt-10 border-t border-white/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
//         <p className="text-[11px] text-slate-400">
//           © 2024 DPM-PTSP Papua Tengah. All rights reserved.
//         </p>
//         <div className="flex gap-5">
//           {["Kebijakan Privasi", "Syarat & Ketentuan"].map((link) => (
//             <a
//               key={link}
//               href="#"
//               className="text-[11px] text-slate-400 hover:text-white transition-colors"
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }
import {
  Landmark,
  Phone,
  Mail,
  MapPin,
  //   Facebook as FacebookIcon,
  //   Instagram,
  //   Youtube,
  //   Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Top blue accent line */}
      <div className="h-[3px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900" />

      <footer style={{ backgroundColor: "#0d1628" }} className="text-white">
        <div className="max-w-7xl mx-auto px-10 py-10">
          {/* Main Grid */}
          <div className="grid grid-cols-4 gap-8 pb-8 border-b border-[#1a2e4a]">
            {/* Kolom 1 - Brand & Kontak */}
            <div className="col-span-1">
              {/* Logo + Nama */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-md overflow-hidden border border-[#1e3a5c] bg-[#112040] flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-wide leading-tight">
                    DPM-PTSP
                  </p>
                  <p className="text-blue-400 font-bold text-sm tracking-wide leading-tight">
                    PAPUA TENGAH
                  </p>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="text-[#5a7a9c] text-xs leading-relaxed mb-5">
                Portal resmi Dinas Penanaman Modal dan Pelayanan Terpadu Satu
                Pintu Provinsi Papua Tengah. Memberikan pelayanan perizinan dan
                informasi investasi yang cepat, mudah, dan transparan.
              </p>

              {/* Kontak */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
                  <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>(0987) 636.635</span>
                </div>
                <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>info@dpmptsp.papuatengah.go.id</span>
                </div>
                <div className="flex items-start gap-2 text-[#6b8cae] text-xs">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                  <span>
                    Jln. Merdeka No. 130, Nabire
                    <br />
                    Papua Tengah – Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Kolom 2 - Menu Utama */}
            <div className="col-span-1">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Menu Utama
              </h3>
              <ul className="space-y-3">
                {[
                  "Beranda",
                  "Tentang Kami",
                  "Informasi",
                  "Pelayanan",
                  "Publikasi",
                  "Kontak",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#8fb3d9] text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 3 - Layanan Populer */}
            <div className="col-span-1">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Layanan Populer
              </h3>
              <ul className="space-y-3">
                {[
                  "Perizinan Berusaha",
                  "Perizinan Non Berusaha",
                  "Pengaduan Online",
                  "Informasi Investasi",
                  "Layanan Informasi Publik",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#8fb3d9] text-sm hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom 4 - Ikuti Kami + Statistik */}
            <div className="col-span-1">
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Ikuti Kami
              </h3>

              {/* Social Icons */}
              <div className="flex gap-2 mb-8">
                {[
                  { Icon: Mail },
                  { Icon: Mail },
                  { Icon: Mail },
                  { Icon: Mail },
                  //   { Icon: FacebookIcon },
                  //   { Icon: Instagram },
                  //   { Icon: Youtube },
                  //   { Icon: Twitter },
                ].map(({ Icon }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-[#112040] border border-[#1e3a5c] text-[#8fb3d9] hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Statistik */}
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                Statistik Layanan
              </h3>
              <div className="flex gap-10">
                <div>
                  <p className="text-white text-3xl font-extrabold leading-none">
                    500+
                  </p>
                  <p className="text-[#6b8cae] text-xs mt-1">Izin Terbit</p>
                </div>
                <div>
                  <p className="text-white text-3xl font-extrabold leading-none">
                    10
                  </p>
                  <p className="text-[#6b8cae] text-xs mt-1">Kabupaten/Kota</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-5 flex items-center justify-between text-xs text-[#3d5a7a]">
            <p>© 2026 DPM-PTSP Papua Tengah. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
