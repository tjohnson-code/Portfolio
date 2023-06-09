// route handler enabling draft mode
import { redirect } from 'next/navigation';
import { draftMode } from 'next/headers';

export async function GET(request: Request) {
  draftMode().enable();
  redirect('/');
  // return new Response('Draft mode is enabled');
}
