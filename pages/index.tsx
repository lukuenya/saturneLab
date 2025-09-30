import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, Database, TrendingUp, Users, BookOpen, CheckCircle, Target } from 'lucide-react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import HeroBackground from '@/components/animations/HeroBackground'
import { FloatingDataElements } from '@/components/animations/FloatingElements'
import { DataAnalyticsIcon, NetworkIcon, AIIcon, DatabaseIcon } from '@/components/animations/DataIcons'
import ImagePlaceholder from '@/components/ImagePlaceholders'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'

const HomePage: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  // Handle client-side locale changes when navigating with browser back/forward
  useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'
  const services = [
    {
      icon: <DatabaseIcon className="mx-auto" size={48} />,
      title: t('services.dataCollection.title'),
      description: t('services.dataCollection.subtitle'),
      features: [t('services.dataCollection.features.0'), t('services.dataCollection.features.1'), t('services.dataCollection.features.2')]
    },
    {
      icon: <DataAnalyticsIcon className="mx-auto" size={48} />,
      title: t('services.strategicInsights.title'),
      description: t('services.strategicInsights.subtitle'),
      features: [t('services.strategicInsights.features.0'), t('services.strategicInsights.features.1'), t('services.strategicInsights.features.2')]
    },
    {
      icon: <AIIcon className="mx-auto" size={48} />,
      title: t('services.optimization.title'),
      description: t('services.optimization.subtitle'),
      features: [t('services.optimization.features.0'), t('services.optimization.features.1'), t('services.optimization.features.2')]
    },
    {
      icon: <NetworkIcon className="mx-auto" size={48} />,
      title: t('services.capacityBuilding.title'),
      description: t('services.capacityBuilding.subtitle'),
      features: [t('services.capacityBuilding.features.0'), t('services.capacityBuilding.features.1'), t('services.capacityBuilding.features.2')]
    }
  ]

  const stats = [
    { number: "50+", label: t('home.stats.projects') },
    { number: "25+", label: t('home.stats.clients') },
    { number: "100+", label: t('home.stats.dataPoints') },
    { number: "5+", label: t('home.stats.insights') }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <HeroBackground />
        <FloatingDataElements />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-neutral-900">{t('home.hero.title')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            <div className="flex justify-center">
              <Link href={`${localePrefix}/services`} className="btn-primary">
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-16 h-16 animate-float">
            <DataAnalyticsIcon size={64} className="text-primary-500" />
          </div>
          <div className="absolute bottom-10 right-20 w-12 h-12 animate-float-delayed">
            <NetworkIcon size={48} className="text-secondary-500" />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-200">
                  {stat.number}
                </div>
                <div className="text-neutral-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-500">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`${localePrefix}/services`} className="btn-primary">
              {t('home.services.exploreAll')}
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 animate-float-slow">
            <AIIcon size={80} className="text-white" />
          </div>
          <div className="absolute bottom-20 right-20 w-16 h-16 animate-float">
            <DatabaseIcon size={64} className="text-white" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${localePrefix}/contact`} className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
              {t('home.cta.contact')}
            </Link>
            <Link href={`${localePrefix}/blog`} className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
              {t('home.cta.blog')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, resolvedUrl }) => {
  // Get locale from middleware headers, URL path, or default to French
  const localeFromHeader = req.headers['x-locale'] as string
  const localeFromPath = resolvedUrl.startsWith('/en') ? 'en' : 'fr'
  const locale = localeFromHeader || localeFromPath || 'fr'

  console.log('Locale detection:', { localeFromHeader, localeFromPath, resolvedUrl, locale })

  try {
    const translations = await serverSideTranslations(locale, ['common'])
    console.log('Translations loaded successfully for locale:', locale)
    console.log('Translation keys available:', Object.keys(translations._nextI18Next?.initialI18nStore?.[locale]?.common || {}))
    
    return {
      props: {
        ...translations,
      },
    }
  } catch (error) {
    console.error('Error loading translations:', error)
    // Fallback to French if there's an error
    const fallbackTranslations = await serverSideTranslations('fr', ['common'])
    return {
      props: {
        ...fallbackTranslations,
      },
    }
  }
}

export default HomePage
