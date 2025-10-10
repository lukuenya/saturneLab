# SEO Testing Checklist ✅

Use this checklist to verify all SEO implementations are working correctly before and after deployment.

## Pre-Deployment Testing (Local)

### 1. Build & Run Production Build
```bash
npm run build
npm run start
```

**Verify:**
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] Site loads at http://localhost:3000

---

### 2. Test Sitemap & Robots.txt

**Sitemap (http://localhost:3000/sitemap.xml):**
- [ ] File loads successfully
- [ ] Contains all main pages (/, /services, /about, /contact, /blog)
- [ ] Contains blog post URLs
- [ ] Has both /fr and /en versions of each page
- [ ] Includes hreflang tags
- [ ] x-default points to French version

**Robots.txt (http://localhost:3000/robots.txt):**
- [ ] File loads successfully
- [ ] Allows all user agents
- [ ] Points to sitemap location
- [ ] Disallows /api/ routes

---

### 3. Test Meta Tags (Use Browser DevTools)

Visit each page and inspect `<head>` section:

**Homepage (http://localhost:3000/fr):**
- [ ] Title tag present and correct
- [ ] Meta description present
- [ ] Meta keywords present
- [ ] Canonical URL: https://www.saturne-lab.com/fr
- [ ] Hreflang tags: fr, en, x-default
- [ ] OG tags: title, description, image, url, type
- [ ] Twitter card tags present
- [ ] Geo tags for DRC present

**Repeat for:**
- [ ] /fr/services
- [ ] /fr/about
- [ ] /fr/contact
- [ ] /fr/blog
- [ ] /en (English homepage)
- [ ] /en/services

---

### 4. Test Structured Data

**Use Rich Results Test:**
1. Build production version
2. Deploy to staging or use ngrok for local testing
3. Visit: https://search.google.com/test/rich-results
4. Enter your URL

**Verify schemas detected:**
- [ ] Organization schema (homepage)
- [ ] WebSite schema (homepage)
- [ ] Service schema (homepage & services page)
- [ ] BreadcrumbList schema (if implemented on subpages)
- [ ] Article schema (blog posts)

**Alternative: Manual Check**
- [ ] View page source
- [ ] Search for `<script type="application/ld+json">`
- [ ] Verify JSON is valid (copy to jsonlint.com)

---

### 5. Test Language Switching

**French to English:**
- [ ] Click language switcher on /fr
- [ ] Should navigate to /en
- [ ] Content changes to English
- [ ] URL structure preserved (e.g., /fr/services → /en/services)

**English to French:**
- [ ] Click language switcher on /en
- [ ] Should navigate to /fr
- [ ] Content changes to French

**Navigation Links:**
- [ ] All header links preserve locale
- [ ] All footer links preserve locale
- [ ] Blog post links preserve locale

---

### 6. Test Mobile Responsiveness

**Use Chrome DevTools Device Mode:**
- [ ] iPhone SE (375px)
- [ ] iPhone 12 Pro (390px)
- [ ] iPad (768px)
- [ ] Desktop (1920px)

**Check:**
- [ ] All text is readable
- [ ] No horizontal scroll
- [ ] Touch targets are large enough
- [ ] Navigation menu works
- [ ] Forms are usable

---

### 7. Test Performance (Lighthouse)

**Run Lighthouse in Chrome DevTools:**

```bash
# Or use CLI
npm install -g lighthouse
lighthouse http://localhost:3000/fr --view
```

**Target Scores:**
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 95+

**Check Core Web Vitals:**
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

---

## Post-Deployment Testing (Production)

### 8. Verify Live URLs

**Test all main pages load:**
- [ ] https://www.saturne-lab.com/fr
- [ ] https://www.saturne-lab.com/en
- [ ] https://www.saturne-lab.com/fr/services
- [ ] https://www.saturne-lab.com/en/services
- [ ] https://www.saturne-lab.com/fr/about
- [ ] https://www.saturne-lab.com/fr/contact
- [ ] https://www.saturne-lab.com/fr/blog

**Test redirects:**
- [ ] https://www.saturne-lab.com → redirects to /fr
- [ ] https://www.saturne-lab.com/services → redirects to /fr/services

---

### 9. Test Production Meta Tags

**Use SEO tools:**
- [ ] https://metatags.io - Preview social sharing
- [ ] https://cards-dev.twitter.com/validator - Twitter cards
- [ ] https://developers.facebook.com/tools/debug/ - Facebook sharing

**Verify:**
- [ ] OG image displays correctly
- [ ] Title and description are correct
- [ ] No errors or warnings

---

### 10. Google Search Console Setup

**Add Property:**
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: https://www.saturne-lab.com
- [ ] Verify ownership (DNS or HTML file)

**Submit Sitemap:**
- [ ] Navigate to Sitemaps section
- [ ] Add sitemap URL: https://www.saturne-lab.com/sitemap.xml
- [ ] Click Submit
- [ ] Wait for processing (can take 24-48 hours)

**Check Coverage:**
- [ ] Monitor "Pages" section
- [ ] Verify pages are being indexed
- [ ] Fix any errors reported

---

### 11. Google Analytics Verification

**Check tracking is working:**
- [ ] Visit your site
- [ ] Open Google Analytics Real-Time report
- [ ] Verify your visit appears
- [ ] Navigate to different pages
- [ ] Confirm page views are tracked

**Test events (if configured):**
- [ ] Contact form submission
- [ ] Newsletter signup
- [ ] Link clicks

---

### 12. Mobile-Friendly Test

**Google's Mobile-Friendly Test:**
- [ ] Visit: https://search.google.com/test/mobile-friendly
- [ ] Enter: https://www.saturne-lab.com/fr
- [ ] Run test
- [ ] Verify "Page is mobile friendly"
- [ ] Fix any issues reported

---

### 13. PageSpeed Insights (Production)

**Test production site:**
- [ ] Visit: https://pagespeed.web.dev/
- [ ] Enter: https://www.saturne-lab.com/fr
- [ ] Test both Mobile and Desktop

**Target Scores:**
- [ ] Mobile Performance: 80+
- [ ] Desktop Performance: 90+
- [ ] All other metrics: 90+

**Review suggestions:**
- [ ] Note any critical issues
- [ ] Implement recommended fixes

---

### 14. Structured Data Validation (Production)

**Rich Results Test:**
- [ ] Visit: https://search.google.com/test/rich-results
- [ ] Enter: https://www.saturne-lab.com/fr
- [ ] Verify all schemas are detected
- [ ] Check for errors or warnings

**Schema Markup Validator:**
- [ ] Visit: https://validator.schema.org/
- [ ] Enter your URL
- [ ] Verify no errors

---

### 15. Social Media Sharing Test

**Test on actual platforms:**

**LinkedIn:**
- [ ] Create test post with your URL
- [ ] Verify preview shows correct image, title, description
- [ ] Delete test post

**Twitter:**
- [ ] Create test tweet with your URL
- [ ] Verify Twitter Card displays correctly
- [ ] Delete test tweet

**WhatsApp:**
- [ ] Send URL to yourself
- [ ] Verify preview appears correctly

---

### 16. Search Engine Indexing Check

**After 1-2 weeks:**

**Google:**
- [ ] Search: `site:saturne-lab.com`
- [ ] Verify pages are indexed
- [ ] Check if homepage appears

**Specific pages:**
- [ ] Search: `site:saturne-lab.com/fr/services`
- [ ] Search: `site:saturne-lab.com/en`

---

### 17. Keyword Ranking Check

**After 4-6 weeks, check rankings for:**

**Primary keywords:**
- [ ] "data analytics DRC"
- [ ] "data science Congo"
- [ ] "business intelligence Kinshasa"
- [ ] "consulting services Congo"

**Use tools:**
- Google Search Console (Search Results report)
- Manual searches in incognito mode
- Rank tracking tools (Ahrefs, SEMrush, etc.)

---

## Ongoing Monitoring (Monthly)

### 18. Monthly SEO Health Check

**Google Search Console:**
- [ ] Check for crawl errors
- [ ] Review coverage report
- [ ] Check mobile usability
- [ ] Review performance (impressions, clicks, CTR)
- [ ] Check for security issues

**Google Analytics:**
- [ ] Review organic traffic trends
- [ ] Check bounce rate
- [ ] Review top landing pages
- [ ] Check conversion rate

**Technical:**
- [ ] Test sitemap still loads
- [ ] Verify robots.txt unchanged
- [ ] Check for broken links
- [ ] Test page speed hasn't degraded

---

## Common Issues & Fixes

### Issue: Sitemap not loading
**Fix:** Check file exists in `/public/sitemap.xml`, verify deployment

### Issue: Pages not indexed
**Fix:** Submit sitemap in Search Console, check robots.txt isn't blocking

### Issue: Wrong language showing
**Fix:** Check middleware.js, verify locale detection logic

### Issue: Duplicate content warnings
**Fix:** Verify canonical URLs are correct, check hreflang implementation

### Issue: Low performance score
**Fix:** Optimize images, enable compression, minimize JavaScript

### Issue: Analytics not tracking
**Fix:** Check NEXT_PUBLIC_GA_ID environment variable, verify script loads

---

## Tools Reference

**SEO Testing:**
- Google Search Console: https://search.google.com/search-console
- Rich Results Test: https://search.google.com/test/rich-results
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/

**Meta Tag Preview:**
- Metatags.io: https://metatags.io
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Debugger: https://developers.facebook.com/tools/debug/

**Validation:**
- Schema Validator: https://validator.schema.org/
- JSON-LD Validator: https://jsonld.com/json-ld-validator/
- HTML Validator: https://validator.w3.org/

**Analytics:**
- Google Analytics: https://analytics.google.com
- Google Tag Manager: https://tagmanager.google.com

---

**Last Updated:** October 10, 2025  
**Status:** Ready for Testing ✅
