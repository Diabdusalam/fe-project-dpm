import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const inovasiList = [
  "Sistem Pada",
  "Pascak Bugio",
  "HPP Value",
  "Peta Potensi Investasi",
  "Kinta Investasi",
];

export default function ContentInovasi() {
  const [active, setActive] = useState(0);

  return (
    <nav>
      <div className="mx-auto text-center">
        {" "}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Inovasi <span className="text-blue-600">DPM-PTSP Papua Tengah</span>
        </h1>
        {/* Accent line */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm">
          {inovasiList.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left border-b ${
                active === i ? "bg-blue-600 text-white" : ""
              }`}
            >
              {item}
              {active === i ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          ))}
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">
            Nama Inovasi : {inovasiList[active]}
          </h3>
          <p className="text-sm text-gray-600">
            Membangun platform digital berbasis mobile dan web untuk mempermudah
            pengajuan izin usaha secara online dengan pelacakan real-time dan
            pembayaran digital.
          </p>
        </div>
      </div>
    </nav>
  );
}
