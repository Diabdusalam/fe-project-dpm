const misiList = [
  "Mengembangkan sistem perizinan pelayanan publik yang sederhana, akuntabel, dan transparan",
  "Meningkatkan kualitas sarana dan prasarana pelayanan publik",
  "Mengembangkan sistem pelayanan publik berbasis teknologi",
  "Menjaga kondusifitas iklim investasi",
];

export default function VisiMisi() {
  return (
    <section className="py-14 px-4 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Visi & Misi Gubernur
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          {/* VISI */}
          <div
            className="md:w-1/2 rounded-2xl overflow-hidden relative min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage: `url('/wisata/featured.jpg'), linear-gradient(135deg,#1e3a6e,#2563eb)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/70 to-blue-600/50" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500/40 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">VISI</p>
                    <div className="w-8 h-0.5 bg-yellow-400 mt-1" />
                  </div>
                </div>
                <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mt-4">
                  MELAKSANAKAN PELAYANAN PRIMA DENGAN CERDAS DAN IKHLAS BAGI
                  PUBLIK
                </h3>
              </div>
              <div className="flex justify-end mt-6 opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* MISI */}
          <div className="md:w-1/2 rounded-2xl border border-gray-100 shadow-sm p-6 bg-white relative overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-6 bg-green-500 rounded-full" />
              <p className="font-bold text-gray-800 text-lg">MISI</p>
            </div>
            <div className="w-10 h-0.5 bg-yellow-400 mb-6 ml-3" />
            <div className="space-y-4">
              {misiList.map((misi, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-600 text-sm font-semibold uppercase leading-snug pt-0.5">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
