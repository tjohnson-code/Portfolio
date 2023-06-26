import About from '@/components/About';
import FavIconHead from '@/components/FavIconHead';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-200 via-slate-500 to-slate-700">
      <FavIconHead />
      <Header />
      <main className="flex flex-col items-center">
        <section
          id="hero"
          className="flex justify-center items-center h-screen"
        >
          <Hero />
        </section>
        <section id="about" className="h-screen flex items-center">
          <About />
        </section>
        <section
          id="projects"
          className="flex items-center justify-center min-h-screen p-4"
        >
          <Projects />
        </section>
      </main>
    </div>
  );
}
