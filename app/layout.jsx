import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const BASE_URL = "https://veterinariaivancho.netlify.app";
const SITE_NAME = "Veterinaria Ivancho";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Veterinaria Ivancho | Clínica Veterinaria en Chiclayo",
    template: `%s | Veterinaria Ivancho`,
  },
  description:
    "Clínica veterinaria integral en Chiclayo: consultas, vacunación, urgencias, cirugía, análisis, peluquería, petshop y hospedaje amigable para mascotas 24/7. Atención con cariño desde 2005.",
  keywords: [
    "veterinaria Chiclayo",
    "clínica veterinaria Chiclayo",
    "veterinario en Chiclayo",
    "hospedaje de mascotas Chiclayo",
    "hospedaje perros y gatos Chiclayo",
    "vacunación para mascotas Chiclayo",
    "urgencias veterinarias Chiclayo",
    "cirugía veterinaria Chiclayo",
    "laboratorio veterinario Chiclayo",
    "peluquería canina Chiclayo",
    "petshop Chiclayo",
    "tienda de mascotas Lambayeque",
    "veterinaria Lambayeque",
    "veterinario cerca de mí",
    "Ivancho veterinaria",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "veterinaria",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/imgs/logo.png",
    apple: "/imgs/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: "Veterinaria Ivancho | Clínica Veterinaria en Chiclayo",
    description:
      "Clínica veterinaria integral en Chiclayo: consultas, vacunación, urgencias, cirugía, análisis, peluquería, petshop y hospedaje amigable para mascotas 24/7. Desde 2005.",
    images: [
      {
        url: "/imgs/logo.png",
        width: 1427,
        height: 1427,
        alt: "Logo Veterinaria Ivancho - Clínica veterinaria en Chiclayo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterinaria Ivancho | Clínica Veterinaria en Chiclayo",
    description:
      "Clínica veterinaria integral en Chiclayo: consultas, vacunación, urgencias, cirugía, análisis, peluquería, petshop y hospedaje amigable 24/7.",
    images: ["/imgs/logo.png"],
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="bGy-kE67qJB9sp7agzhr00TOnGbUOb_AEFOu0IIzqzw"
        />
        <meta name="geo.region" content="PE-LAM" />
        <meta name="geo.placename" content="Chiclayo" />
        <meta name="geo.position" content="-6.778268;-79.856339" />
        <meta name="ICBM" content="-6.778268, -79.856339" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}