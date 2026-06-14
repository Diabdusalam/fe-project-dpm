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
  // const [hovered, setHovered] = useState<string | null>(null);
  // const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
          // .on("mouseenter", function (_, d: any) {
          //   // const name = getKabName(d.properties);
          //   // setHovered(name);
          //   d3.select(this).attr("opacity", 0.75);
          // })
          .on("mouseleave", function () {
            // setHovered(null);
            d3.select(this).attr("opacity", 1);
          });
        // .on("click", function (_, d: any) {
        //   // const name = getKabName(d.properties);
        //   // setSelected((prev) => (prev === name ? null : name));
        // });

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
            const [cx, _] = path.centroid(d);
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
