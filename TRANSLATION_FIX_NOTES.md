# Translation Issues Fix - Browser Back/Forward Navigation

## Problem Summary
When navigating from the home page to services page using CTA buttons and then using the browser back button, translation keys were displaying as raw text (e.g., `home.hero.title`) instead of translated content. This issue only occurred:
- On Vercel production (not locally)
- When navigating back to the home page specifically
- When using CTA buttons (not navbar links)

## Root Causes Identified

### 1. Client-Side Navigation vs Full Page Reload
- **Issue**: Next.js `<Link>` components use client-side navigation, which bypasses `getServerSideProps`
- **Impact**: Translations weren't being reloaded when navigating back via browser history
- **Why navbar worked**: Navbar uses `<a>` tags which trigger full page reloads

### 2. Missing Locale Prefix in Links
- **Issue**: CTA buttons linked to `/services` instead of `/fr/services` or `/en/services`
- **Impact**: Middleware redirects caused locale state confusion during back navigation
- **Result**: Browser history had mixed locale states

### 3. Vercel CDN Caching
- **Issue**: Vercel's edge network was caching the home page (`/fr` and `/en` routes)
- **Impact**: Browser back navigation served cached pages with wrong locale
- **Why only home page**: Root locale routes (`/fr`, `/en`) are more aggressively cached than nested routes

## Solutions Implemented

### 1. Changed CTA Buttons from `<Link>` to `<a>` Tags

**Files Modified:**
- `pages/index.tsx` - All CTA buttons (Learn More, Explore Services, Contact, Blog)
- `pages/services.tsx` - CTA buttons (Contact, About)
- `pages/about.tsx` - CTA button (Get in Touch)
- `pages/blog/[slug].tsx` - Back to Blog link

**Before:**
```tsx
<Link href={`${localePrefix}/services`} className="btn-primary">
  {t('home.hero.learnMore')}
</Link>
```

**After:**
```tsx
<a href={`${localePrefix}/services`} className="btn-primary">
  {t('home.hero.learnMore')}
</a>
```

**Why This Works:**
- Regular anchor tags trigger full page navigation
- Full page navigation calls `getServerSideProps` on every request
- Fresh translations are loaded from the server
- Browser back button works correctly with full page loads

### 2. Ensured All Links Include Locale Prefix

**Implementation:**
```tsx
// Get current locale from URL
const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
const localePrefix = currentLocale === 'en' ? '/en' : '/fr'

// Use in all internal links
<a href={`${localePrefix}/services`}>...</a>
```

**Files Updated:**
- All pages with internal navigation links
- Ensures no middleware redirects during navigation
- Maintains locale consistency throughout user journey

### 3. Added Aggressive Cache Control Headers

**File: `pages/index.tsx` - getServerSideProps**
```tsx
export const getServerSideProps: GetServerSideProps = async ({ req, res, resolvedUrl }) => {
  // Prevent caching to ensure fresh translations on every request
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  
  // ... rest of the code
}
```

**File: `vercel.json`**
```json
{
  "headers": [
    {
      "source": "/(fr|en)/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-store, no-cache, must-revalidate, proxy-revalidate"
        },
        {
          "key": "Pragma",
          "value": "no-cache"
        },
        {
          "key": "Expires",
          "value": "0"
        }
      ]
    }
  ]
}
```

**Why This Works:**
- Prevents Vercel CDN from caching locale-specific pages
- Ensures every request gets fresh server-side rendered content
- Browser always receives the correct locale's translations

### 4. Production-Safe Locale Hook

**File: `hooks/useClientSideLocale.ts`**

**Key Features:**
- Starts with `ready: true` (assumes SSR loaded translations)
- Only sets `ready: false` when actively changing locales
- Handles browser back/forward navigation gracefully
- Includes error handling for production safety

```tsx
export const useClientSideLocale = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const [isChangingLocale, setIsChangingLocale] = useState(false)

  useEffect(() => {
    if (!router.isReady) return

    const detectAndSetLocale = async () => {
      const pathname = router.asPath
      const localeFromPath = pathname.startsWith('/en') ? 'en' : 'fr'
      
      if (i18n.language !== localeFromPath && i18n.isInitialized) {
        setIsChangingLocale(true)
        try {
          await i18n.changeLanguage(localeFromPath)
          await new Promise(resolve => setTimeout(resolve, 150))
        } catch (error) {
          console.error('Error changing language:', error)
        } finally {
          setIsChangingLocale(false)
        }
      }
    }

    detectAndSetLocale()
    router.events.on('routeChangeComplete', detectAndSetLocale)
    
    return () => {
      router.events.off('routeChangeComplete', detectAndSetLocale)
    }
  }, [router.isReady, router.asPath, router.events, i18n])

  return { ready: !isChangingLocale }
}
```

## Additional Fixes Applied

### Font Optimization
- Migrated from CSS `@import` to `next/font/google`
- Prevents FOUT (Flash of Unstyled Text) in production
- Self-hosts fonts for better performance

### Viewport Meta Tag
- Added missing viewport meta tag to `_document.tsx`
- Fixed text sizing issues on Vercel production

### React Hooks Rules Compliance
- Moved all hooks before conditional returns
- Fixed "Hooks called conditionally" errors
- Ensures consistent hook ordering

## Testing Checklist

✅ Navigate from home to services using "Learn More" button
✅ Click browser back button - translations load correctly
✅ Navigate from services to about using CTA
✅ Click browser back button - translations load correctly
✅ Switch language using language switcher
✅ Navigate between pages - locale persists
✅ Test on both local and Vercel production
✅ Test in both French and English

## Key Learnings

1. **Next.js Link vs Anchor Tags**: 
   - Use `<Link>` for client-side navigation when translations are already loaded
   - Use `<a>` tags when you need fresh server-side data (like translations)

2. **Vercel Caching**:
   - Root locale routes are cached more aggressively
   - Always set explicit cache headers for dynamic content
   - Test production behavior separately from local

3. **i18n with Custom Middleware**:
   - Custom middleware requires careful locale detection
   - Always include locale prefix in internal links
   - Use `getServerSideProps` (not `getStaticProps`) for runtime locale detection

4. **Browser History Management**:
   - Full page reloads create clean history states
   - Client-side navigation can create stale cached states
   - Cache control is critical for correct back/forward behavior

## Files Modified

### Core Translation System
- `hooks/useClientSideLocale.ts` - Created production-safe locale hook
- `pages/_app.tsx` - Added next/font integration
- `pages/_document.tsx` - Added viewport meta tag

### Pages Updated
- `pages/index.tsx` - Cache headers, locale-aware links, anchor tags
- `pages/services.tsx` - Locale-aware links, anchor tags
- `pages/about.tsx` - Locale-aware links, anchor tags
- `pages/contact.tsx` - Locale-aware links
- `pages/blog/index.tsx` - Locale-aware links
- `pages/blog/[slug].tsx` - Locale-aware links, anchor tags

### Configuration
- `vercel.json` - Added no-cache headers for locale routes
- `tailwind.config.ts` - Updated font family to use CSS variables

### Translation Files
- `public/locales/en/common.json` - Added team member bios
- `public/locales/fr/common.json` - Added French team member bios

## Maintenance Notes

- **When adding new pages**: Ensure all internal links include `${localePrefix}`
- **When adding CTA buttons**: Use `<a>` tags for cross-page navigation
- **When modifying translations**: Test browser back/forward navigation
- **Before deploying**: Test on Vercel preview deployment first

## Related Documentation

- Next.js i18n: https://nextjs.org/docs/advanced-features/i18n-routing
- next-i18next: https://github.com/i18next/next-i18next
- Vercel Caching: https://vercel.com/docs/concepts/edge-network/caching
- React Hooks Rules: https://react.dev/reference/rules/rules-of-hooks

---

**Date Fixed**: 2025-09-30
**Tested On**: Vercel Production (saturne-lab-rdc.vercel.app)
**Status**: ✅ Resolved
