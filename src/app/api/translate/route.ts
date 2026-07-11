import { NextResponse } from 'next/server';
import { translate } from '@vitalets/google-translate-api';

type TranslationRequest = {
  source: unknown;
  target: string;
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

async function translateValue(value: unknown, target: string): Promise<unknown> {
  if (typeof value === 'string') {
    const { text } = await translate(value, { to: target });
    return text;
  }

  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => translateValue(item, target)));
  }

  if (isPlainObject(value)) {
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, item]) => [key, await translateValue(item, target)] as const)
    );
    return Object.fromEntries(entries);
  }

  return value;
}

export async function POST(request: Request) {
  const body = (await request.json()) as TranslationRequest;
  const target = body.target.split('-')[0] || 'en';

  try {
    const translated = await translateValue(body.source, target);
    return NextResponse.json({ translated });
  } catch (error) {
    return NextResponse.json({ error: 'Translation failed', details: String(error) }, { status: 500 });
  }
}
