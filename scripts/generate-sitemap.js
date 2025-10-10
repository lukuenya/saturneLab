/**
 * Sitemap Generator for Saturne Lab
 * 
 * This script generates a sitemap.xml file with all pages and blog posts
 * Run with: node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.saturne-lab.com';
const LOCALES = ['fr', 'en'];

// Static pages (without locale prefix)
const STATIC_PAGES = [
  '',
  '/services',
  '/about',
  '/contact',
  '/blog'
];

// Get all blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  
  try {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames
      .filter(filename => filename.endsWith('.mdx'))
      .map(filename => filename.replace('.mdx', ''));
  } catch (error) {
    console.warn('Could not read blog posts directory:', error.message);
    return [];
  }
}

// Generate URL entry
function generateUrlEntry(path, locale, priority, changefreq = 'monthly') {
  const localeUrls = LOCALES.map(loc => 
    `    <xhtml:link rel="alternate" hreflang="${loc}" href="${BASE_URL}/${loc}${path}" />`
  ).join('\n');

  return `  <url>
    <loc>${BASE_URL}/${locale}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${localeUrls}
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/fr${path}" />
  </url>`;
}

// Generate sitemap
function generateSitemap() {
  const blogPosts = getBlogPosts();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  // Add static pages for each locale
  STATIC_PAGES.forEach(page => {
    LOCALES.forEach(locale => {
      const priority = page === '' ? '1.0' : page === '/blog' ? '0.9' : '0.8';
      const changefreq = page === '' || page === '/blog' ? 'weekly' : 'monthly';
      sitemap += generateUrlEntry(page, locale, priority, changefreq) + '\n\n';
    });
  });

  // Add blog posts for each locale
  blogPosts.forEach(slug => {
    LOCALES.forEach(locale => {
      sitemap += generateUrlEntry(`/blog/${slug}`, locale, '0.7', 'monthly') + '\n\n';
    });
  });

  sitemap += '</urlset>';

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemap, 'utf8');
  console.log('✅ Sitemap generated successfully at:', outputPath);
  console.log(`📊 Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
}

// Run the script
writeSitemap();
