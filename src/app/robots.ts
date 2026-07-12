import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ['facebookexternalhit', 'Facebot', 'Twitterbot', 'LinkedInBot', 'Slackbot', 'WhatsApp'],
        allow: '/'
      },
      {
        userAgent: '*',
        disallow: '/'
      }
    ]
  };
}
