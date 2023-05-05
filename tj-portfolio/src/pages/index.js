import About from '@/components/About';
import FavIconHead from '@/components/FavIconHead';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-300 via-sky-600 to-slate-600">
      <FavIconHead />
      <Header />

      <main className="flex flex-col">
        <section id="hero" className="flex flex-row justify-center">
          <Hero />
        </section>
        <section id="about" className="flex justify-center">
          <About />
        </section>
        <section id="projects" className="flex justify-center"></section>
      </main>
    </div>
  );
}
