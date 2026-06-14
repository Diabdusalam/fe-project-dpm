import { MapPinIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

interface CardWistataProps {
  id: number;
  name: string;
  slug: string;
  image: string;
  location: string;
  description: string;
  category: string | null;
}

const stripHtml = (html?: string) => {
  return html ? html.replace(/<[^>]*>/g, "").trim() : "";
};

export default function CardWisata({ dest }: { dest: CardWistataProps }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow group flex flex-col">
      <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-300">
        <img
          src={dest.image}
          alt={dest.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400";
          }}
        />

        <span className="absolute top-2 left-2 right-2 w-fit max-w-[calc(100%-16px)] bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded-full flex items-center gap-1">
          <MapPinIcon className="w-3 h-3 shrink-0" />
          <span className="truncate">{dest.location}</span>
        </span>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h4 className="font-bold text-gray-800 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
          {dest.name}
        </h4>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 mb-2 flex-1">
          {stripHtml(dest.description)}
        </p>

        <NavLink
          to={`/informasi/wisata/${dest.slug}`}
          className="text-blue-500 text-xs font-medium flex items-center gap-1 hover:underline mt-auto"
        >
          Lihat Detail →
        </NavLink>
      </div>
    </div>
  );
}
