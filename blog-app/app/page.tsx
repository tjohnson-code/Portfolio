import Image from 'next/image';
import Posts from './components/Posts';

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-4xl text-center dark:text-white">
        The Eternal Freeze
      </p>
      <Posts />
    </main>
  );
}
