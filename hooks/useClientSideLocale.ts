import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * Hook for handling client-side locale detection from URL.
 * With our custom I18nProvider, locale is already synced via _app.tsx props,
 * so this hook now just handles browser back/forward by forcing a reload
 * when the locale in the URL changes (to get fresh translations from SSR).
 */
export const useClientSideLocale = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const handleRouteChange = (url: string) => {
      const newLocale = url.startsWith('/en') ? 'en' : 'fr'
      const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
      
      // If locale changed during client-side navigation, force reload to get SSR translations
      if (newLocale !== currentLocale) {
        window.location.href = url
      }
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.isReady, router.asPath, router.events])

  return { ready: true }
}
