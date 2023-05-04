import FavIconHead from '@/components/FavIconHead';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 via-sky-600 to-slate-600 overflow-hidden">
      <FavIconHead />
      <Header />

      <main className="flex justify-center">
        <Hero />
      </main>
    </div>
  );
}
