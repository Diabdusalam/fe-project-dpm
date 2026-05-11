// "use client";
// import { useRef } from "react";

// const featured = {
//   nama: "Jelajahi Surga Yang Tersembunyi",
//   deskripsi:
//     "Papua Tengah menyimpan keajaiban alam yang belum banyak dijelajahi — dari pegunungan tinggi, danau alami, hingga pantai yang memukau.",
//   gambar: "/wisata/featured.jpg",
//   slug: "#",
// };

// const destinations = [
//   {
//     nama: "Danau Habema",
//     lokasi: "Puncak Jaya",
//     deskripsi:
//       "Danau tertinggi di Papua yang dikelilingi pegunungan hijau nan megah.",
//     gambar: "/wisata/habema.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Pantai Afire",
//     lokasi: "Nabire",
//     deskripsi:
//       "Pantai eksotis dengan pasir putih dan air biru jernih yang memesona.",
//     gambar: "/wisata/pantai-afire.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Danau Paniai",
//     lokasi: "Paniai",
//     deskripsi:
//       "Danau alami yang tenang dengan pemandangan alam yang luar biasa indah.",
//     gambar: "/wisata/paniai.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Kampung Selem",
//     lokasi: "Mimika",
//     deskripsi:
//       "Kampung adat dengan budaya dan tradisi lokal yang masih terjaga.",
//     gambar: "/wisata/selem.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Danau Aitinyo",
//     lokasi: "Intan Jaya",
//     deskripsi: "Danau tersembunyi di balik hutan lebat dengan keindahan alami.",
//     gambar: "/wisata/aitinyo.jpg",
//     slug: "#",
//   },
// ];

// const MapPinIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-3 h-3"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//     />
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//     />
//   </svg>
// );

// export default function ContentKeindahan() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (dir: "left" | "right") => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: dir === "right" ? 230 : -230,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <section className="py-14 bg-[#0f1f3d]">
//       <div className="max-w-6xl mx-auto px-4 md:px-16">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-white">
//             Keindahan Papua Tengah?
//           </h2>
//           <p className="text-blue-200 text-sm mt-2">
//             Jelajahi pesona alam dan kekayaan budaya Papua Tengah yang memukau.
//           </p>
//           <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
//         </div>

//         <div className="flex flex-col gap-4 items-stretch">
//           <div className="shrink-0 rounded-2xl overflow-hidden flex flex-col group">
//             <div className="h-52 shrink-0 overflow-hidden bg-gray-700">
//               <img
//                 src="/wisata/featured.jpg"
//                 alt="Featured"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   (e.target as HTMLImageElement).src =
//                     "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600";
//                 }}
//               />
//             </div>
//             <div className="p-5 flex flex-col flex-1 bg-blue-600">
//               <h3 className="font-bold text-white text-lg leading-snug mb-2">
//                 Jelajahi Surga Yang Tersembunyi
//               </h3>
//               <p className="text-blue-100 text-xs leading-relaxed mb-4 flex-1">
//                 Papua Tengah menyimpan keajaiban alam yang belum banyak
//                 dijelajahi — dari pegunungan tinggi, danau alami, hingga pantai
//                 yang memukau.
//               </p>
//               <a
//                 href="#"
//                 className="inline-flex items-center gap-1 bg-blue-500 hover:bg-blue-400 text-white text-xs px-4 py-2 rounded-full transition-colors font-medium w-fit"
//               >
//                 Jelajahi Sekarang
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-3 h-3"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div className="flex-1 relative">
//             <button
//               onClick={() => scroll("left")}
//               className="absolute -left-3 top-[30%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="absolute -right-3 top-[30%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-50"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-4 h-4 text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>

//             <div
//               ref={scrollRef}
//               className="flex gap-3 overflow-x-auto h-full"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {destinations.map((dest, i) => (
//                 <div
//                   key={i}
//                   className="shrink-0 w-[210px] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white group flex flex-col"
//                 >
//                   <div className="h-36 shrink-0 overflow-hidden bg-gray-300">
//                     <img
//                       src={dest.gambar}
//                       alt={dest.nama}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       onError={(e) => {
//                         (e.target as HTMLImageElement).src =
//                           `https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400`;
//                       }}
//                     />
//                   </div>
//                   <div className="p-3 flex flex-col flex-1">
//                     <p className="text-xs text-blue-500 flex items-center gap-1 mb-1">
//                       <MapPinIcon /> {dest.lokasi}
//                     </p>
//                     <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">
//                       {dest.nama}
//                     </h4>
//                     <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 mb-2 flex-1">
//                       {dest.deskripsi}
//                     </p>
//                     <a
//                       href={dest.slug}
//                       className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
//                     >
//                       Lihat Detail
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-3 h-3"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { useRef } from "react";

const destinations = [
  {
    nama: "Pantai Ahe",
    lokasi: "Nabire",
    deskripsi:
      "Pantai eksotis dengan pasir putih dan air biru jernih yang memesona, menjadikannya surga wisata bahari.",
    gambar: "/wisata/pantai-afire.jpg",
    slug: "#",
  },
  {
    nama: "Danau Mamas",
    lokasi: "Nabire",
    deskripsi:
      "Danau alami yang tenang dengan pemandangan alam yang luar biasa indah dan ekosistem alam yang terjaga.",
    gambar: "/wisata/habema.jpg",
    slug: "#",
  },
  {
    nama: "Kampung Sekan",
    lokasi: "Deiyai / Paniai",
    deskripsi:
      "Kampung adat yang menjadi representasi Papua yang sesungguhnya dengan tradisi adat yang masih terjaga.",
    gambar: "/wisata/selem.jpg",
    slug: "#",
  },
  {
    nama: "Danau Idenberg",
    lokasi: "Intan Jaya",
    deskripsi:
      "Danau tersembunyi di balik hutan lebat yang yang keindahannya menjadi obyek alam yang unik.",
    gambar: "/wisata/aitinyo.jpg",
    slug: "#",
  },
  {
    nama: "Danau Idenberg",
    lokasi: "Intan Jaya",
    deskripsi:
      "Danau tersembunyi di balik hutan lebat yang yang keindahannya menjadi obyek alam yang unik.",
    gambar: "/wisata/aitinyo.jpg",
    slug: "#",
  },
];

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3 h-3"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function ContentKeindahan() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "right" ? 260 : -260,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="py-14 bg-[#0f1f3d]">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-300 text-xs uppercase tracking-widest mb-2 font-medium">
            Wisata &amp; Budaya
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
            Keindahan Papua Tengah
          </h2>
          <p className="text-blue-200 text-sm mt-2">
            Jelajahi pesona alam dan kekayaan budaya Papua Tengah yang memukau.
          </p>
          <div className="w-16 h-1 bg-blue-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Featured Card — horizontal layout */}
        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row mb-6 min-h-[220px]">
          {/* Kiri: teks */}
          <div className="bg-blue-600 p-6 md:p-8 flex flex-col justify-center md:w-1/2">
            <span className="inline-flex items-center gap-1 bg-blue-500 text-blue-100 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
              Jelajahi Sekarang
            </span>
            <h3 className="font-bold text-white text-2xl md:text-3xl leading-snug mb-3">
              Jelajahi Surga Yang
              <br />
              Tersembunyi
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-5">
              Papua Tengah menyimpan keindahan alam yang luar biasa, mulai dari
              pegunungan hijau, air terjun spektakuler, hingga pantai alami yang
              masih alami.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-700 text-xs font-bold px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition-colors"
            >
              Lihat Semua
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          {/* Kanan: gambar */}
          <div className="md:w-1/2 h-52 md:h-auto overflow-hidden">
            <img
              src="/wisata/featured.jpg"
              alt="Featured"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800";
              }}
            />
          </div>
        </div>
        <div className="relative">
          {/* Tombol Kiri */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Tombol Kanan */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="shrink-0 w-[240px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col"
              >
                <div className="relative h-40 overflow-hidden bg-gray-300">
                  <img
                    src={dest.gambar}
                    alt={dest.nama}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400";
                    }}
                  />
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <MapPinIcon /> {dest.lokasi}
                  </span>
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                    {dest.nama}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-2 flex-1">
                    {dest.deskripsi}
                  </p>
                  <a
                    href={dest.slug}
                    className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
                  >
                    Lihat Detail
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Destination Grid — 4 kolom */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-40 overflow-hidden bg-gray-300">
                <img
                  src={dest.gambar}
                  alt={dest.nama}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      `https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400`;
                  }}
                />

                <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <MapPinIcon /> {dest.lokasi}
                </span>
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h4 className="font-bold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                  {dest.nama}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-2 flex-1">
                  {dest.deskripsi}
                </p>
                <a
                  href={dest.slug}
                  className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
                >
                  Lihat Detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
