import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, Database, TrendingUp, Users, BookOpen, CheckCircle, Target } from 'lucide-react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const HomePage: React.FC = () => {
  const { t } = useTranslation('common')
  const services = [
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: t('services.dataCollection.title'),
      description: t('services.dataCollection.subtitle'),
      features: [t('services.dataCollection.features.0'), t('services.dataCollection.features.1'), t('services.dataCollection.features.2')]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: t('services.strategicInsights.title'),
      description: t('services.strategicInsights.subtitle'),
      features: [t('services.strategicInsights.features.0'), t('services.strategicInsights.features.1'), t('services.strategicInsights.features.2')]
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: t('services.optimization.title'),
      description: t('services.optimization.subtitle'),
      features: [t('services.optimization.features.0'), t('services.optimization.features.1'), t('services.optimization.features.2')]
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
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
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-neutral-900 dark:text-white">{t('home.hero.title')}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                {t('home.hero.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                {t('home.hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card group hover:scale-105 transition-transform duration-200">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              {t('home.services.exploreAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              {t('home.cta.contact')}
            </Link>
            <Link href="/blog" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              {t('home.cta.blog')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // Get locale from middleware headers or URL path
  const headerLocale = req.headers['x-locale']
  const locale = (Array.isArray(headerLocale) ? headerLocale[0] : headerLocale) || 
                 (req.url?.startsWith('/fr') ? 'fr' : 
                  req.url?.startsWith('/en') ? 'en' : 'fr')
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage
