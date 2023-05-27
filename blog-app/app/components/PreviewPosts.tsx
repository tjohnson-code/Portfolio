'use client';

import { usePreview } from '@/lib/sanity.preview';
import ListOfPosts from './ListOfPosts';

type Props = {
  query: string;
};

export default function PreviewPosts({ query }: Props) {
  const posts = usePreview(null, query);

  return <ListOfPosts posts={posts} />;
}
