// // components/BeritaPengumuman.tsx
// "use client";
// import { useState } from "react";

// const beritaUtama = {
//   tanggal: "30 Januari 2026",
//   judul: "Investasi Besar Masuk ke Papua Tengah 2026",
//   deskripsi:
//     "Pemerintah Provinsi Papua Tengah semakin menarik perhatian investor di tahun 2026 dengan berbagai insentif dan kemudahan.",
//   gambar: "/berita/berita-utama.jpg",
//   slug: "#",
// };

// const beritaLainnya = [
//   {
//     tanggal: "20 Jan 2026",
//     judul: "Pariwisata Meningkat, Wisata Alam Papua Tengah Memukau",
//     gambar: "/berita/berita1.jpg",
//     slug: "#",
//   },
//   {
//     tanggal: "25 Jan 2026",
//     judul: "DPM-PTSP Perkuat Layanan Perizinan Berbasis Digital",
//     gambar: "/berita/berita2.jpg",
//     slug: "#",
//   },
//   {
//     tanggal: "20 Jan 2026",
//     judul: "Workshop UMKM: Meningkatkan Daya Saing Produk Lokal",
//     gambar: "/berita/berita3.jpg",
//     slug: "#",
//   },
//   {
//     tanggal: "20 Jan 2026",
//     judul: "Ekspor Produk Lokal Papua Tengah Meningkat 20%",
//     gambar: "/berita/berita4.jpg",
//     slug: "#",
//   },
// ];
// interface News {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt: string;
//   featured_image: string;
//   published_at: string;
//   is_favorite: boolean;
// }
// const CalendarIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-3.5 h-3.5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//     />
//   </svg>
// );

// export default function ContentBerita() {
//   const [page, setPage] = useState(0);

//   return (
//     <section className="py-14 px-4 md:px-16 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//               Berita & Pengumuman
//             </h2>
//             <div className="w-12 h-1 bg-yellow-400 rounded-full mt-2" />
//           </div>
//           <a
//             href="#"
//             className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition-colors font-medium"
//           >
//             Lihat Semua
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4"
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
//           </a>
//         </div>

//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-2/5 w-full">
//             <a
//               href={beritaUtama.slug}
//               className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="relative h-52 bg-gray-200 overflow-hidden">
//                 <img
//                   src={beritaUtama.gambar}
//                   alt={beritaUtama.judul}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                   onError={(e) => {
//                     (e.target as HTMLImageElement).src =
//                       "https://placehold.co/600x300/e2e8f0/94a3b8?text=Berita";
//                   }}
//                 />
//               </div>
//               <div className="p-4">
//                 <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
//                   <CalendarIcon /> {beritaUtama.tanggal}
//                 </p>
//                 <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors">
//                   {beritaUtama.judul}
//                 </h3>
//                 <p className="text-gray-500 text-sm leading-relaxed mb-3">
//                   {beritaUtama.deskripsi}
//                 </p>
//                 <span className="text-blue-600 text-sm font-medium hover:underline">
//                   Baca Selengkapnya
//                 </span>
//               </div>
//             </a>
//           </div>

//           <div className="md:w-3/5 w-full">
//             <div className="grid grid-cols-2 gap-4">
//               {beritaLainnya.map((berita, i) => (
//                 <a
//                   key={i}
//                   href={berita.slug}
//                   className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100"
//                 >
//                   <div className="relative h-32 bg-gray-200 overflow-hidden">
//                     <img
//                       src={berita.gambar}
//                       alt={berita.judul}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                       onError={(e) => {
//                         (e.target as HTMLImageElement).src =
//                           "https://placehold.co/400x200/e2e8f0/94a3b8?text=Berita";
//                       }}
//                     />
//                   </div>
//                   <div className="p-3">
//                     <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
//                       <CalendarIcon /> {berita.tanggal}
//                     </p>
//                     <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
//                       {berita.judul}
//                     </h4>
//                     <span className="text-blue-600 text-xs font-medium hover:underline">
//                       Baca Selengkapnya
//                     </span>
//                   </div>
//                 </a>
//               ))}
//             </div>

//             <div className="flex justify-center gap-2 mt-5">
//               {[0, 1, 2].map((i) => (
//                 <button
//                   key={i}
//                   onClick={() => setPage(i)}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     page === i ? "bg-blue-600 w-6" : "bg-gray-300 w-2"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { getBerandaBerita } from "@/query/get.berita.query";
import { useEffect, useState } from "react";

interface News {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  is_favorite: boolean;
}

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function ContentBerita() {
  const [page, setPage] = useState(0);
  const [news, setNews] = useState<News[]>([]);
  const [featuredNews, setFeaturedNews] = useState<News | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getBerandaBerita();

        // response.data.data dari backend
        const data: News[] = response.data.data;

        setNews(data);

        const favorite = data.find((item) => item.is_favorite);

        setFeaturedNews(favorite || data[0] || null);
      } catch (error) {
        console.error("Failed fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  if (!featuredNews) {
    return (
      <section className="py-14 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="py-14 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Berita & Pengumuman
            </h2>
            <div className="w-12 h-1 bg-yellow-400 rounded-full mt-2" />
          </div>

          <a
            href="/informasi/berita"
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-2 rounded-full transition-colors font-medium"
          >
            Lihat Semua
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
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

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Featured News */}
          <div className="md:w-2/5 w-full">
            <a
              href={`/informasi/berita/${featuredNews.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52 bg-gray-200 overflow-hidden">
                <img
                  src={featuredNews.featured_image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://placehold.co/600x300/e2e8f0/94a3b8?text=Berita";
                  }}
                />
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                  <CalendarIcon />
                  {formatDate(featuredNews.published_at)}
                </p>

                <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                  {featuredNews.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {featuredNews.excerpt}
                </p>

                <span className="text-blue-600 text-sm font-medium hover:underline">
                  Baca Selengkapnya
                </span>
              </div>
            </a>
          </div>

          {/* News List */}
          <div className="md:w-3/5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news
                .filter((item) => item.id !== featuredNews.id)
                .map((berita) => (
                  <a
                    key={berita.id}
                    href={`/informasi/berita/${berita.slug}`}
                    className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100"
                  >
                    <div className="relative h-32 bg-gray-200 overflow-hidden">
                      <img
                        src={berita.featured_image}
                        alt={berita.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://placehold.co/400x200/e2e8f0/94a3b8?text=Berita";
                        }}
                      />
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-gray-400 mb-1 flex items-center gap-1">
                        <CalendarIcon />
                        {formatDate(berita.published_at)}
                      </p>

                      <h4 className="font-semibold text-gray-800 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {berita.title}
                      </h4>

                      <span className="text-blue-600 text-xs font-medium hover:underline">
                        Baca Selengkapnya
                      </span>
                    </div>
                  </a>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-5">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    page === i ? "bg-blue-600 w-6" : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
