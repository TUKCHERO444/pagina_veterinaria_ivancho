import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Hospedaje from "@/components/Hospedaje";
import Nosotros from "@/components/Nosotros";
import Tienda from "@/components/Tienda";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Hospedaje />
        <Nosotros />
        <Tienda />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}