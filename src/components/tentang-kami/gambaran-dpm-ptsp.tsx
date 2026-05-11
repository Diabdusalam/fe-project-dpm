export default function GambaranDPMPTSP() {
  return (
    <main>
      {/* <section className="py-14 pl-4 md:pl-16 mx-auto bg-gray-50">
        <div className="relative  max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Gambaran <span className="text-blue-600">DPM-PTSP</span>
            </h2>
            <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
          </div>
          <div className="relative min-h-[320px] mb-6">
            <div className="md:w-[55%] pr-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Tentang DPMPTSP Papua Tengah
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Berdasarkan visi Dinas Penanaman Modal dan Pelayanan Terpadu
                Satu Pintu yang telah dirumuskan, hal tersebut mengindikasikan
                bahwa peningkatan investasi sangat didukung dengan pelayanan
                perizinan prima yang akan diberikan kepada pelaku usaha. DPMPTSP
                Papua Tengah berkomitmen untuk memberikan pelayanan perizinan
                dan non perizinan yang mudah, cepat, transparan, dan akuntabel
                dengan dukungan teknologi informasi.
              </p>
            </div>
          </div>
          <div className="hidden md:block absolute bottom-0 -right-7 w-[50%] h-[640px] z-10">
            <img
              src="/dpmptsp_papua.png"
              alt="Gedung DPMPTSP Papua Tengah"
              className="w-full h-full  object-contain object-bottom drop-shadow-2xl"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https:images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800";
              }}
            />
          </div>{" "}
        </div>
      </section> */}

      <section className="py-14 pl-4 md:pl-16 mx-auto bg-gray-50">
        <div className="relative max-w-6xl mx-auto min-h-[400px]">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Gambaran <span className="text-blue-600">DPM-PTSP</span>
            </h2>
            <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
          </div>

          <div className="relative min-h-[320px] mb-6">
            <div className="md:w-[55%] pr-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                Tentang DPMPTSP Papua Tengah
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Berdasarkan visi Dinas Penanaman Modal dan Pelayanan Terpadu
                Satu Pintu yang telah dirumuskan, hal tersebut mengindikasikan
                bahwa peningkatan investasi sangat didukung dengan pelayanan
                perizinan prima yang akan diberikan kepada pelaku usaha. DPMPTSP
                Papua Tengah berkomitmen untuk memberikan pelayanan perizinan
                dan non perizinan yang mudah, cepat, transparan, dan akuntabel
                dengan dukungan teknologi informasi.
              </p>
            </div>

            <div className="hidden md:block absolute -top-10 -right-7 w-[50%] h-[640px] z-10">
              <img
                src="/dpmptsp_papua.png"
                alt="Gedung DPMPTSP Papua Tengah"
                className="w-full  object-contain object-bottom drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
