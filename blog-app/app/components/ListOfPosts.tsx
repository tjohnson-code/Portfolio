import getFormattedDate from '@/lib/getFormattedDate';
import urlFor from '@/lib/urlFor';
import Image from 'next/image';
import ClientSideRoute from './ClientSideRoute';

type Props = {
  posts: Post[];
};

export default function ListOfPosts({ posts }: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 dark:text-amber-100/80">
        {/* Posts */}
        {posts.map(post => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col justify-center items-center mb-4">
              <div className="relative w-full h-96 drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out cursor-pointer">
                <Image
                  className="object-cover object-left lg:object-center rounded-lg"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-black/80 background-blur-lg rounded drop-shadow-lg p-5 flex justify-between">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {getFormattedDate(post._updatedAt)}
                      {/* {new Date(post._updatedAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
