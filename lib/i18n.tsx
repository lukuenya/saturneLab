import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface I18nContextType {
  locale: string
  t: (key: string, options?: { returnObjects?: boolean; [key: string]: any }) => any
  i18n: {
    changeLanguage: (locale: string) => void
    language: string
    isInitialized: boolean
  }
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

interface I18nProviderProps {
  children: React.ReactNode
  translations: Record<string, any>
  locale: string
}

export function I18nProvider({ children, translations, locale }: I18nProviderProps) {
  const router = useRouter()
  const [currentLocale, setCurrentLocale] = useState(locale)
  const [isInitialized, setIsInitialized] = useState(true)

  const t = (key: string, options?: { returnObjects?: boolean; [key: string]: any }): any => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      value = value?.[k]
    }

    if (value === undefined || value === null) return key

    // Return raw object/array if requested
    if (options?.returnObjects && typeof value === 'object') {
      return value
    }
    
    // Interpolate variables like {{author}}
    if (typeof value === 'string' && options) {
      return value.replace(/\{\{(\w+)\}\}/g, (_, varName) => {
        return options[varName] !== undefined ? String(options[varName]) : `{{${varName}}}`
      })
    }
    
    return typeof value === 'string' ? value : key
  }

  const changeLanguage = (newLocale: string) => {
    const currentPath = router.asPath.replace(/^\/(en|fr)/, '')
    const newPath = `/${newLocale}${currentPath || ''}`
    router.push(newPath)
  }

  useEffect(() => {
    // Update locale from URL
    const pathLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
    if (pathLocale !== currentLocale) {
      setCurrentLocale(pathLocale)
    }
  }, [router.asPath, currentLocale])

  const value: I18nContextType = {
    locale: currentLocale,
    t,
    i18n: {
      changeLanguage,
      language: currentLocale,
      isInitialized
    }
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useTranslation(_namespace?: string) {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider')
  }
  return context
}
