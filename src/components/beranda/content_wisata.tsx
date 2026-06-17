// "use client";
// import { useRef, useState } from "react";

// const destinations = [
//   {
//     nama: "Pantai Ahe",
//     lokasi: "Nabire",
//     deskripsi:
//       "Pantai eksotis dengan pasir putih dan air biru jernih yang memesona, menjadikannya surga wisata bahari.",
//     gambar: "/wisata/pantai-afire.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Danau Mamas",
//     lokasi: "Nabire",
//     deskripsi:
//       "Danau alami yang tenang dengan pemandangan alam yang luar biasa indah dan ekosistem alam yang terjaga.",
//     gambar: "/wisata/habema.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Kampung Sekan",
//     lokasi: "Deiyai / Paniai",
//     deskripsi:
//       "Kampung adat yang menjadi representasi Papua yang sesungguhnya dengan tradisi adat yang masih terjaga.",
//     gambar: "/wisata/selem.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Danau Idenberg",
//     lokasi: "Intan Jaya",
//     deskripsi:
//       "Danau tersembunyi di balik hutan lebat yang yang keindahannya menjadi obyek alam yang unik.",
//     gambar: "/wisata/aitinyo.jpg",
//     slug: "#",
//   },
//   {
//     nama: "Danau Idenberg",
//     lokasi: "Intan Jaya",
//     deskripsi:
//       "Danau tersembunyi di balik hutan lebat yang yang keindahannya menjadi obyek alam yang unik.",
//     gambar: "/wisata/aitinyo.jpg",
//     slug: "#",
//   },
// ];
// interface Tourism {
//   id: number;
//   name: string;
//   slug: string;
//   location: string;
//   description: string;
//   image: string;
//   is_favorite: boolean;
// }
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
//   const [destinations, setDestinations] = useState<Tourism[]>([]);
//   const [featured, setFeatured] = useState<Tourism | null>(null);
//   useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await getBerandaKeindahan();

//       const data = response.data;

//       setDestinations(data);

//       const favorite = data.find(
//         (item: Tourism) => item.is_favorite
//       );

//       setFeatured(favorite || data[0]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();
// }, []);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (dir: "left" | "right") => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({
//         left: dir === "right" ? 260 : -260,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <section className="py-14 bg-[#0f1f3d]">
//       <div className="max-w-6xl mx-auto px-4 md:px-16">
//         <div className="text-center mb-8">
//           <p className="text-blue-300 text-xs uppercase tracking-widest mb-2 font-medium">
//             Wisata &amp; Budaya
//           </p>
//           <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
//             Keindahan Papua Tengah
//           </h2>
//           <p className="text-blue-200 text-sm mt-2">
//             Jelajahi pesona alam dan kekayaan budaya Papua Tengah yang memukau.
//           </p>
//           <div className="w-16 h-1 bg-blue-400 rounded-full mx-auto mt-3" />
//         </div>

//         <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row mb-6 min-h-[220px]">
//           <div className="bg-blue-600 p-6 md:p-8 flex flex-col justify-center md:w-1/2">
//             <span className="inline-flex items-center gap-1 bg-blue-500 text-blue-100 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-3 h-3"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 3l14 9-14 9V3z"
//                 />
//               </svg>
//               Jelajahi Sekarang
//             </span>
//             <h3 className="font-bold text-white text-2xl md:text-3xl leading-snug mb-3">
//               Jelajahi Surga Yang
//               <br />
//               Tersembunyi
//             </h3>
//             <p className="text-blue-100 text-sm leading-relaxed mb-5">
//               Papua Tengah menyimpan keindahan alam yang luar biasa, mulai dari
//               pegunungan hijau, air terjun spektakuler, hingga pantai alami yang
//               masih alami.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 bg-white text-blue-700 text-xs font-bold px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition-colors"
//             >
//               Lihat Semua
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-3 h-3"
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
//             </a>
//           </div>

//           <div className="md:w-1/2 h-52 md:h-auto overflow-hidden">
//             <img
//               src="/wisata/featured.jpg"
//               alt="Featured"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 (e.target as HTMLImageElement).src =
//                   "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800";
//               }}
//             />
//           </div>
//         </div>
//         <div className="relative">
//           <button
//             onClick={() => scroll("left")}
//             className="absolute -left-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>

//           <button
//             onClick={() => scroll("right")}
//             className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>

//           <div
//             ref={scrollRef}
//             className="flex gap-4 overflow-x-auto pb-1"
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {destinations.map((dest, i) => (
//               <div
//                 key={i}
//                 className="shrink-0 w-[240px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col"
//               >
//                 <div className="relative h-40 overflow-hidden bg-gray-300">
//                   <img
//                     src={dest.gambar}
//                     alt={dest.nama}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     onError={(e) => {
//                       (e.target as HTMLImageElement).src =
//                         "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400";
//                     }}
//                   />
//                   <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
//                     <MapPinIcon /> {dest.lokasi}
//                   </span>
//                 </div>
//                 <div className="p-3 flex flex-col flex-1">
//                   <h4 className="font-bold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors">
//                     {dest.nama}
//                   </h4>
//                   <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-2 flex-1">
//                     {dest.deskripsi}
//                   </p>
//                   <a
//                     href={dest.slug}
//                     className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
//                   >
//                     Lihat Detail
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-3 h-3"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { getWisataKeindahan } from "@/query/get.wisata_keindahan.query";
import { useEffect, useRef, useState } from "react";

interface Tourism {
  id: number;
  name: string;
  slug: string;
  location: string;
  description: string;
  image: string;
  is_favorite: boolean;
  category: string | null;
}

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
  const [destinations, setDestinations] = useState<Tourism[]>([]);
  const [featured, setFeatured] = useState<Tourism | null>(null);
  const [loading, setLoading] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const stripHtml = (html?: string) => {
    return html ? html.replace(/<[^>]*>/g, "").trim() : "";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWisataKeindahan();

        const data: Tourism[] = response?.data?.data ?? [];

        setDestinations(data);

        const favorite = data.find((item) => item.is_favorite);
        setFeatured(favorite || data[0] || null);
      } catch (error) {
        console.error("Failed fetch tourism:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 260 : -260,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <section className="py-14 bg-[#0f1f3d]">
        <div className="max-w-6xl mx-auto px-4 md:px-16 text-center text-white">
          Loading...
        </div>
      </section>
    );
  }

  if (!featured) {
    return (
      <section className="py-14 bg-[#0f1f3d]">
        <div className="max-w-6xl mx-auto px-4 md:px-16 text-center text-white">
          Data belum tersedia
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-[#0f1f3d]">
      <div className="max-w-6xl mx-auto px-4 md:px-16">
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

        <div className="rounded-2xl overflow-hidden flex flex-col md:flex-row mb-6 min-h-[220px] bg-blue-600">
          <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
            <span className="inline-flex items-center gap-1 bg-blue-500 text-blue-100 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
              Jelajahi Sekarang
            </span>

            <h3 className="font-bold text-white text-2xl md:text-3xl leading-snug mb-3 line-clamp-2">
              {featured.name}
            </h3>

            <p className="text-blue-100 text-sm leading-relaxed mb-5 line-clamp-4">
              {stripHtml(featured.description)}
            </p>

            <a
              href={`/informasi/wisata/${featured.slug}`}
              className="inline-flex items-center gap-2 bg-white text-blue-700 text-xs font-bold px-5 py-2.5 rounded-full w-fit hover:bg-blue-50 transition-colors"
            >
              Lihat Detail →
            </a>
          </div>

          <div className="md:w-1/2 h-52 md:h-auto overflow-hidden bg-gray-300">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800";
              }}
            />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
          >
            ❮
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-[45%] -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-50"
          >
            ❯
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {destinations
              .filter((dest) => !dest.is_favorite)
              .map((dest) => (
                <div
                  key={dest.id}
                  className="shrink-0 w-[240px] rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-300">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400";
                      }}
                    />

                    <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <MapPinIcon />
                      {dest.location}
                    </span>
                  </div>

                  <div className="p-3 flex flex-col flex-1">
                    <h4 className="font-bold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {dest.name}
                    </h4>

                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-2 flex-1">
                      {stripHtml(dest.description)}
                    </p>

                    <a
                      href={`/informasi/wisata/${dest.slug}`}
                      className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
                    >
                      Lihat Detail →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
