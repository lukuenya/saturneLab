import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentProps } from 'next/document'
import { i18n } from '../next-i18next.config'

export default function Document(props: DocumentProps) {
  // Get locale from request object or props
  const currentLocale = props.__NEXT_DATA__?.locale || i18n.defaultLocale
  
  return (
    <Html lang={currentLocale}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
