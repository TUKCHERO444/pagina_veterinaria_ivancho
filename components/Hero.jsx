"use client";

import { useEffect, useRef, useState } from "react";
import {
  Stethoscope,
  Bed,
  ArrowRight,
  Sparkle,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import HeroBackground from "@/components/HeroBackground";

const textSlides = [
  {
    title: "Cuidamos a tu mascota",
    highlight: "como si fuera nuestra",
    sub: "Clínica veterinaria integral con atención experta y un trato cercano, en un ambiente limpio y luminoso.",
  },
  {
    title: "Hospedaje fresco y sereno",
    highlight: "se queda a gusto, tú sales tranquilo",
    sub: "Estadías cómodas, seguras y con cuidados diarios para que tu mascota descanse.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % textSlides.length),
      5000
    );
    return () => clearInterval(timer.current);
  }, [paused]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <HeroBackground />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent lg:from-white/95 lg:via-white/65 lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/85 via-transparent to-white/30 sm:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-soft bg-white/80 px-4 py-1.5 text-sm font-medium text-primary-deep backdrop-blur-sm">
              <Sparkle size={16} className="text-accent" weight="fill" aria-hidden="true" />
              Clínica · Hospedaje · Tienda
            </span>
          </Reveal>

          <div className="mt-6 min-h-[220px]">
            <Reveal delay={100}>
              {textSlides.map((s, i) => (
                <div
                  key={i}
                  className={i === index ? "block" : "hidden"}
                  aria-hidden={i !== index}
                >
                  <h1 className="font-heading text-4xl font-bold uppercase leading-[1.05] tracking-wide text-ink sm:text-6xl lg:text-7xl">
                    {s.title}{" "}
                    <span className="bg-gradient-to-r from-primary-deep via-primary to-accent bg-clip-text text-transparent">
                      {s.highlight}
                    </span>
                  </h1>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {textSlides[index].sub}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary-night"
              >
                Nuestros servicios
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="#hospedaje"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-dark px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-night"
              >
                Hospedaje
                <Bed size={18} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: Stethoscope, label: "+10 años de experiencia" },
                { icon: Bed, label: "Hospedaje seguro" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-ink-muted"
                >
                  <Icon size={20} className="text-primary-dark" aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
        role="tablist"
        aria-label="Seleccionar slide"
      >
        <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 backdrop-blur-sm">
          {textSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-primary-dark"
                  : "w-2.5 bg-line hover:bg-mist"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
