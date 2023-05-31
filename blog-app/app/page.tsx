import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import PreviewSuspense from './components/PreviewSuspense';
import { draftMode } from 'next/headers';
import ListOfPosts from './components/ListOfPosts';
import PreviewPosts from './components/PreviewPosts';
import Link from 'next/link';
import { FaPenSquare } from 'react-icons/fa';

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)`;

export default async function Home() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-xl animate-pulse text-red-900">
              Loading Draft . . .
            </p>
          </div>
        }
      >
        <PreviewPosts query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 text-4xl text-center dark:text-white/80">
        The Eternal Freeze
      </p>
      <p className="text-4xl lg:text-2xl mb-12 flex justify-center items-center">
        <Link
          href="/studio"
          className="text-amber-100/80 no-underline hover:text-amber-100"
        >
          <FaPenSquare />
        </Link>
      </p>
      <ListOfPosts posts={posts} />
    </main>
  );
}
