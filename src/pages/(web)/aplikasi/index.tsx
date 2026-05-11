import { ExternalLink, FileText } from "lucide-react";

const apps = [
  {
    id: 1,
    title: "Aplikasi Pengaduan",
    desc: "Platform digital yang memungkinkan masyarakat untuk melaporkan berbagai masalah atau keluhan terkait layanan publik, keamanan, atau fasilitas umum.",
    btnLabel: "Buka Aplikasi Pengaduan",
    href: "#",
  },
  {
    id: 2,
    title: "Aplikasi SKM",
    desc: "Platform yang dirancang untuk memonitor dan mengelola data kesehatan masyarakat secara menyeluruh.",
    btnLabel: "Buka Aplikasi SKM",
    href: "#",
  },
];

export default function Aplikasi() {
  return (
    <section className="bg-[#f0f2f8] min-h-screen py-14 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-center text-3xl font-extrabold text-[#1a2e5c] mb-3">
          Aplikasi <span className="text-blue-600">Pengaduan &amp; SKM</span>
        </h1>
        <p className="text-center text-slate-500 text-sm leading-relaxed mb-10">
          Platform digital yang memudahkan masyarakat untuk
          <br />
          melaporkan masalah atau keluhan serta memonitor data kesehatan
          masyarakat secara menyeluruh.
        </p>

        {/* Cards */}
        <div className="space-y-5">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 flex items-center gap-6"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <FileText className="w-9 h-9 text-blue-600" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="text-[#1a2e5c] font-bold text-lg mb-2">
                  {app.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {app.desc}
                </p>
              </div>

              {/* Button */}
              <a
                href={app.href}
                className="shrink-0 flex items-center gap-2 border-2 border-blue-600 text-blue-600 rounded-xl px-5 py-3 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 whitespace-nowrap"
              >
                <ExternalLink className="w-4 h-4" />
                {app.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
