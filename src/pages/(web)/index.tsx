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
  );
}
