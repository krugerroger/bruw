// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'], // Ajoute ici les pages à cacher
    },
    sitemap: 'https://www.brunellaindependante.com/sitemap.xml',
  }
}