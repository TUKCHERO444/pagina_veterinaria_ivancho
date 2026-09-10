import {
  WhatsappLogo,
  MapPin,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react/ssr";

const servicios = [
  "Consultas",
  "Vacunación",
  "Urgencias",
  "Análisis",
  "Cirugía",
  "Peluquería",
];

const enlaces = [
  { href: "#servicios", label: "Servicios" },
  { href: "#hospedaje", label: "Hospedaje" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#tienda", label: "Tienda" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Footer() {
  return (
    <footer className="bg-night pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-heading text-2xl font-bold uppercase tracking-wide text-white"
          >
            <img
              src="/imgs/logo.png"
              alt="Logo Veterinaria Ivancho"
              width={28}
              height={28}
              className="h-8 w-8"
            />
            IVANCHO CLINICA VETERINARIA
          </a>
          <p className="mt-4 max-w-md leading-relaxed text-night-muted">
            Somos una clínica veterinaria con consultas, tratamientos,
            cirugías, petshop, baños y cortes, análisis de laboratorio e
            internamiento, con un hospedaje amigable con tus engreídos de 4
            patas desde el 2005.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: InstagramLogo, label: "Instagram", href: "https://www.instagram.com/ivancho._vet/" },
              { icon: FacebookLogo, label: "Facebook", href: "https://www.facebook.com/p/Ivancho-Clinica-Veterinaria-Hospedaje-100070191636668/" },
              { icon: WhatsappLogo, label: "WhatsApp", href: "https://wa.me/51939229449" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-night-muted transition-all duration-200 hover:border-primary-light hover:bg-primary hover:text-white"
              >
                <Icon size={20} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2">
            {servicios.map((s) => (
              <li key={s}>
                <a
                  href="#servicios"
                  className="text-sm text-night-muted transition-colors hover:text-primary-light"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-white">
            Contacto
          </h3>
          <ul className="mt-4 space-y-3">
            {[
              { icon: MapPin, text: "Av. Arequipa cuadra 13 Mz B Lote 2" },
              { icon: WhatsappLogo, text: "+51 939 229 449" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2 text-sm text-night-muted">
                <Icon size={18} className="mt-0.5 shrink-0 text-primary-light" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {enlaces.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-night-muted transition-colors hover:border-primary-light hover:text-primary-light"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-night-muted">
            © {new Date().getFullYear()} Veterinaria Ivancho. Todos los derechos reservados.
          </p>
          <p className="text-sm text-night-muted">
            Hecho con cariño para las mascotas.
          </p>
        </div>
      </div>
    </footer>
  );
}