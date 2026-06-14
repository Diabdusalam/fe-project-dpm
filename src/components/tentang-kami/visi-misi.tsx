const missions = [
  {
    number: "01",
    text: "Mengembangkan potensi individu dan komunitas melalui pendidikan, pelatihan dan inisiatif kesehatan yang inovatif",
  },
  {
    number: "02",
    text: "Mengembangkan potensi sumber daya alam dan sumber daya manusia yang ada, dengan mengedepankan prinsip–prinsip keadilan dan kesetaraan.",
  },
  {
    number: "03",
    text: "Penguatan tata kelola pemerintahan yang baik, bersih, transparan dengan mengimplementasikan sistim administrasi publik yang berbasis digitalisasi teknologi.",
  },
  {
    number: "04",
    text: "Menciptakan lingkungan yang aman, tentram, damai dan tertib.",
  },
  {
    number: "05",
    text: "Melestarikan kekayaan adat, budaya dan kearifan lokal sebagai fondasi ketahanan sosial yang mantap, mendorong pengelolaan sumber daya alam yang bertanggung jawab dan berkelanjutan.",
  },
  {
    number: "06",
    text: "Meningkatkan aksesibilitas infrastruktur wilayah sebagai pilar utama melalui pembangunan jaringan transportasi dan komunikasi yang lebih baik dan merata.",
  },
  {
    number: "07",
    text: "Meningkatkan kuantitas dan kualitas sarana dan prasarana yang ramah lingkungan melalui pemanfaatan teknologi hijau dan inovasi lokal dengan memprioritaskan pembangunan di daerah tertinggal, pinggiran dan terisolir.",
  },
];
export default function VisiMisi() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="text-center ">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              VISI & MISI GUBERNUR
            </h2>
            <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500 md:text-base">
            Visi dan Misi ini menjadi arah pembangunan Papua Tengah menuju
            daerah yang maju, sejahtera dan berkelanjutan.
          </p>
        </div>

        {/* Visi */}
        {/* <div className="rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 py-10 shadow-xl shadow-blue-900/15 md:px-14 md:py-16">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-wide text-white">
              VISI
            </p>
            <div className="mt-2 h-1 w-10 rounded-full bg-yellow-400" />
          </div>

          <h3 className="max-w-5xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Mewujudkan Papua Tengah Emas, Adil, Berdaya Saing, Bermartabat,
            Harmonis, Maju dan Berkelanjutan
          </h3>
        </div> */}
        {/* Visi */}

        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-white p-6 shadow-sm md:p-10">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative text-center">
            <div className="mb-6 text-center">
              <p className="text-2xl font-extrabold uppercase  text-blue-700">
                VISI
              </p>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-blue-500" />
            </div>

            {/* <div className="mt-12 text-center">
              <h3 className="text-2xl font-extrabold text-slate-900">MISI</h3>
              <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-green-500" />
            </div> */}
            <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
              Mewujudkan Papua Tengah Emas, Adil, Berdaya Saing, Bermartabat,
              Harmonis, Maju dan Berkelanjutan
            </h3>
          </div>
        </div>

        {/* Misi */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-extrabold text-slate-900">MISI</h3>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-green-500" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {missions.map((mission, index) => (
            <div
              key={mission.number}
              className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 ${
                index === 6 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex gap-6">
                <div className="shrink-0">
                  <span className="text-5xl font-extrabold leading-none text-green-600 md:text-6xl">
                    {mission.number}
                  </span>
                </div>

                <div className="w-px bg-slate-200" />

                <p className="text-left text-sm font-medium leading-7 text-gray-600 md:text-base">
                  {mission.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="py-14 px-4 md:px-16 bg-white">
  //     <div className="max-w-6xl mx-auto">
  //       <div className="text-center mb-10">
  //         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
  //           Visi & Misi Gubernur
  //         </h2>
  //         <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
  //       </div>

  //       <div className="flex flex-col md:flex-row gap-6 mb-10">
  //         {/* VISI */}
  //         <div
  //           className="md:w-1/2 rounded-2xl overflow-hidden relative min-h-[300px] bg-cover bg-center"
  //           style={{
  //             backgroundImage: `url('/wisata/featured.jpg'), linear-gradient(135deg,#1e3a6e,#2563eb)`,
  //           }}
  //         >
  //           <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/70 to-blue-600/50" />
  //           <div className="relative z-10 p-8 h-full flex flex-col justify-between">
  //             <div>
  //               <div className="flex items-center gap-3 mb-3">
  //                 <div className="w-12 h-12 bg-blue-500/40 rounded-full flex items-center justify-center">
  //                   <svg
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     className="w-6 h-6 text-white"
  //                     fill="none"
  //                     viewBox="0 0 24 24"
  //                     stroke="currentColor"
  //                   >
  //                     <path
  //                       strokeLinecap="round"
  //                       strokeLinejoin="round"
  //                       strokeWidth={2}
  //                       d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  //                     />
  //                   </svg>
  //                 </div>
  //                 <div>
  //                   <p className="text-white font-bold text-lg">VISI</p>
  //                   <div className="w-8 h-0.5 bg-yellow-400 mt-1" />
  //                 </div>
  //               </div>
  //               <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mt-4 uppercase">
  //                 Mewujudkan Papua Tengah Emas, Adil, Berdaya Saing,
  //                 Bermartabat, Harmonis, Maju dan Berkelanjutan
  //               </h3>
  //             </div>
  //             <div className="flex justify-end mt-6 opacity-30">
  //               <svg
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 className="w-20 h-20 text-white"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={1}
  //                   d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M15 13a3 3 0 11-6 0 3 3 0 016 0z"
  //                 />
  //               </svg>
  //             </div>
  //           </div>
  //         </div>

  //         {/* MISI */}
  //         <div className="md:w-1/2 rounded-2xl border border-gray-100 shadow-sm p-6 bg-white relative overflow-hidden">
  //           <div className="flex items-center gap-2 mb-1">
  //             <div className="w-1 h-6 bg-green-500 rounded-full" />
  //             <p className="font-bold text-gray-800 text-lg">MISI</p>
  //           </div>
  //           <div className="w-10 h-0.5 bg-yellow-400 mb-6 ml-3" />
  //           <div className="space-y-4">
  //             {misiList.map((misi, i) => (
  //               <div key={i} className="flex gap-3 items-start">
  //                 <span className="shrink-0 w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
  //                   {String(i + 1).padStart(2, "0")}
  //                 </span>
  //                 <p className="text-gray-600 text-sm font-semibold uppercase leading-snug pt-0.5">
  //                   {misi}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //           <div className="absolute bottom-4 right-4 opacity-10">
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="w-24 h-24 text-green-500"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={1}
  //                 d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  //               />
  //             </svg>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
