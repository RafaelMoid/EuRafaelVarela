import { NextResponse } from 'next/server';
import { translate } from '@vitalets/google-translate-api';

type TranslationRequest = {
  source: unknown;
  target: string;
  strict?: boolean;
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const preservedKeys = new Set(['slug', 'image', 'deployUrl', 'githubUrl', 'projectSlugs']);

async function translateValue(value: unknown, target: string, strict = false, key?: string): Promise<unknown> {
  if (key && preservedKeys.has(key)) {
    return value;
  }

  if (typeof value === 'string') {
    if (value.startsWith('/') || value.startsWith('#') || value.startsWith('http')) {
      return value;
    }

    try {
      const { text } = await translate(value, { to: target });
      return text;
    } catch (error) {
      if (strict) {
        throw error;
      }

      return value;
    }
  }

  if (Array.isArray(value)) {
    const translatedItems = [];

    for (const item of value) {
      translatedItems.push(await translateValue(item, target, strict, key));
    }

    return translatedItems;
  }

  if (isPlainObject(value)) {
    const entries = [];

    for (const [itemKey, item] of Object.entries(value)) {
      entries.push([itemKey, await translateValue(item, target, strict, itemKey)] as const);
    }

    return Object.fromEntries(entries);
  }

  return value;
}

export async function POST(request: Request) {
  const body = (await request.json()) as TranslationRequest;
  const target = body.target === 'zh-CN' ? 'zh-CN' : body.target.split('-')[0] || 'en';

  try {
    const translated = await translateValue(body.source, target, Boolean(body.strict));
    return NextResponse.json({ translated });
  } catch (error) {
    return NextResponse.json({ error: 'Translation failed', details: String(error) }, { status: 500 });
  }
}
