/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ingluglobal.in",
  generateRobotsTxt: true,

  // Include all pages
  sitemapSize: 5000,

  // SEO defaults
  changefreq: "daily",
  priority: 0.7,

  // Exclude private routes if any
  exclude: ["/admin/*", "/dashboard/*"],
};

