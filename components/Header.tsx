import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu, X, Globe } from 'lucide-react'
import { useTranslation } from 'next-i18next'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation('common')

  // Detect current locale from URL path
  const getCurrentLocale = () => {
    const path = router.asPath
    if (path.startsWith('/fr')) return 'fr'
    if (path.startsWith('/en')) return 'en'
    return 'fr' // default locale
  }

  const currentLocale = getCurrentLocale()

  const navigation = [
    { name: t('header.about'), href: `/${currentLocale}/about` },
    { name: t('header.services'), href: `/${currentLocale}/services` },
    { name: t('header.blog'), href: `/${currentLocale}/blog` },
    { name: t('header.contact'), href: `/${currentLocale}/contact` },
  ]

  const isActive = (path: string) => {
    const currentPath = router.asPath.replace(/^\/(fr|en)/, '') || '/'
    return currentPath === path
  }

  // Handle language switch
  const handleLanguageSwitch = () => {
    const newLocale = currentLocale === 'fr' ? 'en' : 'fr'
    const currentPath = router.asPath.replace(/^\/(fr|en)/, '') || '/'
    const newPath = `/${newLocale}${currentPath}`
    // Use window.location.href to force full page reload and trigger getServerSideProps
    window.location.href = newPath
  }

  return (
    <header className="bg-white shadow-sm border-b border-neutral-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={`/${currentLocale}`} className="flex items-center space-x-2">
              {/* Logo with increased size */}
              <div className="relative w-16 h-16">
                <Image 
                  src="/images/saturne_lab_logo.png" 
                  alt="Saturne Lab Logo" 
                  width={64} 
                  height={64} 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-primary-700">
                SATURNE LAB
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-100'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                className="p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200 flex items-center"
                aria-label="Change language"
                onClick={handleLanguageSwitch}
              >
                <Globe className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{currentLocale === 'fr' ? 'EN' : 'FR'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-neutral-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
