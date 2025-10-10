import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { appWithTranslation } from 'next-i18next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// MDX Components
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4 text-neutral-900" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mb-3 text-neutral-800" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mb-2 text-neutral-700" {...props} />,
  p: (props: any) => <p className="mb-4 text-neutral-600 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-primary-600 hover:text-primary-700 underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-neutral-600" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-neutral-600" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600 mb-4" {...props} />,
  code: (props: any) => <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono" {...props} />,
  pre: (props: any) => <pre className="bg-neutral-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </>
  )
}

export default appWithTranslation(App)
