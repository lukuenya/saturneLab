import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { ExcellenceIcon, CollaborationIcon, IntegrityIcon, ImpactIcon } from '@/components/animations/ValueIcons'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'

const AboutPage: React.FC = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  
  // Handle client-side locale changes when navigating with browser back/forward
  useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'
  const values = [
    {
      icon: <ExcellenceIcon size={60} />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: <CollaborationIcon size={60} />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: <IntegrityIcon size={60} />,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    },
    {
      icon: <ImpactIcon size={60} />,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    }
  ]

  const team = [
    {
      name: t('about.team.members.matthieu.name'),
      role: t('about.team.members.matthieu.role'),
      bio: t('about.team.members.matthieu.bio'),
      image: "/images/matt.jpg"
    },
    {
      name: t('about.team.members.jacques.name'),
      role: t('about.team.members.jacques.role'),
      bio: t('about.team.members.jacques.bio'),
      image: "/team/jacques.jpg"
    },
    {
      name: t('about.team.members.maurice.name'),
      role: t('about.team.members.maurice.role'),
      bio: t('about.team.members.maurice.bio'),
      image: "/team/maurice.jpg"
    },
    {
      name: t('about.team.members.johan.name'),
      role: t('about.team.members.johan.role'),
      bio: t('about.team.members.johan.bio'),
      image: "/team/johan.jpg"
    }
  ]

  return (
    <Layout
      title="About Us - Saturne Lab"
      description="Learn about Saturne Lab's mission, values, and team. We're dedicated to empowering data-driven growth in the Democratic Republic of Congo."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                {t('about.story.mission')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                {t('about.story.whyWeStarted')}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t('about.story.whyWeStartedDescription')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center items-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center shadow-inner">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-16">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="object-cover"
                      style={{ width: '100%', height: '100%', objectPosition: 'center 15%' }}
                    />
                  ) : (
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.bio}
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
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('about.cta.subtitle')}
          </p>
          <Link href={`${localePrefix}/contact`} className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 inline-block">
            {t('about.cta.button')}
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, resolvedUrl }) => {
  // Get locale from middleware headers or URL path
  const localeFromHeader = req.headers['x-locale'] as string
  const localeFromPath = resolvedUrl.startsWith('/en') ? 'en' : 'fr'
  const locale = localeFromHeader || localeFromPath

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default AboutPage
