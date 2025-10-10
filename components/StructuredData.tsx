import React from 'react'
import Head from 'next/head'

interface OrganizationSchemaProps {
  locale?: string
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({ locale = 'fr' }) => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Saturne Lab",
    "legalName": "Saturne Lab",
    "url": "https://www.saturne-lab.com",
    "logo": "https://www.saturne-lab.com/images/saturne_lab_logo.png",
    "description": locale === 'en' 
      ? "Empowering businesses and academia in DRC with data collection, strategic insights, capacity building, and knowledge sharing."
      : "Autonomiser les entreprises et le monde académique en RDC avec la collecte de données, des insights stratégiques, le renforcement des capacités et le partage des connaissances.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CD",
      "addressRegion": "Kinshasa",
      "addressLocality": "Kinshasa"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-4.3276",
      "longitude": "15.3136"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Democratic Republic of Congo"
    },
    "sameAs": [
      "https://www.linkedin.com/company/saturne-lab",
      "https://twitter.com/saturnelab"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@saturne-lab.com",
      "availableLanguage": ["French", "English"]
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </Head>
  )
}

interface ServiceSchemaProps {
  locale?: string
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ locale = 'fr' }) => {
  const services = locale === 'en' 
    ? [
        {
          "@type": "Service",
          "name": "Data Collection & Management",
          "description": "Professional data collection services tailored for the DRC market, including surveys, field data collection, and data quality assurance.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Data Collection"
        },
        {
          "@type": "Service",
          "name": "Strategic Insights & Analytics",
          "description": "Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization services.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Business Analytics"
        },
        {
          "@type": "Service",
          "name": "Consulting & Strategy",
          "description": "Data-driven consulting services to help organizations make informed decisions and develop effective strategies.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Consulting"
        },
        {
          "@type": "Service",
          "name": "Capacity Building & Training",
          "description": "Comprehensive training programs in data science, analytics, and research methodologies for teams and organizations.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Training"
        }
      ]
    : [
        {
          "@type": "Service",
          "name": "Collecte et Gestion de Données",
          "description": "Services professionnels de collecte de données adaptés au marché de la RDC, incluant des enquêtes, collecte de données sur le terrain et assurance qualité des données.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "République Démocratique du Congo"
          },
          "serviceType": "Collecte de Données"
        },
        {
          "@type": "Service",
          "name": "Insights Stratégiques & Analytique",
          "description": "Transformez vos données en insights actionnables avec des services d'analytique avancée, intelligence d'affaires et visualisation de données.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "République Démocratique du Congo"
          },
          "serviceType": "Analytique d'Affaires"
        },
        {
          "@type": "Service",
          "name": "Conseil & Stratégie",
          "description": "Services de conseil basés sur les données pour aider les organisations à prendre des décisions éclairées et développer des stratégies efficaces.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "République Démocratique du Congo"
          },
          "serviceType": "Conseil"
        },
        {
          "@type": "Service",
          "name": "Renforcement des Capacités & Formation",
          "description": "Programmes de formation complets en science des données, analytique et méthodologies de recherche pour les équipes et organisations.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "République Démocratique du Congo"
          },
          "serviceType": "Formation"
        }
      ]

  const serviceListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": service
    }))
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListData) }}
      />
    </Head>
  )
}

interface WebsiteSchemaProps {
  locale?: string
}

export const WebsiteSchema: React.FC<WebsiteSchemaProps> = ({ locale = 'fr' }) => {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Saturne Lab",
    "url": "https://www.saturne-lab.com",
    "description": locale === 'en'
      ? "Data-driven growth and strategic insights for businesses and academia in the Democratic Republic of Congo"
      : "Croissance basée sur les données et insights stratégiques pour les entreprises et le monde académique en République Démocratique du Congo",
    "inLanguage": [locale === 'en' ? 'en-US' : 'fr-FR'],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://www.saturne-lab.com/${locale}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </Head>
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </Head>
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  publishedDate: string
  modifiedDate?: string
  imageUrl: string
  url: string
  locale?: string
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  title,
  description,
  author,
  publishedDate,
  modifiedDate,
  imageUrl,
  url,
  locale = 'fr'
}) => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saturne Lab",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.saturne-lab.com/images/saturne_lab_logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": locale === 'en' ? 'en-US' : 'fr-FR'
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
    </Head>
  )
}
