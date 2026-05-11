import BantuanSection from "@/components/beranda/content_bantuan";
import ContentBerita from "@/components/beranda/content_berita";
import ContentPapuaTengah from "@/components/beranda/content_papua_tengah";
import ContentKeindahan from "@/components/beranda/content_wisata";
import HeroBeranda from "@/components/beranda/hero";
import HeroStatus from "@/components/beranda/hero_status";
import PetaPotensi from "@/components/beranda/peta_potensi";

export default function Beranda() {
  return (
    <main>
      <HeroBeranda />
      <HeroStatus />
      <ContentPapuaTengah />
      <PetaPotensi />
      <BantuanSection />
      <ContentBerita />
      <ContentKeindahan />
    </main>
    // <div className="p-4 font-black justify-center items-center">
    //   <div className="text-center">
    //     {" "}
    //     <h1 className="text-2xl font-bold mb-4">Beranda</h1>
    //     <p>Selamat datang di halaman beranda!</p>
    //   </div>
    // </div>
  );
}
