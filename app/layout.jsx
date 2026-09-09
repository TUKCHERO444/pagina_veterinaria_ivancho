import "./globals.css";

export const metadata = {
  title: "Veterinaria Ivancho | Tu Mascota, Tu Familia",
  description: "Atención veterinaria integral para tus mascotas.",
  icons: {
    icon: "/imgs/logo.png",
    apple: "/imgs/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
