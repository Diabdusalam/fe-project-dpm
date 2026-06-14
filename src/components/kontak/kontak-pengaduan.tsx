import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/assets/icon";
import {
  postKirimPesan,
  type KirimPesanPayload,
} from "@/query/post.kirim_pesan.query";
import {
  Check,
  ExternalLink,
  Info,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function MapPlaceholder() {
  const location = "DPMPTSP Papua Tengah Nabire";
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <iframe
        title="Lokasi DPM-PTSP Papua Tengah"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          location,
        )}&z=17&output=embed`}
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
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

export default function KontakPengaduan() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<KirimPesanPayload>({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  const pesanValue = watch("message") || "";

  const onSubmit = async (data: KirimPesanPayload) => {
    try {
      await postKirimPesan({
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        message: data.message,
      });

      alert("Pesan berhasil dikirim!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan!");
    }
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
        </div> */}

        {/* ── Main 2-col Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* LEFT */}
          <div className="flex flex-col gap-5">
            {/* Kirim Pesan */}
            {/* <form  className="bg-white rounded-2xl p-6 shadow-sm">
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
            </form> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
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
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                    {...register("name", {
                      required: "Nama wajib diisi",
                    })}
                  />
                </div>

                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email & Telepon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
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
                      type="email"
                      placeholder="cth. email@domain.com"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                      {...register("email", {
                        required: "Email wajib diisi",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Format email tidak valid",
                        },
                      })}
                    />
                  </div>

                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
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
                      type="tel"
                      placeholder="cth. 0812-3456-7890"
                      className="w-full border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition"
                      {...register("phone_number", {
                        required: "Nomor telepon wajib diisi",
                      })}
                    />
                  </div>

                  {errors.phone_number && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Pesan */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Pesan <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={5}
                  maxLength={1000}
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm bg-slate-50 focus:bg-white focus:border-blue-500 outline-none transition resize-none"
                  {...register("message", {
                    required: "Pesan wajib diisi",
                    maxLength: {
                      value: 1000,
                      message: "Pesan maksimal 1000 karakter",
                    },
                  })}
                />

                <div className="flex justify-between mt-1">
                  {errors.message ? (
                    <p className="text-red-500 text-xs">
                      {errors.message.message}
                    </p>
                  ) : (
                    <span />
                  )}

                  <p className="text-right text-xs text-slate-400">
                    {pesanValue.length}/1000
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white font-bold rounded-xl py-3.5 text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Send size={16} />
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
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
                    Jl. Merdeka, Karang Mulia,
                    <br />
                    Distrik Nabire, Kabupaten Nabire, Papua Tengah 98811
                  </p>
                </div>
                <Link
                  to="https://www.google.com/maps?ll=-3.364829,135.504762&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=9160340274367264289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl py-2.5 text-sm font-semibold transition-colors"
                >
                  <ExternalLink size={15} /> Buka Maps
                </Link>
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
                <SocialButton icon={Mail} label="Youtube" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
