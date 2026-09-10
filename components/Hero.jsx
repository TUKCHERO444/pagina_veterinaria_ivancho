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
    title: "Cuidado y amor para él,",
    highlight: "cuando tú no estás",
    sub: "Hospedaje amigable con tus engreídos de 4 patas: estadías cómodas, seguras y con atención diaria.",
  },
  {
    title: "Todo para tus engreídos,",
    highlight: "en nuestra tienda",
    sub: "Alimentos, juguetes, accesorios y productos de higiene para consentir a tu mascota todos los días.",
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
      6000
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
      <HeroBackground index={index} />

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
                { icon: Stethoscope, label: "Desde el 2005" },
                {
                  icon: Bed,
                  label: "18 años de hospedaje",
                  detail: "Primer hospedaje de Chiclayo desde 2008",
                },
              ].map(({ icon: Icon, label, detail }) => (
                <div key={label} className="text-sm text-ink-muted">
                  <span className="flex items-center gap-2">
                    <Icon size={20} className="text-primary-dark" aria-hidden="true" />
                    {label}
                  </span>
                  {detail && (
                    <span className="mt-1 block pl-7 text-xs text-ink-muted/80">
                      {detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="relative flex items-center justify-center">
          <div
            className="pointer-events-none absolute inset-0 m-auto aspect-square max-w-[20rem] rounded-full bg-primary-pale/60 blur-3xl sm:max-w-[26rem] lg:max-w-[30rem]"
            aria-hidden="true"
          />
          <img
            src="/imgs/logo.png"
            alt="Logo Veterinaria Ivancho"
            width={1427}
            height={1427}
            className="relative h-auto w-full max-w-[10rem] object-contain drop-shadow-2xl sm:max-w-[14rem] lg:max-w-[30rem]"
          />
        </Reveal>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        role="tablist"
        aria-label="Seleccionar slide"
      >
        <div className="flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-2 backdrop-blur-sm">
          {textSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Diapositiva ${i + 1} de ${textSlides.length}`}
              onClick={() => setIndex(i)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                i === index
                  ? "scale-125 bg-accent shadow-sm shadow-accent/50"
                  : "bg-line hover:scale-110 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
