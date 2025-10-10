import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
  ogImage?: string
  ogUrl?: string
  keywords?: string
  article?: boolean
  publishedTime?: string
  modifiedTime?: string
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Saturne Lab - Data-Driven Growth in DRC',
  description = 'Empowering businesses and academia in DRC with data collection, strategic insights, capacity building, and knowledge sharing.',
  ogImage = 'https://www.saturne-lab.com/images/saturne_lab_logo.png',
  ogUrl,
  keywords = 'data analytics, DRC, Congo, business intelligence, data science, strategic insights, capacity building, data collection, research, consulting',
  article = false,
  publishedTime,
  modifiedTime
}) => {
  const router = useRouter()
  
  // Detect current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const currentPath = router.asPath.replace(/^\/(fr|en)/, '') || '/'
  
  // Build canonical and alternate URLs
  const baseUrl = 'https://www.saturne-lab.com'
  const canonicalUrl = ogUrl || `${baseUrl}/${currentLocale}${currentPath}`
  const alternateFrUrl = `${baseUrl}/fr${currentPath}`
  const alternateEnUrl = `${baseUrl}/en${currentPath}`
  
  // Set og:locale based on current language
  const ogLocale = currentLocale === 'en' ? 'en_US' : 'fr_FR'
  const ogLocaleAlternate = currentLocale === 'en' ? 'fr_FR' : 'en_US'
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang tags for multilingual SEO */}
        <link rel="alternate" hrefLang="fr" href={alternateFrUrl} />
        <link rel="alternate" hrefLang="en" href={alternateEnUrl} />
        <link rel="alternate" hrefLang="x-default" href={alternateFrUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={article ? 'article' : 'website'} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Saturne Lab" />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
        
        {/* Article specific meta tags */}
        {article && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
        {article && modifiedTime && (
          <meta property="article:modified_time" content={modifiedTime} />
        )}
        {article && (
          <>
            <meta property="article:author" content="Saturne Lab" />
            <meta property="article:section" content="Data Science" />
          </>
        )}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* WhatsApp specific */}
        <meta property="og:image:alt" content="Saturne Lab - Data Analytics & Strategic Insights" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Saturne Lab" />
        <meta name="language" content={currentLocale === 'en' ? 'English' : 'French'} />
        
        {/* Geo tags for DRC focus */}
        <meta name="geo.region" content="CD" />
        <meta name="geo.placename" content="Democratic Republic of Congo" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
