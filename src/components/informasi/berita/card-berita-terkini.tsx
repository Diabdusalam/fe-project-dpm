import { ArrowRight, Calendar } from "lucide-react";
import { NavLink } from "react-router-dom";

const badgeColor = {
  LAYANAN: "bg-blue-600",
  PENGHARGAAN: "bg-violet-600",
  KEGIATAN: "bg-emerald-600",
  INFORMASI: "bg-cyan-600",
  PARIWISATA: "bg-orange-500",
  BUDAYA: "bg-amber-500",
};

interface BeritaItem {
  id: number;
  kategori: string;
  tanggal: string;
  judul: string;
  img: string;
}

export default function CardBeritaTerkini({ item }: { item: BeritaItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      {/* Image */}
      <div className="relative">
        <img
          src={item.img}
          alt={item.judul}
          className="w-full h-48 object-cover"
        />
        <span
          className={`absolute bottom-2 left-3 text-white text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded ${badgeColor[item.kategori as keyof typeof badgeColor]}`}
        >
          {item.kategori}
        </span>
      </div>
      {/* Body */}
      <div className="p-4">
        <p className="flex items-center gap-1.5 text-slate-400 text-xs mb-2">
          <Calendar className="w-3.5 h-3.5" />
          {item.tanggal}
        </p>
        <h3 className="text-[#1e3a5f] font-bold text-sm leading-snug mb-3">
          {item.judul}
        </h3>
        <NavLink
          to={`/informasi/berita/cobadulu`}
          // to={ `/informasi/berita/${item.id}` }
          className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-800 transition-colors"
        >
          Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
        </NavLink>
      </div>
    </div>
  );
}
