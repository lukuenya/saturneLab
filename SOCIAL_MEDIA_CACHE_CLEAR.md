# How to Clear Social Media Link Preview Cache

When you update your website's Open Graph meta tags, social media platforms may still show the old preview because they cache this information. Here's how to clear the cache for each platform:

## 🔄 Quick Links to Cache Clearing Tools

### Facebook & Messenger
**URL:** https://developers.facebook.com/tools/debug/

**Steps:**
1. Go to the Facebook Sharing Debugger
2. Enter your URL: `https://www.saturne-lab.com`
3. Click "Debug"
4. Click "Scrape Again" to force Facebook to fetch the new meta tags
5. Test both:
   - `https://www.saturne-lab.com`
   - `https://www.saturne-lab.com/fr`
   - `https://www.saturne-lab.com/en`

**Note:** This clears the cache for both Facebook and Messenger.

---

### LinkedIn
**URL:** https://www.linkedin.com/post-inspector/

**Steps:**
1. Go to the LinkedIn Post Inspector
2. Enter your URL: `https://www.saturne-lab.com`
3. Click "Inspect"
4. LinkedIn will fetch the latest meta tags

---

### WhatsApp
WhatsApp doesn't have an official cache clearing tool, but you can force it to refresh:

**Method 1: Wait (Recommended)**
- WhatsApp cache expires after 7 days
- After updating your meta tags, wait 7 days for automatic refresh

**Method 2: URL Parameters**
- Add a query parameter to force a new cache entry
- Example: `https://www.saturne-lab.com?v=2`
- This creates a new cache entry, but the original URL will still show old preview

**Method 3: Use Facebook Debugger**
- Since WhatsApp is owned by Meta, clearing Facebook's cache sometimes helps
- Use the Facebook Sharing Debugger (link above)

---

### Twitter/X
**URL:** https://cards-dev.twitter.com/validator

**Steps:**
1. Go to the Twitter Card Validator
2. Enter your URL: `https://www.saturne-lab.com`
3. Click "Preview card"
4. Twitter will fetch the latest meta tags

**Note:** You may need to be logged into Twitter/X to use this tool.

---

### Telegram
Telegram doesn't have an official cache clearing tool.

**Method:**
- Send the link to yourself or a test group
- If the preview is still old, wait 24 hours
- Telegram's cache typically refreshes within 24 hours

---

## 📋 Checklist After Updating Meta Tags

- [ ] Deploy changes to production (Vercel)
- [ ] Wait 2-3 minutes for deployment to complete
- [ ] Clear Facebook/Messenger cache
- [ ] Clear LinkedIn cache
- [ ] Clear Twitter/X cache
- [ ] Test WhatsApp (may need to wait or use URL parameter)
- [ ] Test Telegram (may need to wait 24 hours)

---

## 🧪 Testing Your Meta Tags

### Online Testing Tools

1. **OpenGraph.xyz**
   - URL: https://www.opengraph.xyz/
   - Shows how your link will appear on all major platforms

2. **Meta Tags Validator**
   - URL: https://metatags.io/
   - Comprehensive preview for all social platforms

3. **Social Share Preview**
   - URL: https://socialsharepreview.com/
   - Quick preview for multiple platforms

---

## 🔍 Verify Your Meta Tags

You can verify your meta tags are correctly set by viewing the page source:

1. Go to `https://www.saturne-lab.com`
2. Right-click → "View Page Source"
3. Look for these meta tags in the `<head>` section:

```html
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://www.saturne-lab.com/images/og-image.png" />
<meta property="og:url" content="https://www.saturne-lab.com" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Saturne Lab" />
```

---

## ⚠️ Common Issues

### Issue: Cache still not clearing
**Solution:** 
- Make sure your changes are deployed to production
- Check that the meta tags are actually in the HTML source
- Some platforms can take up to 24-48 hours to fully refresh

### Issue: Different preview on different platforms
**Solution:**
- Each platform has slightly different requirements
- Make sure you have both `og:image` and `twitter:image` tags
- Ensure image is at least 1200x630px for best results

### Issue: Image not showing
**Solution:**
- Verify the image URL is publicly accessible
- Check that the image is not blocked by robots.txt
- Ensure image is in a supported format (PNG, JPG, GIF)
- Image should be under 8MB for most platforms

---

## 📱 Platform-Specific Requirements

### Facebook/Messenger
- Minimum image size: 200x200px
- Recommended: 1200x630px
- Max file size: 8MB
- Formats: JPG, PNG, GIF

### WhatsApp
- Uses Facebook's Open Graph protocol
- Same requirements as Facebook
- Cache duration: ~7 days

### LinkedIn
- Minimum image size: 1200x627px
- Recommended: 1200x627px
- Max file size: 5MB
- Formats: JPG, PNG, GIF

### Twitter/X
- Minimum image size: 300x157px
- Recommended: 1200x628px
- Max file size: 5MB
- Formats: JPG, PNG, WEBP, GIF

---

## 🚀 Next Steps

After clearing all caches:

1. Test sharing your link on each platform
2. Verify the new preview appears correctly
3. If issues persist, check the troubleshooting section above
4. Consider creating platform-specific OG images if needed

---

## 📞 Need Help?

If you're still seeing the old preview after following these steps:

1. Verify your changes are deployed to production
2. Check the browser console for any errors
3. Use the testing tools above to see what meta tags are being detected
4. Wait 24-48 hours for stubborn caches to expire
