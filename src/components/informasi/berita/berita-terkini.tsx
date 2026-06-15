import { getBerandaBerita } from "@/query/get.berita.query";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import CardBeritaTerkini from "./card-berita-terkini";
// import { getBerandaBerita } from "@/query/get.beranda_berita.query";

interface NewsItem {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  status: string;
  is_favorite: boolean;
  author: string;
  category: string;
}

export default function BeritaTerkini() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true);

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
        setLoading(true);

        const response = await getBerandaBerita({
          q,
          page,
        });

        setNews(response.data.data || []);
        setLastPage(response.data.last_page || 1);
      } catch (error) {
        console.error("Failed fetch news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [q, page]);

  return (
    <section className="bg-[#f4f6fb] min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1e3a5f]">
              Berita <span className="text-blue-600">Terkini</span>
            </h1>
            {/* <p className="text-slate-500 text-sm mt-2">
              Informasi terbaru seputar kegiatan, layanan,
              <br />
              dan program DPM-PTSP Papua Tengah.
            </p> */}
          </div>

          {/* <NavLink
            to="/"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </NavLink> */}
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Cari berita, kegiatan, atau informasi..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-10 text-slate-500">Loading...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-10 text-slate-500">
            Berita tidak ditemukan
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
            {news.map((item) => (
              <CardBeritaTerkini
                key={item.id}
                item={{
                  id: item.slug,
                  kategori: item.category,
                  tanggal: formatDate(item.published_at),
                  judul: item.title,
                  img: item.featured_image,
                  // slug: item.slug,
                }}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center items-center gap-2 flex-wrap">
          <button
            disabled={page === 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-blue-600 text-sm font-semibold hover:border-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" /> Sebelumnya
          </button>

          {Array.from({ length: lastPage }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 rounded-lg border text-sm font-bold transition-all ${
                p === page
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            disabled={page === lastPage}
            onClick={() => setPage((prev) => Math.min(prev + 1, lastPage))}
            className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-blue-600 text-sm font-semibold hover:border-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Berikutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
