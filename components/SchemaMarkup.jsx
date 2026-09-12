const BASE_URL = "https://veterinariaivancho.netlify.app";

const veterinarySchema = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: "Veterinaria Ivancho",
  alternateName: "Ivancho Clínica Veterinaria",
  description:
    "Clínica veterinaria integral en Chiclayo: consultas, vacunación, urgencias, cirugía, análisis de laboratorio, peluquería, petshop y hospedaje amigable para mascotas 24/7. Atendemos desde 2005.",
  url: BASE_URL,
  logo: `${BASE_URL}/imgs/logo.png`,
  image: `${BASE_URL}/imgs/logo.png`,
  telephone: "+51939229449",
  email: "",
  priceRange: "$$",
  currenciesAccepted: "PEN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Arequipa cuadra 13 Mz B Lote 2",
    addressLocality: "Chiclayo",
    addressRegion: "Lambayeque",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.778268,
    longitude: -79.856339,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "-6.778268,-79.856339"
  )}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Chiclayo" },
    { "@type": "AdministrativeArea", name: "Lambayeque" },
  ],
  foundingDate: "2005",
  sameAs: [
    "https://www.instagram.com/ivancho._vet/",
    "https://www.facebook.com/p/Ivancho-Clinica-Veterinaria-Hospedaje-100070191636668/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios veterinarios",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: "Consulta veterinaria en Chiclayo" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: "Vacunación para perros y gatos" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: "Urgencias veterinarias" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: "Análisis de laboratorio veterinario" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalProcedure", name: "Cirugía veterinaria" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Peluquería y baño para mascotas" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Hospedaje para mascotas 24/7 en Chiclayo" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Petshop y tienda de mascotas" },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Veterinaria Ivancho",
  alternateName: "Ivancho Clínica Veterinaria",
  url: BASE_URL,
  inLanguage: "es-PE",
  description:
    "Clínica veterinaria integral en Chiclayo con hospedaje amigable para mascotas desde 2005.",
  publisher: {
    "@type": "VeterinaryCare",
    name: "Veterinaria Ivancho",
    url: BASE_URL,
  },
};

const schemas = [veterinarySchema, websiteSchema];

export default function SchemaMarkup() {
  return schemas.map((schema) => (
    <script
      key={schema["@type"]}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}