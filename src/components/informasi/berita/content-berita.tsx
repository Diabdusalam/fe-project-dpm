import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  MessageCircle,
  User,
} from "lucide-react";

const sidebarBerita = [
  {
    id: 1,
    img: "https://placehold.co/80x70/1a3a5c/ffffff?text=Berita",
    title: "Kawal Sukses Usaha di Otsus: Mara, Kecil, Sampai Besar",
    date: "02 Maret 2026",
  },
  {
    id: 2,
    img: "https://placehold.co/80x70/2d6a9f/ffffff?text=PKK",
    title: "PKK Polda Gelar Me'nub'e Budi Karya Bersama Polwan Polri...",
    date: "02 Maret 2026",
  },
  {
    id: 3,
    img: "https://placehold.co/80x70/c0392b/ffffff?text=Anggaran",
    title: "Anggaran Ttm dari Gubernur Koffiifah Rp. 10 Miliar, Penyerbutan...",
    date: "02 Maret 2026",
  },
  {
    id: 4,
    img: "https://placehold.co/80x70/16a085/ffffff?text=Sidan",
    title: "Sidan Naolon, Vandar Soduk Kearnyeragan Oran...",
    date: "02 Maret 2026",
  },
  {
    id: 5,
    img: "https://placehold.co/80x70/8e44ad/ffffff?text=Budaya",
    title: "Melestarikan Budaya Lokal Papua Tengah Lewat Festival ...",
    date: "01 Maret 2026",
  },
];

export default function ContentBerita() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', 'Noto Sans', sans-serif",
        background: "#f7f8fa",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* Page Header */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8edf2",
          padding: "20px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#111827",
                marginBottom: 6,
              }}
            >
              Berita <span style={{ color: "#2d6a9f" }}>Terkini</span>
            </h1>
            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "#6b7280",
                marginBottom: 8,
              }}
            >
              <span>Beranda</span>
              <ChevronRight size={13} />
              <span style={{ color: "#2d6a9f", fontWeight: 500 }}>
                Berita Terkini
              </span>
            </nav>
            <p style={{ fontSize: 14, color: "#6b7280" }}>
              Informasi terbaru seputar kegiatan, layanan, dan program DPM-PTSP
              Papua Tengah.
            </p>
          </div>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 18px",
              border: "1.5px solid #d1d5db",
              borderRadius: 8,
              background: "#fff",
              fontSize: 13,
              fontWeight: 500,
              color: "#374151",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <ArrowLeft size={14} /> Kembali ke Beranda
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "28px 32px",
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: 28,
        }}
      >
        {/* Sidebar */}
        <aside>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #e8edf2",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "1px solid #e8edf2",
              }}
            >
              <h2 style={{ fontWeight: 700, fontSize: 16, color: "#111827" }}>
                Berita Terbaru
              </h2>
            </div>
            <div>
              {sidebarBerita.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "14px 16px",
                    borderBottom:
                      i < sidebarBerita.length - 1
                        ? "1px solid #f0f2f5"
                        : "none",
                    cursor: "pointer",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f8fafc")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: 80,
                      height: 60,
                      borderRadius: 6,
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#1f2937",
                        lineHeight: 1.4,
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </p>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontSize: 11,
                        color: "#9ca3af",
                      }}
                    >
                      <Calendar size={11} /> {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: 16 }}>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 8,
                  background: "#fff",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#374151",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Lihat Semua Berita <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </aside>

        {/* Article */}
        <main>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              border: "1px solid #e8edf2",
              padding: "28px 32px",
            }}
          >
            {/* Category + Date */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 4,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Kegiatan
              </span>
              <span style={{ color: "#9ca3af", fontSize: 13 }}>•</span>
              <span style={{ fontSize: 13, color: "#6b7280" }}>
                02 Maret 2026
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: "#111827",
                lineHeight: 1.3,
                marginBottom: 16,
              }}
            >
              Budayakan Disiplin Kerja dan Jadilah ASN Inovatif di Papua Tengah
            </h1>

            {/* Meta */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
                paddingBottom: 16,
                borderBottom: "1px solid #f0f2f5",
              }}
            >
              <div style={{ display: "flex", gap: 16 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 13,
                    color: "#6b7280",
                  }}
                >
                  <User size={13} /> Admin
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 13,
                    color: "#6b7280",
                  }}
                >
                  <Clock size={13} /> 5 menit baca
                </span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: "#1877f2",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <Clock size={14} />
                </button>
                <button
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: "#111",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <Clock size={14} />
                </button>
                <button
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: "#25d366",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  <MessageCircle size={14} />
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <img
              src="https://placehold.co/760x400/1a3a5c/ffffff?text=Foto+Kegiatan+ASN+Papua+Tengah"
              alt="Kegiatan ASN Papua Tengah"
              style={{
                width: "100%",
                borderRadius: 10,
                marginBottom: 22,
                objectFit: "cover",
              }}
            />

            {/* Content */}
            <div style={{ fontSize: 15, lineHeight: 1.85, color: "#374151" }}>
              <p style={{ marginBottom: 16 }}>
                Kepala BKPSDM Provinsi Papua Tengah, Meki Nawipa, S.IP, MM
                mengatakan, STTP yang diterima adalah surat resmi dari Itel
                dalam CPNS dalam mengikuti Pelatihan Dasar (Latsar). Dokumen ini
                dikeluarkan oleh Badan Pengembangan Sumber Daya Aparatur
                Provinsi Papua selaku penyelenggara latsar yang berlangsung
                selama 51 hari, yakni dari 8 September hingga 6 November 2025
                lalu.
              </p>

              <blockquote
                style={{
                  borderLeft: "4px solid #2d6a9f",
                  paddingLeft: 16,
                  margin: "20px 0",
                  color: "#1f2937",
                  fontStyle: "italic",
                  background: "#f0f7ff",
                  borderRadius: "0 8px 8px 0",
                  padding: "14px 16px",
                }}
              >
                "Tetapi STTP ini tidak boleh dipandang semata hanya sebagai
                lembaran dokumen untuk syarat PNS atau naik jabatan ke depan.
                Saya meminta kepada semua adik sekalian, semua ilmu yang
                didapatkan selama latsar harus diaktualisasi di tempat kerjaMu.
                Jadilah ASN yang kreatif dan inovatif di tengah era digital,"
                kata Meki Nawipa di sela-sela acara pembagian STTP.
              </blockquote>

              {/* Inline image + text */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.5fr",
                  gap: 20,
                  margin: "20px 0",
                  alignItems: "start",
                }}
              >
                <img
                  src="https://placehold.co/320x220/2d6a9f/ffffff?text=Rapat+Koordinasi"
                  alt="Rapat Koordinasi"
                  style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
                />
                <p style={{ margin: 0 }}>
                  Menurut Donol, terbitnya STTP mengukuhkan bahwa peserta
                  dinyatakan lulus dalam ujian latsar, kendati demikian, ia
                  meminta CPNS Formasi Pratama di Papua Tengah ini tak berpuas
                  diri dan wajib tempel menjadi agen perubahan (agent of change)
                  dengan menerapkan nilai-nilai BerAKHLAK (Berorientasi
                  Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, dan
                  Kolaboratif) di lingkungan kerjanya.
                  <br />
                  <br />
                  "Kalian banyak yang masih muda, masih panjang perjalanan karir
                  sebagai ASN atau depan. Karena itu, kalian harus menjadi
                  pembeda dan unggul dalam kinerja di tempat kerjamu, kuncinya
                  hanya dua yaitu disiplin tinggi dan jujur. Kalau dua hal itu
                  diterapkan, saya percaya ke depan karirmu akan bagus,"
                  ujarnya.
                </p>
              </div>

              <p style={{ marginTop: 16 }}>
                Marton Suhendra Oaonri, Kabupaten Paniai ini juga menegaskan,
                Pemerintah Provinsi Papua Tengah di bawah kepemimpinan Gubernur
                Meki Nawipa, S.H dan Wakil Gubernur Deinas Geley, S.Sos., M.Si.
                tengah mendorong peningkatan kinerja melalui penerapan disiplin
                yang tinggi bagi seluruh ASN.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
