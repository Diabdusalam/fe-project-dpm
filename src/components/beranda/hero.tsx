"use client";
import { useState, useEffect } from "react";
import HeroContent from "./hero_content";

const slides = ["/background.jpg", "/background2.png"];

export default function HeroBeranda() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden">
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/30 md:to-transparent" />

      <div className="absolute inset-0 z-20 flex items-center">
        <HeroContent />
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
