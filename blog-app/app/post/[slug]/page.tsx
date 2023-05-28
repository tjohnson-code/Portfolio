import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

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
    <article>
      <section>
        <div className="text-amber-100/80">
          <h1>{post.title}</h1>
          <p>{post.author.name}</p>
        </div>
      </section>
    </article>
  );
}
