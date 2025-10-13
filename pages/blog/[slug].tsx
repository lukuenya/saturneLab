import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getAllPosts, getPostBySlug, BlogPost } from '@/lib/blog'
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useClientSideLocale } from '@/hooks/useClientSideLocale'

// Dynamically import icons with SSR disabled to prevent hydration errors
const Linkedin = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { ssr: false })
const Twitter = dynamic(() => import('lucide-react').then(mod => mod.Twitter), { ssr: false })
const Github = dynamic(() => import('lucide-react').then(mod => mod.Github), { ssr: false })

interface BlogPostPageProps {
  post: BlogPost
  mdxSource: MDXRemoteSerializeResult
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, mdxSource }) => {
  const { t } = useTranslation('common')
  const router = useRouter()

  // Handle client-side locale changes when navigating with browser back/forward
  useClientSideLocale()
  
  // Get current locale from URL
  const currentLocale = router.asPath.startsWith('/en') ? 'en' : 'fr'
  const localePrefix = currentLocale === 'en' ? '/en' : '/fr'
  const formatDate = (dateString: string) => {
    // Use the current locale for date formatting
    return new Date(dateString).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold mb-6 text-neutral-900" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-semibold mb-4 text-neutral-800 mt-8" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-medium mb-3 text-neutral-700 mt-6" {...props} />,
    p: (props: any) => <p className="mb-4 text-neutral-600 leading-relaxed" {...props} />,
    a: (props: any) => <a className="text-primary-600 hover:text-primary-700 underline" {...props} />,
    ul: (props: any) => <ul className="list-disc list-inside mb-4 text-neutral-600 space-y-1" {...props} />,
    ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-neutral-600 space-y-1" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-primary-500 pl-6 py-2 italic text-neutral-600 mb-4 bg-primary-50 rounded-r-lg" {...props} />
    ),
    code: (props: any) => <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono text-primary-600" {...props} />,
    pre: (props: any) => (
      <pre className="bg-neutral-100 p-4 rounded-lg overflow-x-auto mb-4 border border-neutral-200" {...props} />
    ),
    img: (props: any) => {
      // Use Next.js Image component with proper width/height and alt
      return (
        <div className="relative w-full h-[400px] mb-4">
          <Image 
            className="rounded-lg object-cover" 
            src={props.src} 
            alt={props.alt || 'Blog post image'} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={props.priority === 'true'}
          />
        </div>
      )
    },
  }

  return (
    <Layout
      title={`${post.title} - Saturne Lab Blog`}
      description={post.description}
    >
      {/* Back Navigation */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a 
            href={`${localePrefix}/blog`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('blog.post.backToBlog')}
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            {post.tags.length > 0 && (
              <div className="flex items-center mt-4">
                <Tag className="h-4 w-4 mr-2 text-neutral-400" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-neutral-100 text-neutral-600 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
              {post.imageCredit && (
                <p className="text-xs text-neutral-500 italic mt-2 text-right">
                  {post.imageCredit}
                </p>
              )}
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-neutral max-w-none">
            <MDXRemote {...mdxSource} components={components} />
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {t('blog.post.aboutAuthor')}
                </h3>
                <p className="text-neutral-600">
                  {t('blog.post.authorBio', { author: post.author })}
                </p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/saturnelab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                >
                  {/* Wrap icon in a client-side only component */}
                  <span className="inline-flex mr-2">
                    <Linkedin className="h-4 w-4" />
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/saturnelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <span className="inline-flex mr-2">
                    <Twitter className="h-4 w-4" />
                  </span>
                  Twitter
                </a>
                <a
                  href="https://github.com/saturnelab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <span className="inline-flex mr-2">
                    <Github className="h-4 w-4" />
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params, req, resolvedUrl }) => {
  // Get locale from middleware headers or URL path
  const localeFromHeader = req.headers['x-locale'] as string
  const localeFromPath = resolvedUrl.startsWith('/en') ? 'en' : 'fr'
  const locale = localeFromHeader || localeFromPath

  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post,
      mdxSource,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default BlogPostPage
