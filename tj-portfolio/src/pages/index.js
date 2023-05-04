import About from '@/components/About';
import FavIconHead from '@/components/FavIconHead';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 via-sky-600 to-slate-600 overflow-auto">
      <FavIconHead />
      <Header />

      <main className="flex flex-col justify-center">
        <section id="hero" className="flex flex-row justify-center">
          <Hero />
        </section>
        <section id="about" className="flex justify-center">
          <About />
        </section>
        <section id="projects" className="flex justify-center">
          <h3>Projects listed here</h3>
        </section>
      </main>
    </div>
  );
}
