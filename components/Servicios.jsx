import {
  Stethoscope,
  Syringe,
  FirstAidKit,
  TestTube,
  PawPrint,
  Heart,
} from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";

const servicios = [
  {
    icon: Stethoscope,
    title: "Consultas",
    desc: "Atención general y chequeos periódicos con diagnóstico claro y trato cercano.",
    image: "/imgs/servicios/consultas.jpg",
  },
  {
    icon: Syringe,
    title: "Vacunación",
    desc: "Plan de vacunación completo y a tiempo para cada etapa de vida de tu mascota.",
    image: "/imgs/servicios/vacunacion.jpg",
  },
  {
    icon: FirstAidKit,
    title: "Urgencias",
    desc: "Atención rápida ante emergencias con prioridad en la estabilización y el bienestar.",
    image: "/imgs/servicios/urgencias.jpg",
  },
  {
    icon: TestTube,
    title: "Análisis",
    desc: "Laboratorio y estudios para un diagnóstico preciso, con resultados claros.",
    image: "/imgs/servicios/analisis.jpg",
  },
  {
    icon: Heart,
    title: "Cirugía",
    desc: "Procedimientos quirúrgicos seguros con seguimiento y cuidado postoperatorio.",
    image: "/imgs/servicios/cirugia.jpg",
  },
  {
    icon: PawPrint,
    title: "Peluquería",
    desc: "Baño, corte y cuidado estético para que tu mascota se vea y se sienta genial.",
    image: "/imgs/servicios/peluqueria.jpg",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="relative bg-surface py-24">
      <WaveDivider fill="#FFFFFF" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary-deep">
            <Stethoscope size={16} aria-hidden="true" />
            Servicios
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl lg:text-5xl">
            Atención veterinaria integral
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Todo lo que tu mascota necesita, en un solo lugar y con el cariño
            que merece. Nuestro equipo combina experiencia y vocación para
            cuidarla en cada etapa.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, title, desc, image }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group h-full [perspective:1200px]">
                <div className="relative h-full w-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="relative flex h-full flex-col rounded-2xl border border-line bg-paper p-7 shadow-sm transition-all duration-300 group-hover:border-primary-soft group-hover:shadow-xl group-hover:shadow-primary/5 [backface-visibility:hidden]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-pale text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={28} aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-wide text-ink">
                      {title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink-muted">
                      {desc}
                    </p>
                  </div>

                  <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/75 via-night/25 to-night/10"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-white">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-night-ink/90">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}