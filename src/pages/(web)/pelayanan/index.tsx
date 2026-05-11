import ContentInovasi from "@/components/pelayanan/content-inovasi";
import ContentRegulasi from "@/components/pelayanan/content-regulasi";
import HeroPelayanan from "@/components/pelayanan/hero-pelayanan";

export default function Pelayanan() {
  return (
    <main className="flex flex-col gap-12">
      <HeroPelayanan />
      <ContentRegulasi />
      <ContentInovasi />
    </main>
  );
}
