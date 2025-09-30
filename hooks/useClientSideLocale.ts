import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/**
 * Production-safe hook for handling client-side locale changes
 * Fixes issues with browser back/forward navigation in Vercel production
 */
export const useClientSideLocale = () => {
  const router = useRouter()
  const { i18n, t } = useTranslation()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Safety check: only run if router is ready
    if (!router.isReady) {
      return
    }

    const detectAndSetLocale = async () => {
      try {
        const pathname = router.asPath
        const localeFromPath = pathname.startsWith('/en') ? 'en' : 'fr'
        
        // Only change locale if it's different from current and i18n is initialized
        if (i18n.language !== localeFromPath && i18n.isInitialized) {
          console.log('Client-side locale change detected:', { 
            from: i18n.language, 
            to: localeFromPath, 
            pathname 
          })
          
          setIsReady(false)
          
          try {
            await i18n.changeLanguage(localeFromPath)
            // Wait a bit for translations to load
            await new Promise(resolve => setTimeout(resolve, 100))
            setIsReady(true)
          } catch (error) {
            console.error('Error changing language:', error)
            setIsReady(true)
          }
        } else {
          // Check if translations are actually loaded by testing a key
          const testKey = 'header.home'
          const translation = t(testKey)
          // If translation returns the key itself, it's not loaded yet
          if (translation !== testKey) {
            setIsReady(true)
          } else {
            // Wait and retry
            setTimeout(() => setIsReady(true), 200)
          }
        }
      } catch (error) {
        console.error('Error detecting locale:', error)
        setIsReady(true)
      }
    }

    // Detect locale on component mount
    detectAndSetLocale()

    // Listen for route changes
    router.events.on('routeChangeComplete', detectAndSetLocale)
    
    return () => {
      router.events.off('routeChangeComplete', detectAndSetLocale)
    }
  }, [router.isReady, router.asPath, router.events, i18n, t])

  // Return whether translations are ready to use
  return { ready: isReady }
}
