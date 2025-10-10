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
    "legalName": "Saturne Lab SARL",
    "url": "https://www.saturne-lab.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.saturne-lab.com/images/saturne_lab_logo.png",
      "width": "512",
      "height": "512"
    },
    "image": "https://www.saturne-lab.com/images/saturne_lab_logo.png",
    "description": locale === 'en' 
      ? "Empowering digital transformation through data analytics, software development, and economic intelligence"
      : "Favoriser la transformation numérique grâce à l'analyse de données, au développement logiciel et à l'intelligence économique",
    "foundingDate": "2025",
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
      "email": "contact@saturnelab.com",
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
          "name": "Data Collection & Processing",
          "description": "Professional data collection and processing services including surveys, field data collection, and automated data pipelines.",
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
          "name": "Analytics, Forecasting & Optimization",
          "description": "Advanced analytics, predictive modeling, and optimization services to transform data into actionable insights.",
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
          "name": "Economic & Strategic Intelligence Consulting",
          "description": "Strategic consulting services providing economic intelligence and data-driven recommendations for decision makers.",
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
          "name": "Digital & Software Solutions",
          "description": "Custom software development including management systems, web applications, and digital platforms for various sectors.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Democratic Republic of Congo"
          },
          "serviceType": "Software Development"
        },
        {
          "@type": "Service",
          "name": "Training & Capacity Building",
          "description": "Comprehensive training programs in data science, software development, and digital transformation methodologies.",
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
          "name": "Collecte et Traitement de Données",
          "description": "Services professionnels de collecte et traitement de données incluant enquêtes, collecte sur le terrain et pipelines de données automatisés.",
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
          "name": "Analyse, Prévision et Optimisation",
          "description": "Services d'analytique avancée, modélisation prédictive et optimisation pour transformer les données en insights actionnables.",
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
          "name": "Conseil en Intelligence Économique et Stratégique",
          "description": "Services de conseil stratégique fournissant intelligence économique et recommandations basées sur les données pour les décideurs.",
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
          "name": "Solutions Numériques et Logicielles",
          "description": "Développement logiciel personnalisé incluant systèmes de gestion, applications web et plateformes numériques pour divers secteurs.",
          "provider": {
            "@type": "Organization",
            "name": "Saturne Lab"
          },
          "areaServed": {
            "@type": "Country",
            "name": "République Démocratique du Congo"
          },
          "serviceType": "Développement Logiciel"
        },
        {
          "@type": "Service",
          "name": "Formation et Renforcement des Capacités",
          "description": "Programmes de formation complets en science des données, développement logiciel et méthodologies de transformation numérique.",
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
