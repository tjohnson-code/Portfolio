import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="h-screen bg-slate-400 overflow-hidden">
      <Head>
        <title>TJ's Portfolio</title>
      </Head>

      <Header />

      <main></main>
    </div>
  );
}
