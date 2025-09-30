import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'
import { i18n } from '../next-i18next.config'

export default function Document(props: DocumentProps) {
  // Get locale from request object or props
  const currentLocale = props.__NEXT_DATA__?.locale || i18n.defaultLocale
  
  return (
    <Html lang={currentLocale}>
      <Head>
        {/* Favicon using company logo */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="theme-color" content="#3B82F6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
