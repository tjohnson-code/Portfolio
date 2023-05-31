import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import urlFor from '@/lib/urlFor';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
    }`;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="p-5">
      <section>
        <div className="text-amber-100/80 flex flex-col justify-center items-center max-w-7xl space-x-3">
          <div className="w-72 h-auto">
            <Image
              className="w-full h-auto rounded-lg"
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={250}
              height={300}
              sizes="100vw"
            />
          </div>
          <h1 className=" text-xl font-bold">{post.title}</h1>
          <p className="italic p-2">{post.author.name}</p>
          <PortableText value={post.body} />
        </div>
      </section>
    </article>
  );
}
