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
  const { ready } = useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'
  
  // Show loading state while translations are loading
  if (!ready) {
    return (
      <Layout title="Services - Saturne Lab" description="Our Services">
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </Layout>
    )
  }
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
      title: t('services.strategicInsights.title'),
      subtitle: t('services.strategicInsights.subtitle'),
      description: t('services.strategicInsights.description'),
      features: (t('services.strategicInsights.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.strategicInsights.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.strategicInsights.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <AIIcon size={32} />,
      animatedIcon: <AIIcon size={96} />,
      visualType: 'analytics' as const,
      title: t('services.optimization.title'),
      subtitle: t('services.optimization.subtitle'),
      description: t('services.optimization.description'),
      features: (t('services.optimization.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.optimization.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.optimization.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <NetworkIcon size={32} />,
      animatedIcon: <NetworkIcon size={96} />,
      visualType: 'team' as const,
      title: t('services.capacityBuilding.title'),
      subtitle: t('services.capacityBuilding.subtitle'),
      description: t('services.capacityBuilding.description'),
      features: (t('services.capacityBuilding.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.capacityBuilding.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.capacityBuilding.process', { returnObjects: true }) as string[]) || []
    }
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="h-12 w-12 text-primary-600" />,
      title: t('services.additional.dataVisualization.title'),
      description: t('services.additional.dataVisualization.description')
    },
    {
      icon: <Shield className="h-12 w-12 text-primary-600" />,
      title: t('services.additional.dataGovernance.title'),
      description: t('services.additional.dataGovernance.description')
    },
    {
      icon: <Zap className="h-12 w-12 text-primary-600" />,
      title: t('services.additional.processAutomation.title'),
      description: t('services.additional.processAutomation.description')
    }
  ]

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('services.additional.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('services.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </div>
            ))}
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
            <Link href={`${localePrefix}/contact`} className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {t('services.cta.contact')}
            </Link>
            <Link href={`${localePrefix}/about`} className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
              {t('services.cta.about')}
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

export default ServicesPage
