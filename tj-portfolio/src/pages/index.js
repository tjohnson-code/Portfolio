import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-200 to-slate-600 overflow-hidden">
      <Head>
        <title>TJ's Portfolio</title>
      </Head>

      <Header />

      <main className="flex justify-center">
        <Hero />
      </main>
    </div>
  );
}
