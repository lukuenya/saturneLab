import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/**
 * Production-safe hook for handling client-side locale changes
 * Fixes issues with browser back/forward navigation in Vercel production
 */
export const useClientSideLocale = () => {
  const router = useRouter()
  const { i18n } = useTranslation()
  const [isChangingLocale, setIsChangingLocale] = useState(false)

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
          
          setIsChangingLocale(true)
          
          try {
            await i18n.changeLanguage(localeFromPath)
            // Wait a bit for translations to load
            await new Promise(resolve => setTimeout(resolve, 150))
          } catch (error) {
            console.error('Error changing language:', error)
          } finally {
            setIsChangingLocale(false)
          }
        }
      } catch (error) {
        console.error('Error detecting locale:', error)
        setIsChangingLocale(false)
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

  // Return whether translations are ready to use
  // Start with true (assume SSR loaded translations), only false when actively changing
  return { ready: !isChangingLocale }
}
