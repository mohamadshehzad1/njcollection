/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://njcollection.com.pk', // ✅ REQUIRED
    generateRobotsTxt: true, // ✅ also creates robots.txt
    sitemapSize: 7000,
    generateIndexSitemap: true,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/404', '/server-sitemap.xml'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        {
          userAgent: '*',
          disallow: ['/api/', '/_next/'],
        },
      ],
    },
    additionalSitemaps: [
      'https://njcollection.com.pk/server-sitemap.xml',
    ],
  };
  