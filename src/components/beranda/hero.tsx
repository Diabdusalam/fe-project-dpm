import { useEffect, useState } from "react";
import HeroContent from "./hero_content";
import { getSliders } from "@/query/get.sliders.query";

interface Slider {
  id: number;
  title: string;
  description: string | null;
  image: string;
  image_url: string;
  link: string;
  order_number: string;
  is_active: string;
}

export default function HeroBeranda() {
  const [slides, setSlides] = useState<Slider[]>([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const result = await getSliders();
        setSlides(result?.data || []);
      } catch (error) {
        console.error("Failed fetch sliders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = () => {
    if (!slides.length) return;
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  };

  const next = () => {
    if (!slides.length) return;
    setCurrent((c) => (c + 1) % slides.length);
  };

  if (loading) {
    return (
      <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="w-full h-[400px] sm:h-[500px] md:h-[650px] flex items-center justify-center">
        Slider belum tersedia
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image_url})`,
          }}
        />
      ))}
      {/* {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url("${slide.image_url || slide.image}")`,
          }}
        />
      ))} */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:to-transparent" />
      {/* <div className="absolute inset-0 z-30 flex items-center">
        <HeroContent
          title={slides[current]?.title}
          description={slides[current]?.description}
          link={slides[current]?.link}
        />
      </div> */}
      <div className="absolute inset-0 z-20 flex items-center">
        <HeroContent
          title={slides[current]?.title}
          description={slides[current]?.description}
          link={slides[current]?.link}
        />
      </div>

      <button
        onClick={prev}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full w-10 h-10 items-center justify-center shadow"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white rounded-full w-10 h-10 items-center justify-center shadow"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-4 md:bottom-40 md:left-28 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-blue-500 w-4 md:w-6"
                : "bg-white/60 w-1.5 md:w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
