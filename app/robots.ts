import { MetadataRoute } from 'next';

const baseUrl = 'https://codingbang.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/'], // Proteksi route internal jika nanti dibuat
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
