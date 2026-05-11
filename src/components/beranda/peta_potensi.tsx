// // components/PetaPotensi.tsx
// "use client";
// import { useState } from "react";

// const kabupaten = [
//   {
//     id: "puncak-jaya",
//     name: "Puncak Jaya",
//     color: "#3B82F6",
//     hoverColor: "#2563EB",
//     potensi: "Pertambangan, Pertanian Dataran Tinggi",
//     // SVG path approximate shape
//     path: "M 160 60 L 220 50 L 260 80 L 240 120 L 190 130 L 155 100 Z",
//   },
//   {
//     id: "puncak",
//     name: "Puncak",
//     color: "#8B5CF6",
//     hoverColor: "#7C3AED",
//     potensi: "Pariwisata, Pertanian",
//     path: "M 240 120 L 260 80 L 310 90 L 320 130 L 280 150 L 240 140 Z",
//   },
//   {
//     id: "mimika",
//     name: "Mimika",
//     color: "#F59E0B",
//     hoverColor: "#D97706",
//     potensi: "Tambang Tembaga & Emas, Perikanan",
//     path: "M 220 200 L 280 150 L 340 170 L 350 230 L 290 250 L 230 240 Z",
//   },
//   {
//     id: "deiyai",
//     name: "Deiyai",
//     color: "#10B981",
//     hoverColor: "#059669",
//     potensi: "Pertanian, Peternakan",
//     path: "M 155 140 L 190 130 L 240 140 L 230 180 L 190 190 L 155 170 Z",
//   },
//   {
//     id: "paniai",
//     name: "Paniai",
//     color: "#EF4444",
//     hoverColor: "#DC2626",
//     potensi: "Perikanan Danau, Pertanian",
//     path: "M 190 190 L 230 180 L 240 140 L 280 150 L 280 200 L 240 220 L 200 215 Z",
//   },
//   {
//     id: "dogiyai",
//     name: "Dogiyai",
//     color: "#EC4899",
//     hoverColor: "#DB2777",
//     potensi: "Pertanian, Kehutanan",
//     path: "M 130 160 L 155 140 L 155 170 L 190 190 L 180 220 L 145 210 L 125 185 Z",
//   },
//   {
//     id: "intan-jaya",
//     name: "Intan Jaya",
//     color: "#06B6D4",
//     hoverColor: "#0891B2",
//     potensi: "Pertambangan, Kehutanan",
//     path: "M 310 90 L 370 85 L 400 120 L 380 160 L 340 170 L 320 130 Z",
//   },
//   {
//     id: "nabire",
//     name: "Nabire",
//     color: "#F97316",
//     hoverColor: "#EA580C",
//     potensi: "Perikanan, Pertanian, Pariwisata Bahari",
//     path: "M 340 170 L 380 160 L 420 190 L 410 240 L 360 250 L 350 230 Z",
//   },
//   {
//     id: "memberamo-tengah",
//     name: "Memberamo Tengah",
//     color: "#6366F1",
//     hoverColor: "#4F46E5",
//     potensi: "Kehutanan, Pertanian",
//     path: "M 370 50 L 430 45 L 450 80 L 420 110 L 380 100 L 370 70 Z",
//   },
// ];

// export default function PetaPotensi() {
//   const [hovered, setHovered] = useState<string | null>(null);
//   const [selected, setSelected] = useState<string | null>(null);

//   const activeId = selected || hovered;
//   const activeKab = kabupaten.find((k) => k.id === activeId);

//   return (
//     <section className="py-14 px-4 md:px-16 bg-gradient-to-br from-slate-50 to-blue-50">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
//         <div className="md:w-2/5 w-full">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
//             Peta Potensi
//           </h2>
//           <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4" />
//           <p className="text-gray-500 text-sm leading-relaxed mb-3">
//             Papua Tengah adalah sebuah provinsi di Indonesia bagian tengah yang
//             terdiri dari 8 kabupaten dan 1 kota.
//           </p>
//           <p className="text-gray-500 text-sm leading-relaxed mb-6">
//             Dengan luas wilayah 1.826.000 km² dan potensi besar di berbagai
//             sektor, Papua Tengah berkomitmen menjadi daerah yang maju, lestari,
//             dan sejahtera.
//           </p>

//           {activeKab ? (
//             <div
//               className="p-4 rounded-xl border-l-4 bg-white shadow-sm transition-all duration-300"
//               style={{ borderColor: activeKab.color }}
//             >
//               <p className="font-semibold text-gray-800">{activeKab.name}</p>
//               <p className="text-sm text-gray-500 mt-1">{activeKab.potensi}</p>
//             </div>
//           ) : (
//             <div className="p-4 rounded-xl border-l-4 border-gray-200 bg-white shadow-sm text-sm text-gray-400">
//               Arahkan kursor ke wilayah pada peta untuk melihat potensi.
//             </div>
//           )}

//           <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
//             Lihat Detail Potensi
//           </button>
//         </div>

//         <div className="md:w-3/5 w-full">
//           <svg
//             viewBox="80 30 420 260"
//             className="w-full drop-shadow-lg"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {kabupaten.map((kab) => (
//               <g
//                 key={kab.id}
//                 onMouseEnter={() => setHovered(kab.id)}
//                 onMouseLeave={() => setHovered(null)}
//                 onClick={() => setSelected(selected === kab.id ? null : kab.id)}
//                 className="cursor-pointer"
//               >
//                 <path
//                   d={kab.path}
//                   fill={activeId === kab.id ? kab.hoverColor : kab.color}
//                   stroke="white"
//                   strokeWidth="2"
//                   opacity={activeId && activeId !== kab.id ? 0.6 : 1}
//                   style={{ transition: "all 0.2s ease" }}
//                 />
//                 <text
//                   x={getCentroid(kab.path).x}
//                   y={getCentroid(kab.path).y}
//                   textAnchor="middle"
//                   dominantBaseline="middle"
//                   fill="white"
//                   fontSize="7"
//                   fontWeight="600"
//                   style={{ pointerEvents: "none", userSelect: "none" }}
//                 >
//                   {kab.name.split(" ").map((word, wi) => (
//                     <tspan
//                       key={wi}
//                       x={getCentroid(kab.path).x}
//                       dy={wi === 0 ? "0" : "8"}
//                     >
//                       {word}
//                     </tspan>
//                   ))}
//                 </text>
//               </g>
//             ))}
//           </svg>

//           <div className="grid grid-cols-3 gap-2 mt-4">
//             {kabupaten.map((kab) => (
//               <div key={kab.id} className="flex items-center gap-1.5">
//                 <div
//                   className="w-3 h-3 rounded-sm shrink-0"
//                   style={{ backgroundColor: kab.color }}
//                 />
//                 <span className="text-xs text-gray-600 truncate">
//                   {kab.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// function getCentroid(pathStr: string) {
//   const matches = [...pathStr.matchAll(/([ML])\s*([\d.]+)\s+([\d.]+)/g)];
//   const points = matches.map((m) => ({
//     x: parseFloat(m[2]),
//     y: parseFloat(m[3]),
//   }));
//   if (!points.length) return { x: 0, y: 0 };
//   const x = points.reduce((s, p) => s + p.x, 0) / points.length;
//   const y = points.reduce((s, p) => s + p.y, 0) / points.length;
//   return { x, y };
// }
// components/PetaPotensi.tsx
"use client";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";

const GEO_URL = "/geojson/Provinsi Papua Tengah-KAB_KOTA.json";

const KABUPATEN_COLORS: Record<string, string> = {
  NABIRE: "#3B82F6",
  PANIAI: "#10B981",
  "PUNCAK JAYA": "#F59E0B",
  PUNCAK: "#8B5CF6",
  DOGIYAI: "#EF4444",
  DEIYAI: "#EC4899",
  "INTAN JAYA": "#06B6D4",
  MIMIKA: "#F97316",
};

const POTENSI: Record<string, string> = {
  NABIRE: "Perikanan, Pertanian, Pariwisata Bahari",
  PANIAI: "Perikanan Danau, Pertanian",
  "PUNCAK JAYA": "Pertambangan, Pertanian Dataran Tinggi",
  PUNCAK: "Pariwisata Alam, Pertanian",
  DOGIYAI: "Pertanian, Kehutanan",
  DEIYAI: "Pertanian, Peternakan",
  "INTAN JAYA": "Pertambangan, Kehutanan",
  MIMIKA: "Tambang Tembaga & Emas, Perikanan",
};

function getKabName(props: any): string {
  // Sesuaikan key property GeoJSON yang kamu download
  const raw =
    props?.kab_kota || props?.nama || props?.Kabupaten || props?.name || "";
  return raw
    .toUpperCase()
    .replace(/^(KABUPATEN|KOTA)\s+/, "")
    .trim();
}

export default function PetaPotensi() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const activeKab = selected || hovered;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 600;
    const height = 400;

    // Projection akan di-fitExtent setelah GeoJSON dimuat
    const projection = d3.geoMercator();
    const path = d3.geoPath().projection(projection);

    d3.json(GEO_URL)
      .then((data: any) => {
        setLoading(false);

        // Auto-fit peta ke dalam viewBox
        projection.fitExtent(
          [
            [20, 20],
            [width - 20, height - 20],
          ],
          data,
        );

        svg
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("d", path as any)
          .attr("fill", (d: any) => {
            const name = getKabName(d.properties);
            return KABUPATEN_COLORS[name] || "#CBD5E1";
          })
          .attr("stroke", "white")
          .attr("stroke-width", 1.5)
          .style("cursor", "pointer")
          .style("transition", "opacity 0.2s")
          .on("mouseenter", function (_, d: any) {
            const name = getKabName(d.properties);
            setHovered(name);
            d3.select(this).attr("opacity", 0.75);
          })
          .on("mouseleave", function () {
            setHovered(null);
            d3.select(this).attr("opacity", 1);
          })
          .on("click", function (_, d: any) {
            const name = getKabName(d.properties);
            setSelected((prev) => (prev === name ? null : name));
          });

        // Label nama kabupaten
        svg
          .selectAll("text")
          .data(data.features)
          .enter()
          .append("text")
          .attr("x", (d: any) => path.centroid(d)[0])
          .attr("y", (d: any) => path.centroid(d)[1])
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("fill", "white")
          .attr("font-size", 9)
          .attr("font-weight", "600")
          .style("pointer-events", "none")
          .style("user-select", "none")
          .each(function (d: any) {
            const name = getKabName(d.properties);
            const words = name.split(" ");
            const el = d3.select(this);
            const [cx, cy] = path.centroid(d);
            words.forEach((word, i) => {
              el.append("tspan")
                .attr("x", cx)
                .attr("dy", i === 0 ? `-${(words.length - 1) * 5}px` : "11px")
                .text(word);
            });
          });
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-14 px-4 md:px-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* KIRI */}
        <div className="md:w-2/5 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Peta Potensi
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4" />
          <p className="text-gray-500 text-sm leading-relaxed mb-3">
            Papua Tengah adalah sebuah provinsi di Indonesia bagian tengah yang
            terdiri dari 8 kabupaten dan 1 kota.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Dengan luas wilayah 1.826.000 km² dan potensi besar di berbagai
            sektor, Papua Tengah berkomitmen menjadi daerah yang maju, lestari,
            dan sejahtera.
          </p>

          {/* Info aktif */}
          {/* {activeKab ? (
            <div
              className="p-4 rounded-xl border-l-4 bg-white shadow-sm transition-all duration-300"
              style={{ borderColor: KABUPATEN_COLORS[activeKab] || "#3B82F6" }}
            >
              <p className="font-semibold text-gray-800 capitalize">
                {activeKab}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {POTENSI[activeKab] || "Data potensi belum tersedia"}
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl border-l-4 border-gray-200 bg-white shadow-sm text-sm text-gray-400">
              Klik atau arahkan kursor ke wilayah untuk melihat potensi.
            </div>
          )} */}

          {/* <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Lihat Detail Potensi
          </button> */}

          {/* Legend */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {Object.entries(KABUPATEN_COLORS).map(([name, color]) => (
              <div key={name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-gray-600 capitalize">
                  {name.toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* KANAN: Peta D3 */}
        <div className="md:w-3/5 w-full bg-white rounded-2xl shadow-lg p-4">
          {loading && (
            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
              Memuat peta...
            </div>
          )}
          <svg
            ref={svgRef}
            viewBox="0 0 600 400"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: "100%",
              height: "auto",
              display: loading ? "none" : "block",
            }}
          />
        </div>
      </div>
    </section>
  );
}
