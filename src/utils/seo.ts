import type { Metadata } from 'next';

export function constructMetadata({
  title,
  description,
  path = '/',
  image = '/assets/og/og-image.png'
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
    applicationName: 'Rafael Varela Portfolio Hub',
    authors: [{ name: 'Rafael Varela' }],
    creator: 'Rafael Varela',
    publisher: 'Rafael Varela',
    category: 'portfolio',
    keywords: [
      'Rafael Varela',
      'desenvolvedor web',
      'WordPress',
      'PHP',
      'front-end',
      'React',
      'Next.js',
      'SEO tecnico',
      'performance',
      'acessibilidade'
    ],
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1
      }
    },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Rafael Varela Portfolio Hub',
      images: [{ url: image, width: 1200, height: 630, alt: 'Rafael Varela Portfolio Hub' }],
      locale: 'pt_BR',
      alternateLocale: ['en_US', 'es_ES'],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: 'Rafael Varela'
    }
  };
}
