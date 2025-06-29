import React from 'react'
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

// Dynamically import Image component with SSR disabled to prevent hydration errors
const Image = dynamic(() => import('next/image'), { ssr: false })

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation('common')
  const router = useRouter()

  // Detect current locale from URL path
  const getCurrentLocale = () => {
    const path = router.asPath
    if (path.startsWith('/fr')) return 'fr'
    if (path.startsWith('/en')) return 'en'
    return 'fr' // default locale
  }

  const currentLocale = getCurrentLocale()

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Replace with your logo - update the path to match your actual logo file */}
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
              <span className="text-xl font-bold text-white">{t('footer.companyName')}</span>
            </div>
            <p className="text-sm text-neutral-400">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label={t('footer.twitterLabel')}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('header.home')}</h3>
            <ul className="space-y-2">
              <li>
                <a href={`/${currentLocale}/about`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}/services`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  {t('header.services')}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}/blog`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  {t('header.blog')}
                </a>
              </li>
              <li>
                <a href={`/${currentLocale}/contact`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                  {t('header.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('services.hero.title')}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-neutral-400">{t('services.dataCollection.title')}</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">{t('services.dataAnalysis.title')}</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">{t('services.capacityBuilding.title')}</span>
              </li>
              <li>
                <span className="text-sm text-neutral-400">{t('services.knowledgeSharing.title')}</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('contact.hero.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:contact@saturnelab.cd"
                  className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                >
                  contact@saturnelab.cd
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm text-neutral-400">
                  +243 XXX XXX XXX
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              &copy; {currentYear} {t('footer.rights')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href={`/${currentLocale}/privacy`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href={`/${currentLocale}/terms`} className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
