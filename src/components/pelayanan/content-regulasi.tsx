export default function ContentRegulasi() {
  return (
    <nav>
      <div className="mx-auto text-center">
        {" "}
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Regulasi <span className="text-blue-600">DPM-PTSP Papua Tengah</span>
        </h1>
        {/* Accent line */}
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Regulasi</h3>
          <ul className="space-y-2 text-sm text-blue-600">
            <li>Peraturan Pembangunan Jangka Menengah</li>
            <li>Laporan Kinerja (LKJ) Tahun 2022</li>
            <li>Laporan Kinerja (LKJ) Tahun 2024</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Publikasi Data</h3>
          <ul className="text-sm text-blue-600">
            <li>Rencana Pembangunan Jangka Menengah</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
