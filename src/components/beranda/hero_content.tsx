// export default function HeroContent() {
//   return (
//     <div className="relative z-10 h-full flex items-center px-4 md:px-28 w-full ">
//       {/* LEFT */}
//       <div className="max-w-xl text-white">
//         <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
//           Selamat Datang di Portal Resmi
//         </span>

import { NavLink } from "react-router-dom";

//         <h1 className="mt-4 text-2xl md:text-5xl font-bold leading-tight">
//           INVESTASI & PERIZINAN PAPUA TENGAH
//         </h1>

//         <p className="mt-4 text-sm md:text-lg text-gray-200">
//           Memudahkan pelayanan perizinan dan meningkatkan investasi untuk Papua
//           Tengah
//         </p>

//         {/* BUTTON */}
//         <div className="mt-6 flex flex-col sm:flex-row gap-3">
//           <button className="bg-blue-600 px-5 py-2 rounded-full">
//             Ajukan Perizinan
//           </button>
//           <button className="bg-white text-black px-5 py-2 rounded-full">
//             Informasi Layanan
//           </button>
//         </div>
//       </div>

//       <div className="hidden md:block absolute right-36 bottom-8">
//         <img src="/foto_gubernur.png" className="w-[400px] md:w-[500px]" />

//         <div className="absolute bottom-6 -left-30 bg-white px-4 py-2 rounded shadow text-xs ">
//           <span className="font-semibold">Meki Nawipa, S.H</span> <br />{" "}
//           Gubernur Papua Tengah
//         </div>

//         <div className="absolute bottom-6 -right-2 bg-white px-4 py-2 rounded shadow text-xs">
//           <span className="font-semibold">Deinas Geley, S.Sos., M.Si</span>{" "}
//           <br /> Wakil Gubernur Papua Tengah
//         </div>
//       </div>
//     </div>
//   );
// }
interface HeroContentProps {
  title?: string;
  description?: string | null;
  link?: string;
}

export default function HeroContent({
  title,
  description,
  link,
}: HeroContentProps) {
  return (
    <div className="relative z-10 h-full flex items-center px-4 md:px-28 w-full">
      <div className="max-w-xl text-white">
        <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
          Selamat Datang di Portal Resmi
        </span>

        <h1 className="mt-4 text-2xl md:text-5xl font-bold leading-tight">
          {title || "INVESTASI & PERIZINAN PAPUA TENGAH"}
        </h1>

        <p className="mt-4 text-sm md:text-lg text-gray-200">
          {description ||
            "Memudahkan pelayanan perizinan dan meningkatkan investasi untuk Papua Tengah"}
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <NavLink
            to={`${link}`}
            className="bg-blue-600 px-5 py-2 rounded-full text-center"
          >
            Informasi Layanan
          </NavLink>

          {/* <button className="bg-white text-black px-5 py-2 rounded-full">
            Informasi Layanan
          </button> */}
        </div>
      </div>

      <div className="hidden md:block absolute right-36 bottom-8">
        <img src="/foto_gubernur.png" className="w-[400px] md:w-[500px]" />

        <div className="absolute bottom-6 -left-30 bg-white px-4 py-2 rounded shadow text-xs">
          <span className="font-semibold">Meki Nawipa, S.H</span>
          <br />
          Gubernur Papua Tengah
        </div>

        <div className="absolute bottom-6 -right-2 bg-white px-4 py-2 rounded shadow text-xs">
          <span className="font-semibold">Deinas Geley, S.Sos., M.Si</span>
          <br />
          Wakil Gubernur Papua Tengah
        </div>
      </div>
    </div>
  );
}
