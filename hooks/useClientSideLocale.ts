import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/**
 * Production-safe hook for handling client-side locale changes
 * Fixes issues with browser back/forward navigation in Vercel production
 */
export const useClientSideLocale = () => {
  const router = useRouter()
  const { i18n } = useTranslation()

  useEffect(() => {
    // Safety check: only run if router and i18n are ready
    if (!router.isReady || !i18n.isInitialized) {
      return
    }

    const detectAndSetLocale = async () => {
      try {
        const pathname = router.asPath
        const localeFromPath = pathname.startsWith('/en') ? 'en' : 'fr'
        
        // Only change locale if it's different from current
        if (i18n.language !== localeFromPath) {
          console.log('Client-side locale change detected:', { 
            from: i18n.language, 
            to: localeFromPath, 
            pathname 
          })
          
          // Use setTimeout to avoid race conditions with Next.js routing
          setTimeout(async () => {
            try {
              await i18n.changeLanguage(localeFromPath)
            } catch (error) {
              console.error('Error changing language:', error)
            }
          }, 0)
        }
      } catch (error) {
        console.error('Error detecting locale:', error)
      }
    }

    // Detect locale on component mount
    detectAndSetLocale()

    // Listen for route changes
    router.events.on('routeChangeComplete', detectAndSetLocale)
    
    return () => {
      router.events.off('routeChangeComplete', detectAndSetLocale)
    }
  }, [router.isReady, router.asPath, router.events, i18n])
}
