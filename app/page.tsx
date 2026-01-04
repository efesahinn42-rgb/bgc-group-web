import Hero from "@/components/Hero";
import About from "@/components/About";
import Subsidiaries from "@/components/Subsidiaries";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bgc-dark">
      {/* 1. Kurumsal / Giriş Ekranı */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. Hakkımızda */}
      <About />

      {/* 3. İştiraklerimiz (Detaylı) */}
      <Subsidiaries />

      {/* 4. İletişim & Footer */}
      <Footer />
    </main>
  );
}
