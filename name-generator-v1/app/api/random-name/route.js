import fs from 'fs/promises';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const data = await fs.readFile('app/data/names.json', 'utf-8');
    const names = JSON.parse(data);
    const randomName = names[Math.floor(Math.random() * names.length)];

    return NextResponse.json({ name: randomName });
  } catch (err) {
    console.error(err);
    return NextResponse.error({ status: 500, message: 'Server error' });
  }
}
