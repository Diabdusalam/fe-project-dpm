// import { getBerandaBerita } from "@/query/get.berita.query";
// import { getSlugBerita } from "@/query/get.slug_berita.query.";
// import {
//   ArrowRight,
//   Calendar,
//   ChevronRight,
//   Clock,
//   MessageCircle,
//   User,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// // import { getSlugBerita } from "@/query/get.slug_berita.query";

// interface NewsDetail {
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   featured_image: string;
//   published_at: string;
//   author: string;
//   category: string;
// }

// const sidebarBerita = [
//   {
//     id: 1,
//     img: "https://placehold.co/80x70/1a3a5c/ffffff?text=Berita",
//     title: "Kawal Sukses Usaha di Otsus: Mara, Kecil, Sampai Besar",
//     date: "02 Maret 2026",
//   },
//   {
//     id: 2,
//     img: "https://placehold.co/80x70/2d6a9f/ffffff?text=PKK",
//     title: "PKK Polda Gelar Me'nub'e Budi Karya Bersama Polwan Polri...",
//     date: "02 Maret 2026",
//   },
// ];

// export default function ContentBerita() {
//   const { id } = useParams();

//   const [news, setNews] = useState<NewsDetail | null>(null);
//   const [sideNews, setSideNews] = useState<NewsDetail[]>([]);
//   const [loading, setLoading] = useState(true);

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("id-ID", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   useEffect(() => {
//     const fetchDetail = async () => {
//       try {
//         setLoading(true);
//         const response = await getSlugBerita(id || "");
//         const response_berita = await getBerandaBerita({ page: 1 });
//         setSideNews(response_berita.data.data || []);
//         setNews(response.data);
//       } catch (error) {
//         console.error("Failed fetch detail news:", error);
//         setNews(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetail();
//   }, [id]);

//   if (loading) {
//     return <div style={{ padding: 40 }}>Loading...</div>;
//   }

//   if (!news) {
//     return <div style={{ padding: 40 }}>Berita tidak ditemukan</div>;
//   }

//   return (
//     <div
//       style={{
//         fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif",
//         background: "#f7f8fa",
//         minHeight: "100vh",
//       }}
//     >
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//         }

//         a {
//           text-decoration: none;
//           color: inherit;
//         }

//         .article-content p {
//           margin-bottom: 16px;
//         }

//         .article-content img {
//           max-width: 100% !important;
//           height: auto !important;
//           border-radius: 8px;
//           margin: 16px 0;
//         }

//         .article-content blockquote {
//           border-left: 4px solid #2d6a9f;
//           padding: 14px 16px;
//           margin: 20px 0;
//           color: #1f2937;
//           font-style: italic;
//           background: #f0f7ff;
//           border-radius: 0 8px 8px 0;
//         }

//         .article-content a {
//           color: #2563eb;
//           text-decoration: underline;
//         }
//       `}</style>

//       <div
//         style={{
//           background: "#fff",
//           borderBottom: "1px solid #e8edf2",
//           padding: "20px 32px",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: 1200,
//             margin: "0 auto",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//           }}
//         >
//           <div>
//             <h1
//               style={{
//                 fontSize: 28,
//                 fontWeight: 800,
//                 color: "#111827",
//                 marginBottom: 6,
//               }}
//             >
//               Berita <span style={{ color: "#2d6a9f" }}>Terkini</span>
//             </h1>

//             <nav
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 6,
//                 fontSize: 13,
//                 color: "#6b7280",
//                 marginBottom: 8,
//               }}
//             >
//               <span>Beranda</span>
//               <ChevronRight size={13} />
//               <span style={{ color: "#2d6a9f", fontWeight: 500 }}>
//                 Berita Terkini
//               </span>
//             </nav>

//             {/* <p style={{ fontSize: 14, color: "#6b7280" }}>
//               Informasi terbaru seputar kegiatan, layanan, dan program DPM-PTSP
//               Papua Tengah.
//             </p> */}
//           </div>

//           {/* <button
//             onClick={() => window.history.back()}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               padding: "9px 18px",
//               border: "1.5px solid #d1d5db",
//               borderRadius: 8,
//               background: "#fff",
//               fontSize: 13,
//               fontWeight: 500,
//               color: "#374151",
//               cursor: "pointer",
//               whiteSpace: "nowrap",
//             }}
//           >
//             <ArrowLeft size={14} /> Kembali ke Beranda
//           </button> */}
//         </div>
//       </div>

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: "28px 32px",
//           display: "grid",
//           gridTemplateColumns: "300px 1fr",
//           gap: 28,
//         }}
//       >
//         <aside>
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: 12,
//               border: "1px solid #e8edf2",
//               overflow: "hidden",
//             }}
//           >
//             <div
//               style={{
//                 padding: "16px 20px",
//                 borderBottom: "1px solid #e8edf2",
//               }}
//             >
//               <h2 style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>
//                 Berita Terbaru
//               </h2>
//             </div>

//             <div>
//               {sideNews.map((item, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     display: "flex",
//                     gap: 12,
//                     padding: "14px 16px",
//                     borderBottom:
//                       i < sidebarBerita.length - 1
//                         ? "1px solid #f0f2f5"
//                         : "none",
//                     cursor: "pointer",
//                   }}
//                 >
//                   <img
//                     src={item.featured_image}
//                     alt={item.title}
//                     style={{
//                       width: 80,
//                       height: 60,
//                       borderRadius: 6,
//                       objectFit: "cover",
//                       flexShrink: 0,
//                     }}
//                   />

//                   <div>
//                     <p
//                       style={{
//                         fontSize: 13,
//                         fontWeight: 600,
//                         color: "#1f2937",
//                         lineHeight: 1.4,
//                         marginBottom: 6,
//                       }}
//                     >
//                       {item.title}
//                     </p>

//                     <span
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 4,
//                         fontSize: 11,
//                         color: "#9ca3af",
//                       }}
//                     >
//                       <Calendar size={11} /> {formatDate(item.published_at)}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ padding: 16 }}>
//               <NavLink
//                 to="/informasi/berita"
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   border: "1.5px solid #e5e7eb",
//                   borderRadius: 8,
//                   background: "#fff",
//                   fontSize: 13,
//                   fontWeight: 500,
//                   color: "#374151",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: 8,
//                 }}
//               >
//                 Lihat Semua Berita <ArrowRight size={14} />
//               </NavLink>
//             </div>
//           </div>
//         </aside>

//         <main>
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: 12,
//               border: "1px solid #e8edf2",
//               padding: "28px 32px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 10,
//                 marginBottom: 14,
//               }}
//             >
//               <span
//                 style={{
//                   background: "#dbeafe",
//                   color: "#1d4ed8",
//                   fontSize: 11,
//                   fontWeight: 700,
//                   padding: "3px 10px",
//                   borderRadius: 4,
//                   letterSpacing: "0.05em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {news.category}
//               </span>

//               <span style={{ color: "#9ca3af", fontSize: 13 }}>•</span>

//               <span style={{ fontSize: 13, color: "#6b7280" }}>
//                 {formatDate(news.published_at)}
//               </span>
//             </div>

//             <h1
//               style={{
//                 fontSize: 28,
//                 fontWeight: 800,
//                 color: "#111827",
//                 lineHeight: 1.3,
//                 marginBottom: 16,
//               }}
//             >
//               {news.title}
//             </h1>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: 20,
//                 paddingBottom: 16,
//                 borderBottom: "1px solid #f0f2f5",
//               }}
//             >
//               <div style={{ display: "flex", gap: 16 }}>
//                 <span
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 5,
//                     fontSize: 13,
//                     color: "#6b7280",
//                   }}
//                 >
//                   <User size={13} /> {news.author}
//                 </span>

//                 <span
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 5,
//                     fontSize: 13,
//                     color: "#6b7280",
//                   }}
//                 >
//                   <Clock size={13} /> 5 menit baca
//                 </span>
//               </div>

//               <div style={{ display: "flex", gap: 8 }}>
//                 <button
//                   style={{
//                     width: 32,
//                     height: 32,
//                     borderRadius: 6,
//                     background: "#1877f2",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                   }}
//                 >
//                   <Clock size={14} />
//                 </button>

//                 <button
//                   style={{
//                     width: 32,
//                     height: 32,
//                     borderRadius: 6,
//                     background: "#111",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                   }}
//                 >
//                   <Clock size={14} />
//                 </button>

//                 <button
//                   style={{
//                     width: 32,
//                     height: 32,
//                     borderRadius: 6,
//                     background: "#25d366",
//                     border: "none",
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                   }}
//                 >
//                   <MessageCircle size={14} />
//                 </button>
//               </div>
//             </div>

//             <img
//               src={news.featured_image}
//               alt={news.title}
//               style={{
//                 width: "100%",
//                 borderRadius: 10,
//                 marginBottom: 22,
//                 objectFit: "cover",
//               }}
//               onError={(e) => {
//                 (e.target as HTMLImageElement).src =
//                   "https://placehold.co/760x400/e2e8f0/94a3b8?text=Berita";
//               }}
//             />

//             <div
//               className="article-content"
//               style={{
//                 fontSize: 15,
//                 lineHeight: 1.85,
//                 color: "#374151",
//               }}
//               dangerouslySetInnerHTML={{ __html: news.content }}
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }
import { getBerandaBerita } from "@/query/get.berita.query";
import { getSlugBerita } from "@/query/get.slug_berita.query.";
import { ArrowRight, Calendar, ChevronRight, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

interface NewsDetail {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published_at: string;
  author: string;
  category: string;
}

export default function ContentBerita() {
  const { id } = useParams();

  const [news, setNews] = useState<NewsDetail | null>(null);
  const [sideNews, setSideNews] = useState<NewsDetail[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const getReadingTime = (html: string) => {
    const text = html.replace(/<[^>]*>/g, " ");
    const words = text.trim().split(/\s+/).length;

    const minutes = Math.max(1, Math.ceil(words / 200));

    return `${minutes} menit baca`;
  };
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);

        const response = await getSlugBerita(id || "");
        const responseBerita = await getBerandaBerita({ page: 1 });

        setNews(response.data);
        setSideNews(responseBerita.data.data || []);
      } catch (error) {
        console.error("Failed fetch detail news:", error);
        setNews(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!news) {
    return <div className="p-10">Berita tidak ditemukan</div>;
  }

  return (
    <div
      className="min-h-screen bg-[#f7f8fa]"
      style={{
        fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .article-content p {
          margin-bottom: 16px;
        }

        .article-content img {
          max-width: 100% !important;
          height: auto !important;
          border-radius: 8px;
          margin: 16px 0;
        }

        .article-content blockquote {
          border-left: 4px solid #2d6a9f;
          padding: 14px 16px;
          margin: 20px 0;
          color: #1f2937;
          font-style: italic;
          background: #f0f7ff;
          border-radius: 0 8px 8px 0;
        }

        .article-content a {
          color: #2563eb;
          text-decoration: underline;
        }

        .article-content table {
          width: 100%;
          overflow-x: auto;
          display: block;
        }

        .article-content iframe {
          max-width: 100%;
        }
      `}</style>

      {/* Header */}
      <div className="bg-white border-b border-[#e8edf2] px-4 sm:px-6 lg:px-8 py-5">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl sm:text-[28px] font-extrabold text-[#111827] mb-1.5">
            Berita <span className="text-[#2d6a9f]">Terkini</span>
          </h1>

          <nav className="flex items-center gap-1.5 text-[13px] text-gray-500 flex-wrap">
            <span>Beranda</span>
            <ChevronRight size={13} />
            <span className="text-[#2d6a9f] font-medium">Berita Terkini</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-7">
        {/* Sidebar */}
        <aside className="order-2 lg:order-1">
          <div className="bg-white rounded-xl border border-[#e8edf2] overflow-hidden">
            <div className="px-5 py-4 border-b border-[#e8edf2]">
              <h2 className="font-bold text-base text-[#111827]">
                Berita Terbaru
              </h2>
            </div>

            <div>
              {sideNews.map((item, i) => (
                <NavLink
                  key={i}
                  to={`/informasi/berita/${item.slug}`}
                  className="flex gap-3 px-4 py-3.5 border-b border-[#f0f2f5] hover:bg-blue-50 transition-colors"
                >
                  <img
                    src={item.featured_image}
                    alt={item.title}
                    className="w-20 h-[60px] rounded-md object-cover shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/80x60/e2e8f0/94a3b8?text=Berita";
                    }}
                  />

                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#1f2937] leading-snug mb-1.5 line-clamp-2">
                      {item.title}
                    </p>

                    <span className="flex items-center gap-1 text-[11px] text-gray-400">
                      <Calendar size={11} />
                      {formatDate(item.published_at)}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>

            <div className="p-4">
              <NavLink
                to="/informasi/berita"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg bg-white text-[13px] font-medium text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50"
              >
                Lihat Semua Berita <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </aside>

        {/* Main Article */}
        <main className="order-1 lg:order-2 min-w-0">
          <div className="bg-white rounded-xl border border-[#e8edf2] p-4 sm:p-6 lg:p-8">
            <div className="flex items-center gap-2.5 mb-3.5 flex-wrap">
              <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                {news.category}
              </span>

              <span className="text-gray-400 text-sm">•</span>

              <span className="text-[13px] text-gray-500">
                {formatDate(news.published_at)}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-[#111827] leading-snug mb-4 break-words">
              {news.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 pb-4 border-b border-[#f0f2f5]">
              <div className="flex flex-col xs:flex-row sm:flex-row gap-2 sm:gap-4">
                <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
                  <User size={13} /> {news.author || "Admin"}
                </span>

                <span className="flex items-center gap-1.5 text-[13px] text-gray-500">
                  <Clock size={13} /> {getReadingTime(news.content)}
                </span>
              </div>

              {/* <div className="flex gap-2">
                <button
                  type="button"
                  className="w-8 h-8 rounded-md bg-[#1877f2] text-white flex items-center justify-center"
                >
                  <Clock size={14} />
                </button>

                <button
                  type="button"
                  className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center"
                >
                  <Clock size={14} />
                </button>

                <button
                  type="button"
                  className="w-8 h-8 rounded-md bg-[#25d366] text-white flex items-center justify-center"
                >
                  <MessageCircle size={14} />
                </button>
              </div> */}
            </div>

            <img
              src={news.featured_image}
              alt={news.title}
              className="w-full rounded-lg mb-5 object-cover max-h-[420px]"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/760x400/e2e8f0/94a3b8?text=Berita";
              }}
            />

            <div
              className="article-content text-sm sm:text-[15px] leading-7 sm:leading-[1.85] text-[#374151] break-words"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
