"use client";

const slides = [
  "/hero/slide-1.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
];

export default function HeroBackground({ index }) {
  const active = index % slides.length;

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}