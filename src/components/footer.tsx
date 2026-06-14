// import {
//   Landmark,
//   Phone,
//   Mail,
//   MapPin,
//   //   Facebook as FacebookIcon,
//   //   Instagram,
//   //   Youtube,
//   //   Twitter,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <>
//       <div className="h-[3px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900" />

//       <footer style={{ backgroundColor: "#0d1628" }} className="text-white">
//         <div className="max-w-7xl mx-auto px-10 py-10">
//           <div className="grid grid-cols-4 gap-8 pb-8 border-b border-[#1a2e4a]">
//             <div className="col-span-1">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-md overflow-hidden border border-[#1e3a5c] bg-[#112040] flex items-center justify-center">
//                   <Landmark className="w-7 h-7 text-blue-400" />
//                 </div>
//                 <div>
//                   <p className="text-white font-bold text-sm tracking-wide leading-tight">
//                     DPM-PTSP
//                   </p>
//                   <p className="text-blue-400 font-bold text-sm tracking-wide leading-tight">
//                     PAPUA TENGAH
//                   </p>
//                 </div>
//               </div>

//               <p className="text-[#5a7a9c] text-xs leading-relaxed mb-5">
//                 Portal resmi Dinas Penanaman Modal dan Pelayanan Terpadu Satu
//                 Pintu Provinsi Papua Tengah. Memberikan pelayanan perizinan dan
//                 informasi investasi yang cepat, mudah, dan transparan.
//               </p>

//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
//                   <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
//                   <span>(0987) 636.635</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
//                   <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
//                   <span>info@dpmptsp.papuatengah.go.id</span>
//                 </div>
//                 <div className="flex items-start gap-2 text-[#6b8cae] text-xs">
//                   <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
//                   <span>
//                     Jln. Merdeka No. 130, Nabire
//                     <br />
//                     Papua Tengah – Indonesia
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-1">
//               <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
//                 Menu Utama
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   "Beranda",
//                   "Tentang Kami",
//                   "Informasi",
//                   "Pelayanan",
//                   "Publikasi",
//                   "Kontak",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-[#8fb3d9] text-sm hover:text-white transition-colors duration-200"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-span-1">
//               <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
//                 Layanan Populer
//               </h3>
//               <ul className="space-y-3">
//                 {[
//                   "Perizinan Berusaha",
//                   "Perizinan Non Berusaha",
//                   "Pengaduan Online",
//                   "Informasi Investasi",
//                   "Layanan Informasi Publik",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a
//                       href="#"
//                       className="text-[#8fb3d9] text-sm hover:text-white transition-colors duration-200"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="col-span-1">
//               <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
//                 Ikuti Kami
//               </h3>

//               <div className="flex gap-2 mb-8">
//                 {[
//                   { Icon: Mail },
//                   { Icon: Mail },
//                   { Icon: Mail },
//                   { Icon: Mail },
//                   //   { Icon: FacebookIcon },
//                   //   { Icon: Instagram },
//                   //   { Icon: Youtube },
//                   //   { Icon: Twitter },
//                 ].map(({ Icon }, i) => (
//                   <a
//                     key={i}
//                     href="#"
//                     className="w-10 h-10 flex items-center justify-center rounded-md bg-[#112040] border border-[#1e3a5c] text-[#8fb3d9] hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-200"
//                   >
//                     <Icon className="w-4 h-4" />
//                   </a>
//                 ))}
//               </div>

//               <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
//                 Statistik Layanan
//               </h3>
//               <div className="flex gap-10">
//                 <div>
//                   <p className="text-white text-3xl font-extrabold leading-none">
//                     500+
//                   </p>
//                   <p className="text-[#6b8cae] text-xs mt-1">Izin Terbit</p>
//                 </div>
//                 <div>
//                   <p className="text-white text-3xl font-extrabold leading-none">
//                     10
//                   </p>
//                   <p className="text-[#6b8cae] text-xs mt-1">Kabupaten/Kota</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="pt-5 flex items-center justify-between text-xs text-[#3d5a7a]">
//             <p>© 2026 DPM-PTSP Papua Tengah. All rights reserved.</p>
//             <div className="flex gap-6">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Kebijakan Privasi
//               </a>
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-200"
//               >
//                 Syarat & Ketentuan
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

import { InstagramIcon, TwitterIcon } from "@/assets/icon";
import { Mail, MapPin, Phone } from "lucide-react";
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
export default function Footer() {
  return (
    <>
      {/* Top blue accent line */}
      <div className="h-[3px] bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900" />

      <footer style={{ backgroundColor: "#0d1628" }} className="text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10">
          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#1a2e4a]">
            {/* Kolom 1 - Brand & Kontak */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="w-12 h-12 rounded-md overflow-hidden border border-[#1e3a5c] bg-[#112040] flex items-center justify-center">
                  <Landmark className="w-7 h-7 text-blue-400" />
                </div> */}
                <img
                  src="/logo_1.png"
                  alt="Logo"
                  className="h-10 w-auto sm:h-12 md:h-14"
                />
                <div>
                  <p className="text-white font-bold text-sm tracking-wide leading-tight">
                    DPM-PTSP
                  </p>
                  <p className="text-blue-400 font-bold text-sm tracking-wide leading-tight">
                    PAPUA TENGAH
                  </p>
                </div>
              </div>

              <p className="text-[#5a7a9c] text-xs leading-relaxed mb-5">
                Portal resmi Dinas Penanaman Modal dan Pelayanan Terpadu Satu
                Pintu Provinsi Papua Tengah. Memberikan pelayanan perizinan dan
                informasi investasi yang cepat, mudah, dan transparan.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
                  <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>(0987) 636.635</span>
                </div>

                <div className="flex items-center gap-2 text-[#6b8cae] text-xs">
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="break-all">
                    info@dpmptsp.papuatengah.go.id
                  </span>
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
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Menu Utama
              </h3>

              <ul className="space-y-1">
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
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Layanan Populer
              </h3>

              <ul className="space-y-1">
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
            <div>
              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-5">
                Ikuti Kami
              </h3>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[FacebookIcon, InstagramIcon, TwitterIcon, Mail].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center rounded-md bg-[#112040] border border-[#1e3a5c] text-[#8fb3d9] hover:bg-blue-800 hover:text-white hover:border-blue-500 transition-all duration-200"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ),
                )}
              </div>

              <h3 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
                Statistik Layanan
              </h3>

              <div className="flex flex-wrap gap-6 sm:gap-10">
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
          <div className="pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-[#3d5a7a]">
            <p className="text-center md:text-left">
              © 2026 DPM-PTSP Papua Tengah. All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center">
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
