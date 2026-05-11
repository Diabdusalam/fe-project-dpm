// components/GambaranDPMPTSP.tsx

const tigaPoin = [
  {
    no: "01",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    judul: "Peningkatan Investasi",
    desc: "Mendorong pertumbuhan investasi berkelanjutan di Papua Tengah.",
  },
  {
    no: "02",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    judul: "Pelayanan Perizinan yang Prima",
    desc: "Memberikan layanan perizinan yang cepat, mudah, dan transparan.",
  },
  {
    no: "03",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"
        />
      </svg>
    ),
    judul: "Penggunaan Teknologi Informasi",
    desc: "Mengoptimalkan teknologi untuk pelayanan yang efisien dan akuntabel.",
  },
];

const misiList = [
  "Mengembangkan sistem perizinan pelayanan publik yang sederhana, akuntabel, dan transparan",
  "Meningkatkan kualitas sarana dan prasarana pelayanan publik",
  "Mengembangkan sistem pelayanan publik berbasis teknologi",
  "Menjaga kondusifitas iklim investasi",
];

export default function TentangKamiDPMPTSP() {
  return (
    <div className="bg-gray-50">
      <section className="py-14 px-4 md:px-16 max-w-6xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Gambaran <span className="text-blue-600">DPM-PTSP</span>
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
        </div>

        {/* ✅ WRAPPER RELATIVE untuk foto absolute */}
        <div className="relative min-h-[320px] mb-6">
          {/* Teks — hanya setengah kiri */}
          <div className="md:w-[55%] pr-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              Tentang DPMPTSP Papua Tengah
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Berdasarkan visi Dinas Penanaman Modal dan Pelayanan Terpadu Satu
              Pintu yang telah dirumuskan, hal tersebut mengindikasikan bahwa
              peningkatan investasi sangat didukung dengan pelayanan perizinan
              prima yang akan diberikan kepada pelaku usaha. DPMPTSP Papua
              Tengah berkomitmen untuk memberikan pelayanan perizinan dan non
              perizinan yang mudah, cepat, transparan, dan akuntabel dengan
              dukungan teknologi informasi.
            </p>
          </div>

          {/* ✅ Foto ABSOLUTE di kanan — melayang */}
          <div className="hidden md:block absolute top-0 right-0 w-[42%] h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/dpmptsp_papua.png"
              alt="Gedung DPMPTSP Papua Tengah"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800";
              }}
            />
          </div>
        </div>

        {/* ✅ Tiga Poin — FULL WIDTH, di luar wrapper relative */}
        {/* <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Tiga Poin Pokok
          </h3>
          <div className="bg-white rounded-2xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {tigaPoin.map((poin, i) => (
              <div
                key={i}
                className="flex gap-4 py-5 md:py-0 md:px-6 first:pt-0 last:pb-0"
              >
                <div className="shrink-0 flex flex-col gap-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
                    {poin.no}
                  </span>
                  <div>{poin.icon}</div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-1">
                    {poin.judul}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {poin.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>

      {/* ===== SECTION 2: VISI & MISI — tidak berubah ===== */}
      <section className="py-14 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Visi & Misi
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

          {/* STATS */}
        </div>
      </section>
    </div>
  );
}
// export default function GambaranDPMPTSP() {
//   return (
//     <div className="bg-gray-50">
//       {/* ===== SECTION 1: GAMBARAN DPM-PTSP ===== */}
//       <section className="py-14 px-4 md:px-16 max-w-6xl mx-auto">
//         {/* Judul */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Gambaran <span className="text-blue-600">DPM-PTSP</span>
//           </h2>
//           <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
//         </div>

//         {/* Tentang + Foto */}
//         <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
//           {/* Kiri: Teks */}
//           <div className="md:w-1/2">
//             <h3 className="text-lg font-bold text-gray-800 mb-3">
//               Tentang DPMPTSP Papua Tengah
//             </h3>
//             <p className="text-gray-500 text-sm leading-relaxed mb-6">
//               Berdasarkan visi Dinas Penanaman Modal dan Pelayanan Terpadu Satu
//               Pintu yang telah dirumuskan, hal tersebut mengindikasikan bahwa
//               peningkatan investasi sangat didukung dengan pelayanan perizinan
//               prima yang akan diberikan kepada pelaku usaha. DPMPTSP Papua
//               Tengah berkomitmen untuk memberikan pelayanan perizinan dan non
//               perizinan yang mudah, cepat, transparan, dan akuntabel dengan
//               dukungan teknologi informasi.
//             </p>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">
//               Tiga Poin Pokok
//             </h3>

//             {/* Tiga Poin */}
//             <div className="bg-white rounded-2xl shadow-sm p-4 divide-y divide-gray-100 md:divide-y-0 md:grid md:grid-cols-3 md:divide-x">
//               {tigaPoin.map((poin, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-3 py-4 md:py-0 md:px-4 first:pt-0 last:pb-0"
//                 >
//                   <div className="shrink-0">
//                     <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-xs font-bold">
//                       {poin.no}
//                     </span>
//                   </div>
//                   <div>
//                     <div className="mb-1">{poin.icon}</div>
//                     <p className="font-semibold text-gray-800 text-sm mb-1">
//                       {poin.judul}
//                     </p>
//                     <p className="text-gray-400 text-xs leading-relaxed">
//                       {poin.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Kanan: Foto Gedung */}
//           <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-md h-64 md:h-80 bg-gray-200">
//             <img
//               src="/dpmptsp_papua.png"
//               alt="Gedung DPMPTSP Papua Tengah"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 (e.target as HTMLImageElement).src =
//                   "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800";
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       {/* ===== SECTION 2: VISI & MISI ===== */}
//       <section className="py-14 px-4 md:px-16 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//               Visi & Misi
//             </h2>
//             <div className="w-12 h-1 bg-yellow-400 rounded-full mx-auto mt-2" />
//           </div>

//           <div className="flex flex-col md:flex-row gap-6 mb-10">
//             {/* VISI */}
//             <div
//               className="md:w-1/2 rounded-2xl overflow-hidden relative min-h-[300px] bg-cover bg-center"
//               style={{
//                 backgroundImage: `url('/wisata/featured.jpg'), linear-gradient(135deg,#1e3a6e,#2563eb)`,
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/70 to-blue-600/50" />
//               <div className="relative z-10 p-8 h-full flex flex-col justify-between">
//                 <div>
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-12 h-12 bg-blue-500/40 rounded-full flex items-center justify-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-white font-bold text-lg">VISI</p>
//                       <div className="w-8 h-0.5 bg-yellow-400 mt-1" />
//                     </div>
//                   </div>
//                   <h3 className="text-white font-extrabold text-2xl md:text-3xl leading-tight mt-4">
//                     MELAKSANAKAN PELAYANAN PRIMA DENGAN CERDAS DAN IKHLAS BAGI
//                     PUBLIK
//                   </h3>
//                 </div>
//                 {/* Ikon dekoratif */}
//                 <div className="flex justify-end mt-6 opacity-30">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-20 h-20 text-white"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={1}
//                       d="M17 20H7a2 2 0 01-2-2V6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M15 13a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* MISI */}
//             <div className="md:w-1/2 rounded-2xl border border-gray-100 shadow-sm p-6 bg-white relative overflow-hidden">
//               {/* Header misi */}
//               <div className="flex items-center gap-2 mb-1">
//                 <div className="w-1 h-6 bg-green-500 rounded-full" />
//                 <p className="font-bold text-gray-800 text-lg">MISI</p>
//               </div>
//               <div className="w-10 h-0.5 bg-yellow-400 mb-6 ml-3" />

//               {/* List misi */}
//               <div className="space-y-4">
//                 {misiList.map((misi, i) => (
//                   <div key={i} className="flex gap-3 items-start">
//                     <span className="shrink-0 w-7 h-7 rounded-full bg-green-500 text-white text-xs font-bold flex items-center justify-center">
//                       {String(i + 1).padStart(2, "0")}
//                     </span>
//                     <p className="text-gray-600 text-sm font-semibold uppercase leading-snug pt-0.5">
//                       {misi}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Ikon dekoratif kanan bawah */}
//               <div className="absolute bottom-4 right-4 opacity-10">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-24 h-24 text-green-500"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1}
//                     d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-4 py-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-gray-200">
//               {stats.map((stat, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-3 md:px-6 first:pl-0 last:pr-0"
//                 >
//                   <div className="shrink-0">{stat.icon}</div>
//                   <div>
//                     <p className="text-blue-600 font-bold text-2xl">
//                       {stat.value}
//                     </p>
//                     <p className="text-gray-500 text-xs whitespace-pre-line leading-tight">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
