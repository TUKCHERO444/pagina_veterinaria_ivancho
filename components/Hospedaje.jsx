import {
  Bed,
  ShieldCheck,
  PawPrint,
  Clock,
  BowlFood,
  Camera,
} from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const features = [
  {
    icon: Bed,
    title: "Espacios cómodos",
    desc: "Habitaciones cálidas y amplias, adaptadas al tamaño y temperamento de tu mascota.",
  },
  {
    icon: Clock,
    title: "Cuidado 24/7",
    desc: "Personal presente todo el día para atender, jugar y velar por su seguridad.",
  },
  {
    icon: BowlFood,
    title: "Alimentación",
    desc: "Alimentación programada según sus necesidades. Puedes traer su alimento habitual.",
  },
  {
    icon: Camera,
    title: "Reportes diarios",
    desc: "Recibe fotos y novedades diarias para que estés tranquilo mientras viajas.",
  },
  {
    icon: ShieldCheck,
    title: "Instalaciones seguras",
    desc: "Ambientes cerrados, limpios y vigilados para que tu mascota esté protegida.",
  },
  {
    icon: PawPrint,
    title: "Paseos y juegos",
    desc: "Tiempo diario de paseo y socialización supervisada para que se divierta.",
  },
];

export default function Hospedaje() {
  return (
    <section
      id="hospedaje"
      className="relative overflow-hidden bg-gradient-to-br from-primary-paler via-paper to-accent-pale py-24"
    >
      <WaveDivider fill="#F8FBFF" />
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        {["/imgs/hospedaje/puppy-sleeping.gif", "/imgs/hospedaje/dog-sleeping.gif", "/imgs/hospedaje/sleeping-dog.gif"].map(
          (src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="gif-crossfade absolute inset-0 h-full w-full object-cover"
            />
          )
        )}
        <div className="absolute inset-0 bg-white/85" />
      </div>
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-accent-soft/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-0 h-[380px] w-[380px] rounded-full bg-primary-pale/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-soft bg-white/80 px-4 py-1.5 text-sm font-semibold text-accent-dark backdrop-blur-sm">
              <Bed size={16} aria-hidden="true" />
              Servicio de hospedaje
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
              Se queda a gusto,{" "}
              <span className="bg-gradient-to-r from-accent-dark to-accent bg-clip-text text-transparent">
                tú sales tranquilo
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
              Si tienes que viajar o estar fuera por unos días, deja a tu mascota
              en un hospedaje pensado para su comodidad y tu tranquilidad.
              Estadías flexibles para días, fines de semana o vacaciones.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Estadía diaria, fin de semana o larga",
                "Supervisión veterinaria incluida",
                "Reserva por WhatsApp o teléfono",
                "Valoración previa del huésped",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-accent-dark">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#ubicacion"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent-dark px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:bg-accent-night"
            >
              Consultar disponibilidad
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 80}>
                <article className="h-full rounded-2xl border border-accent-pale bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft hover:shadow-lg">
                  <Icon
                    size={28}
                    weight="fill"
                    className="text-accent-dark"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-ink">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}