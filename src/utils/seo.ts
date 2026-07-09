import type { Metadata } from 'next';

export function constructMetadata({
  title,
  description,
  path = '/',
  image = '/assets/og/og-image.webp'
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const baseUrl = 'https://rafael-varela-portfolio-hub.vercel.app';
  const canonical = `${baseUrl}${path}`;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Rafael Varela Portfolio Hub',
      images: [{ url: image, width: 1200, height: 630, alt: 'Rafael Varela Portfolio Hub' }],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}
