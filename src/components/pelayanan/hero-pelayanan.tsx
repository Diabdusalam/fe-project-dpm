export default function HeroPelayanan() {
  return (
    // <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-14 pl-4 md:pl-16">
    <div className="relative overflow-hidden bg-gray-50 py-14 pl-4 md:pl-16">
      {/* Decorative blur shape kiri */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute top-20 right-0 w-52 h-52 bg-blue-300 opacity-30 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative max-w-4xl mx-auto text-center min-h-[320px] ">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Layanan <span className="text-blue-600">Informasi Publik</span>
        </h1>

        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>

        <p className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
          DPM-PTSP Papua Tengah berperan penting dalam memberikan informasi bagi
          masyarakat, terutama pelaku UMKM. Pemerintah berkomitmen mendukung
          UMKM agar berkembang dalam perekonomian lokal.
          <br className="hidden md:block" />
          Informasi publik kami mendorong transparansi, akuntabilitas, dan
          mempercepat pelayanan perizinan.
        </p>
      </div>
    </div>
  );
}
