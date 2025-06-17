import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from '@/components/ThemeProvider'
import '@/styles/globals.css'

// MDX Components
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold mb-3 text-neutral-800 dark:text-neutral-100" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-medium mb-2 text-neutral-700 dark:text-neutral-200" {...props} />,
  p: (props: any) => <p className="mb-4 text-neutral-600 dark:text-neutral-300 leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-neutral-600 dark:text-neutral-300" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-neutral-600 dark:text-neutral-300" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary-500 pl-4 italic text-neutral-600 dark:text-neutral-300 mb-4" {...props} />,
  code: (props: any) => <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm font-mono" {...props} />,
  pre: (props: any) => <pre className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
