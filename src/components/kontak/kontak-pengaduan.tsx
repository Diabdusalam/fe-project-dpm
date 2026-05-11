import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  User,
  Send,
  Info,
  Check,
  ExternalLink,
} from "lucide-react";

// ── Social icons (inline SVG, karena lucide tidak menyediakan brand icons) ──
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111827" />
  </svg>
);

// ── Sub-components ──────────────────────────────────────────────────────────

function InfoCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  children,
}: {
  icon: React.ComponentType<{ size: number; className: string }>;
  iconBg: string;
  iconColor: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex items-start gap-4">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
      >
        <Icon size={20} className={iconColor} />
      </div>
      <div>
        <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
        <div className="text-xs text-slate-500 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative bg-gray-200 rounded-xl h-40 overflow-hidden flex items-center justify-center">
      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#d1d5db 0,#d1d5db 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,#d1d5db 0,#d1d5db 1px,transparent 1px,transparent 32px)",
        }}
      />
      {/* Roads */}
      <div className="absolute left-0 right-0 h-3.5 bg-gray-100 top-1/2 -translate-y-1/2" />
      <div className="absolute top-0 bottom-0 w-3.5 bg-gray-100 left-[40%]" />
      {/* Green patch */}
      <div className="absolute w-14 h-10 bg-green-200 rounded-lg right-5 bottom-5" />
      {/* Pin */}
      <MapPin
        size={36}
        className="relative z-10 text-blue-600 fill-blue-600/20 drop-shadow"
      />
    </div>
  );
}

function SocialButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType;
  label: string;
}) {
  return (
    <button className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 transition-colors text-white rounded-xl px-5 py-3.5 font-semibold text-sm w-full">
      <Icon />
      {label}
    </button>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function KontakPengaduan() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    telepon: "",
    pesan: "",
  });

  const handleChange = (e: any) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    alert("Pesan berhasil dikirim!");
    setForm({ nama: "", email: "", telepon: "", pesan: "" });
  };

  return (
    <div className="min-h-screen bg-[#f0f4ff] py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Kontak &amp; <span className="text-blue-600">Pengaduan</span>
          </h1>
          <p className="text-slate-500 mt-2 text-sm">
            Kami siap membantu Anda dengan informasi dan layanan yang Anda
            butuhkan
          </p>
        </div>

        {/* ── Info Cards Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <InfoCard
            icon={MapPin}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            title="Alamat Kantor"
          >
            Jl. Merdeka, Karang Mulia,
            <br />
            Distrik Nabire, Kabupaten Nabire, Papua Tengah 98811
          </InfoCard>
          <InfoCard
            icon={Phone}
            iconBg="bg-green-50"
            iconColor="text-green-600"
            title="Telepon"
          >
            (0967) 536 635
            <br />
            0811-2345-6789 (WhatsApp)
          </InfoCard>
          <InfoCard
            icon={Mail}
            iconBg="bg-purple-50"
            iconColor="text-purple-600"
            title="Email"
          >
            dpmptspppt@gmail.com
          </InfoCard>
          <InfoCard
            icon={Clock}
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            title="Jam Operasional"
          >
            Senin – Jumat: 08.00 – 16.00 WIT
            <br />
            Sabtu – Minggu: Tutup
          </InfoCard>
        </div>

        {/* ── Main 2-col Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            {/* Kirim Pesan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center">
                  <MessageSquare size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-800 text-base">
                    Kirim Pesan
                  </p>
                  <p className="text-slate-500 text-xs">
                    Isi formulir di bawah ini
                  </p>
                </div>
              </div>

              {/* Nama */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                  />
                </div>
              </div>

              {/* Email & Telepon */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="cth. email@domain.com"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Telepon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      name="telepon"
                      value={form.telepon}
                      onChange={handleChange}
                      type="tel"
                      placeholder="cth. 0812-3456-7890"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Pesan */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pesan <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  rows={5}
                  maxLength={1000}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition resize-none"
                />
                <p className="text-right text-xs text-slate-400">
                  {form.pesan.length}/1000
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3.5 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={16} /> Kirim Pesan
              </button>
            </div>

            {/* Informasi Penting */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                  <Info size={14} className="text-white" />
                </div>
                <span className="font-extrabold text-slate-800 text-sm">
                  Informasi Penting
                </span>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Layanan pengaduan 24/7 melalui website",
                  "Konsultasi gratis untuk calon investor",
                  "Proses perizinan online tersedia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-5">
            {/* Lokasi Kami */}
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-blue-600 p-5 flex items-start gap-4">
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-extrabold text-white text-lg">
                    Lokasi Kami
                  </p>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                    Kunjungi kantor kami untuk pelayanan langsung
                    <br />
                    dan konsultasi
                  </p>
                </div>
              </div>
              <div className="bg-white p-5">
                <MapPlaceholder />
                <div className="text-center mt-4">
                  <p className="font-bold text-blue-600 text-sm">Peta Lokasi</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Jl. Pemerintahan No. 1, Nabire
                    <br />
                    Papua Tengah 98818
                  </p>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl py-2.5 text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={15} /> Buka Maps
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 rounded-2xl p-5">
              <p className="font-extrabold text-white text-base mb-1">
                Ikuti Media Sosial Kami
              </p>
              <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                Dapatkan update terbaru seputar layanan, berita,
                <br />
                dan informasi investasi
              </p>
              <div className="grid grid-cols-2 gap-3">
                <SocialButton icon={FacebookIcon} label="Facebook" />
                <SocialButton icon={InstagramIcon} label="Instagram" />
                <SocialButton icon={TwitterIcon} label="Twitter" />
                <SocialButton icon={YoutubeIcon} label="Youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
