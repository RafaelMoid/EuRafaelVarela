import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rafael-varela-portfolio-hub.vercel.app';
  const routes = ['/', '/projetos', '/experiencia', '/sobre', '/curriculo', '/contato'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));
}
