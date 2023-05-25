import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

function Posts() {
  const posts = getSortedPostsData();
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bolt dark:text-white/90">Musings</h2>
      <ul className="w-full">
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}

export default Posts;
