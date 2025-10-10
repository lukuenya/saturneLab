import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Database, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle, BarChart3, Shield, Zap, Target } from 'lucide-react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { DataAnalyticsIcon, NetworkIcon, AIIcon, DatabaseIcon } from '@/components/animations/DataIcons'
import { FloatingDataElements } from '@/components/animations/FloatingElements'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'

const ServicesPage: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  // Handle client-side locale changes when navigating with browser back/forward
  useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'
  const services = [
    {
      icon: <DatabaseIcon size={32} />,
      animatedIcon: <DatabaseIcon size={96} />,
      visualType: 'data-center' as const,
      title: t('services.dataCollection.title'),
      subtitle: t('services.dataCollection.subtitle'),
      description: t('services.dataCollection.description'),
      features: (t('services.dataCollection.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.dataCollection.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.dataCollection.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <DataAnalyticsIcon size={32} />,
      animatedIcon: <DataAnalyticsIcon size={96} />,
      visualType: 'analytics' as const,
      title: t('services.analytics.title'),
      subtitle: t('services.analytics.subtitle'),
      description: t('services.analytics.description'),
      features: (t('services.analytics.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.analytics.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.analytics.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <Target className="h-8 w-8" />,
      animatedIcon: <Target className="h-24 w-24" />,
      visualType: 'analytics' as const,
      title: t('services.consulting.title'),
      subtitle: t('services.consulting.subtitle'),
      description: t('services.consulting.description'),
      features: (t('services.consulting.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.consulting.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.consulting.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <Zap className="h-8 w-8" />,
      animatedIcon: <Zap className="h-24 w-24" />,
      visualType: 'data-center' as const,
      title: t('services.digitalSolutions.title'),
      subtitle: t('services.digitalSolutions.subtitle'),
      description: t('services.digitalSolutions.description'),
      features: (t('services.digitalSolutions.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.digitalSolutions.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.digitalSolutions.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <NetworkIcon size={32} />,
      animatedIcon: <NetworkIcon size={96} />,
      visualType: 'team' as const,
      title: t('services.training.title'),
      subtitle: t('services.training.subtitle'),
      description: t('services.training.description'),
      features: (t('services.training.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.training.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.training.process', { returnObjects: true }) as string[]) || []
    }
  ]

  const additionalService = {
    icon: <BookOpen className="h-12 w-12 text-primary-600" />,
    title: t('services.additional.title'),
    subtitle: t('services.additional.subtitle'),
    description: t('services.additional.description'),
    features: (t('services.additional.features', { returnObjects: true }) as string[]) || []
  }

  const processSteps = [
    {
      step: "01",
      title: t('services.process.discovery.title'),
      description: t('services.process.discovery.description')
    },
    {
      step: "02",
      title: t('services.process.strategy.title'),
      description: t('services.process.strategy.description')
    },
    {
      step: "03",
      title: t('services.process.implementation.title'),
      description: t('services.process.implementation.description')
    },
    {
      step: "04",
      title: t('services.process.optimization.title'),
      description: t('services.process.optimization.description')
    }
  ]

  return (
    <Layout
      title={t('services.title')}
      description={t('services.description')}
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <FloatingDataElements />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 animate-fade-in">
            {t('services.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed animate-slide-up">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Visual card - appears first on mobile, positioned by grid order on desktop */}
                <div className={`order-1 lg:order-none ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl h-96 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="text-center w-full flex flex-col items-center">
                      <div className="mb-6 transform hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                        {service.animatedIcon}
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Text content - appears second on mobile, positioned by grid order on desktop */}
                <div className={`order-2 lg:order-none ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="mb-4">
                    <h2 className="text-3xl font-bold text-neutral-900">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary-600">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {t('services.keyBenefits')}
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-primary-700">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {t('services.processSteps')}
                    </h4>
                    <ul className="space-y-1">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-primary-700">
                          • {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center">
            <div className="flex justify-center mb-6">
              {additionalService.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3">
              {additionalService.title}
            </h2>
            <p className="text-lg text-primary-600 mb-4">
              {additionalService.subtitle}
            </p>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              {additionalService.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {additionalService.features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-600 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-neutral-600">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 opacity-30" />
                )}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {phase.title}
                </h3>
                <p className="text-neutral-600">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 animate-float">
            <DataAnalyticsIcon size={80} className="text-white" />
          </div>
          <div className="absolute bottom-10 right-10 w-16 h-16 animate-float-delayed">
            <NetworkIcon size={64} className="text-white" />
          </div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 animate-float-slow">
            <AIIcon size={48} className="text-white" />
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`${localePrefix}/contact`} className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('services.cta.contact')}
            </a>
            <a href={`${localePrefix}/about`} className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              {t('services.cta.about')}
            </a>
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

export default ServicesPage
