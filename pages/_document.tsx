import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'
import { i18n } from '../next-i18next.config'

export default function Document(props: DocumentProps) {
  // Get locale from request object or props
  const currentLocale = props.__NEXT_DATA__?.locale || i18n.defaultLocale
  
  return (
    <Html lang={currentLocale}>
      <Head>
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Favicon using company logo */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-HE24F893YD`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HE24F893YD');
            `,
          }}
        />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Organization Structured Data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Saturne Lab",
              "url": "https://www.saturne-lab.com",
              "logo": "https://www.saturne-lab.com/images/saturne_lab_logo.png",
              "description": "Building Africa's Intelligence Through Data. We transform raw information into economic intelligence for public institutions and businesses across Africa.",
              "sameAs": [
                "https://www.linkedin.com/company/saturne-lab",
                "https://twitter.com/saturnelab"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "contact@saturne-lab.com"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
