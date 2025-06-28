import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { Database, TrendingUp, Users, BookOpen, ArrowRight, CheckCircle, BarChart3, Shield, Zap, Target } from 'lucide-react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ServicesPage: React.FC = () => {
  const { t } = useTranslation('common')
  const services = [
    {
      icon: <Database className="h-8 w-8 text-primary-600" />,
      title: t('services.dataCollection.title'),
      subtitle: t('services.dataCollection.subtitle'),
      description: t('services.dataCollection.description'),
      features: (t('services.dataCollection.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.dataCollection.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.dataCollection.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-600" />,
      title: t('services.strategicInsights.title'),
      subtitle: t('services.strategicInsights.subtitle'),
      description: t('services.strategicInsights.description'),
      features: (t('services.strategicInsights.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.strategicInsights.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.strategicInsights.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: t('services.optimization.title'),
      subtitle: t('services.optimization.subtitle'),
      description: t('services.optimization.description'),
      features: (t('services.optimization.features', { returnObjects: true }) as string[]) || [],
      benefits: (t('services.optimization.benefits', { returnObjects: true }) as string[]) || [],
      process: (t('services.optimization.process', { returnObjects: true }) as string[]) || []
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-neutral-900 dark:to-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            {t('services.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {t('services.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-lg text-primary-600 dark:text-primary-400">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0" />
                        <span className="text-neutral-600 dark:text-neutral-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('services.keyBenefits')}
                    </h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-primary-700 dark:text-primary-300">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">
                      {t('services.processSteps')}
                    </h4>
                    <ul className="space-y-1">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-primary-700 dark:text-primary-300">
                          • {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex items-center">
                    {t('services.getStarted')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 p-8 rounded-2xl h-96 flex items-center justify-center">
                    <div className="text-center">
                      {React.cloneElement(service.icon, { className: "h-24 w-24 text-primary-600 mx-auto mb-4" })}
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('services.additional.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {t('services.additional.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              {t('services.process.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              {t('services.cta.contact')}
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
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
