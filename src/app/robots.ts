import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/*', '/api/*', '/_next/*', '/auth/*'],
    },
    sitemap: 'https://cursopython.pro/sitemap.xml',
  }
}