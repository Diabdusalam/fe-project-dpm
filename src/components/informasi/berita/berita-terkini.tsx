import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Search,
} from "lucide-react";
import CardBeritaTerkini from "./card-berita-terkini";
import { NavLink } from "react-router-dom";

const beritaData = [
  {
    id: 1,
    kategori: "LAYANAN",
    tanggal: "02 Maret 2026",
    judul: "Perizinan kini Lebih Mudah dengan Sistem Digital Terintegrasi",
    img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80",
  },
  {
    id: 2,
    kategori: "PENGHARGAAN",
    tanggal: "02 Maret 2026",
    judul: "DPMPTSP Raih Penghargaan Pelayanan Prima",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80",
  },
  {
    id: 3,
    kategori: "KEGIATAN",
    tanggal: "02 Maret 2026",
    judul: "Workshop UMKM : Meningkatkan Daya Saing Produk Lokal",
    img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=400&q=80",
  },
  {
    id: 4,
    kategori: "INFORMASI",
    tanggal: "02 Maret 2026",
    judul: "Ekspor Produk Lokal Papua Tengah Meningkat Signifikan",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: 5,
    kategori: "LAYANAN",
    tanggal: "28 Februari 2026",
    judul: "DPM-PTSP Perkuat Layanan Perizinan Berbasis Digital",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
  },
  {
    id: 6,
    kategori: "KEGIATAN",
    tanggal: "26 Februari 2026",
    judul: "Pariwisata Meningkat, Wisata Alam Papua Tengah Mendunia",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    id: 7,
    kategori: "PARIWISATA",
    tanggal: "25 Februari 2026",
    judul: "Pengumuman Penyesuaian Jam Layanan DPMPTSP",
    img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80",
  },
  {
    id: 8,
    kategori: "BUDAYA",
    tanggal: "24 Februari 2026",
    judul: "Melestarikan Budaya Lokal Papua Tengah",
    img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=400&q=80",
  },
];

export default function BeritaTerkini() {
  return (
    <section className="bg-[#f4f6fb] min-h-screen px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1e3a5f]">
              Berita <span className="text-blue-600">Terkini</span>
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              Informasi terbaru seputar kegiatan, layanan,
              <br />
              dan program DPM-PTSP Papua Tengah.
            </p>
          </div>
          <NavLink
            to="/beranda"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </NavLink>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari berita, kegiatan, atau informasi..."
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          {/* Kategori */}
          <div className="relative flex items-center">
            <LayoutGrid className="absolute left-3 w-4 h-4 text-blue-600 pointer-events-none" />
            <select className="pl-9 pr-9 py-2.5 border border-slate-200 rounded-xl text-sm bg-white appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
              <option>Semua Kategori</option>
              <option>Layanan</option>
              <option>Kegiatan</option>
              <option>Informasi</option>
              <option>Pariwisata</option>
              <option>Budaya</option>
              <option>Penghargaan</option>
            </select>
            <ChevronRight className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
          </div>
          {/* Tanggal */}
          <div className="relative flex items-center">
            <Calendar className="absolute left-3 w-4 h-4 text-blue-600 pointer-events-none" />
            <select className="pl-9 pr-9 py-2.5 border border-slate-200 rounded-xl text-sm bg-white appearance-none focus:outline-none focus:border-blue-500 cursor-pointer">
              <option>Semua Tanggal</option>
              <option>Maret 2026</option>
              <option>Februari 2026</option>
              <option>Januari 2026</option>
            </select>
            <ChevronRight className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none rotate-90" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
          {beritaData.map((item) => (
            <CardBeritaTerkini key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-blue-600 text-sm font-semibold hover:border-blue-500 transition-all">
            <ChevronLeft className="w-4 h-4" /> Sebelumnya
          </button>
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`w-9 h-9 rounded-lg border text-sm font-bold transition-all ${p === 1 ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-600 border-slate-200 hover:border-blue-500 hover:text-blue-600"}`}
            >
              {p}
            </button>
          ))}
          <span className="text-slate-400 text-sm px-1">...</span>
          <button className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-600 text-sm font-bold hover:border-blue-500 hover:text-blue-600 transition-all">
            15
          </button>
          <button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-blue-600 text-sm font-semibold hover:border-blue-500 transition-all">
            Berikutnya <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
