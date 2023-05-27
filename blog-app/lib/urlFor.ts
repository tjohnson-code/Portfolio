import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
  return builder.image(source);
}
