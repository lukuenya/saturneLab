import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Users, Database, BarChart3, Calendar, Clock, User, Building2, Briefcase, Globe } from 'lucide-react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { DataAnalyticsIcon, NetworkIcon, AIIcon, DatabaseIcon } from '@/components/animations/DataIcons'
import { FloatingDataElements } from '@/components/animations/FloatingElements'
import { HeroBackground } from '@/components/animations/HeroBackground'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'
import { getAllPosts, BlogPost } from '@/lib/blog'
import ImagePlaceholder from '@/components/ImagePlaceholders'

interface HomePageProps {
  recentPosts: BlogPost[]
}

const HomePage: React.FC<HomePageProps> = ({ recentPosts = [] }) => {
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
      title: t('services.analytics.title'),
      description: t('services.analytics.subtitle'),
      features: [t('services.analytics.features.0'), t('services.analytics.features.1'), t('services.analytics.features.2')]
    },
    {
      icon: <AIIcon className="mx-auto" size={48} />,
      title: t('services.consulting.title'),
      description: t('services.consulting.subtitle'),
      features: [t('services.consulting.features.0'), t('services.consulting.features.1'), t('services.consulting.features.2')]
    },
    {
      icon: <NetworkIcon className="mx-auto" size={48} />,
      title: t('services.training.title'),
      description: t('services.training.subtitle'),
      features: [t('services.training.features.0'), t('services.training.features.1'), t('services.training.features.2')]
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
            <p className="text-xl text-neutral-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              {t('home.hero.description')}
            </p>
            <p className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-8 max-w-2xl mx-auto">
              {t('home.hero.mission')}
            </p>
            <div className="flex justify-center">
              <a href={`${localePrefix}/services`} className="btn-primary">
                {t('home.hero.learnMore')}
              </a>
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
            <a href={`${localePrefix}/services`} className="btn-primary">
              {t('home.services.exploreAll')}
            </a>
          </div>
        </div>
      </section>

      {/* Partners / Sectors We Serve Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('home.partners.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              {t('home.partners.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Government */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">
                {t('home.partners.government.title')}
              </h3>
              <p className="text-neutral-600 text-center text-sm">
                {t('home.partners.government.description')}
              </p>
            </div>

            {/* Private Sector */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-secondary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">
                {t('home.partners.private.title')}
              </h3>
              <p className="text-neutral-600 text-center text-sm">
                {t('home.partners.private.description')}
              </p>
            </div>

            {/* International Organizations */}
            <div className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">
                {t('home.partners.international.title')}
              </h3>
              <p className="text-neutral-600 text-center text-sm">
                {t('home.partners.international.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('home.blog.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('home.blog.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`${localePrefix}/blog/${post.slug}`}>
                <div className="card group cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-primary-600 text-6xl font-bold opacity-20">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-neutral-500 space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-neutral-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={`${localePrefix}/blog`} className="btn-primary">
              {t('home.blog.viewAll')}
            </a>
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
            <a href={`${localePrefix}/contact`} className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
              {t('home.cta.contact')}
            </a>
            <a href={`${localePrefix}/blog`} className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 transform hover:scale-105">
              {t('home.cta.blog')}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, resolvedUrl }) => {
  // Prevent caching to ensure fresh translations on every request
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  
  // Get locale from middleware headers, URL path, or default to French
  const localeFromHeader = req.headers['x-locale'] as string
  const localeFromPath = resolvedUrl.startsWith('/en') ? 'en' : 'fr'
  const locale = localeFromHeader || localeFromPath || 'fr'

  console.log('Home page - Locale detection:', { localeFromHeader, localeFromPath, resolvedUrl, locale })

  try {
    const translations = await serverSideTranslations(locale, ['common'])
    const recentPosts = getAllPosts().slice(0, 3) // Get the 3 most recent posts
    console.log('Home page - Translations loaded successfully for locale:', locale)
    
    return {
      props: {
        ...translations,
        recentPosts,
      },
    }
  } catch (error) {
    console.error('Home page - Error loading translations:', error)
    // Fallback to French if there's an error
    const fallbackTranslations = await serverSideTranslations('fr', ['common'])
    return {
      props: {
        ...fallbackTranslations,
        recentPosts: [],
      },
    }
  }
}

export default HomePage
