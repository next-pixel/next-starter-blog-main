/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://krunal-shah.web.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }]
  }
}
